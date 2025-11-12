'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { BookOpen, CheckCircle, Circle, Play, FileText, Award } from 'lucide-react'
import { subjectsApi, contentApi, progressApi } from '@/lib/api'
import { isAuthenticated } from '@/lib/auth'

export default function SubjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const subjectId = params.id as string

  const [subject, setSubject] = useState<any>(null)
  const [topics, setTopics] = useState<any[]>([])
  const [selectedContent, setSelectedContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login')
      return
    }

    loadSubjectData()
  }, [subjectId, router])

  const loadSubjectData = async () => {
    try {
      const [subjectRes, topicsRes] = await Promise.all([
        subjectsApi.getById(subjectId),
        subjectsApi.getTopics(subjectId),
      ])

      setSubject(subjectRes.data.data.subject)
      setTopics(topicsRes.data.data.topics)
    } catch (error) {
      console.error('Failed to load subject:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleContentClick = async (contentId: string) => {
    try {
      const response = await contentApi.getById(contentId)
      setSelectedContent(response.data.data.content)

      // Track view
      await contentApi.trackView(contentId)
    } catch (error) {
      console.error('Failed to load content:', error)
    }
  }

  const handleMarkComplete = async (topicId: string) => {
    try {
      await progressApi.markTopicComplete(topicId)
      // Reload topics to update progress
      const topicsRes = await subjectsApi.getTopics(subjectId)
      setTopics(topicsRes.data.data.topics)
    } catch (error) {
      console.error('Failed to mark complete:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading subject...</p>
        </div>
      </div>
    )
  }

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Subject not found</h2>
          <Link href="/subjects" className="text-primary-600 hover:text-primary-700">
            ← Back to subjects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <div className="text-5xl mr-4">{subject.icon || '📚'}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {subject.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {subject.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Topics Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-4">
              <h2 className="text-xl font-bold mb-4">Topics</h2>
              <div className="space-y-2">
                {topics.map((topic) => {
                  const isCompleted = topic.progress?.[0]?.completed

                  return (
                    <div key={topic.id} className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-3 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start flex-1">
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <h3 className="font-semibold text-sm">{topic.title}</h3>
                            {topic.description && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {topic.description}
                              </p>
                            )}
                          </div>
                        </div>
                        {!isCompleted && topic.progress?.[0] && (
                          <button
                            onClick={() => handleMarkComplete(topic.id)}
                            className="text-xs text-primary-600 hover:text-primary-700 ml-2"
                          >
                            Mark Complete
                          </button>
                        )}
                      </div>

                      {/* Content items */}
                      <div className="ml-7 space-y-1">
                        {topic.contents?.map((content: any) => (
                          <button
                            key={content.id}
                            onClick={() => handleContentClick(content.id)}
                            className={`text-sm w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center ${
                              selectedContent?.id === content.id
                                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                                : ''
                            }`}
                          >
                            {content.type === 'VIDEO' && <Play className="w-3 h-3 mr-1" />}
                            {content.type === 'NOTE' && <FileText className="w-3 h-3 mr-1" />}
                            {content.type === 'QUIZ' && <Award className="w-3 h-3 mr-1" />}
                            <span className="truncate">{content.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            {selectedContent ? (
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">{selectedContent.title}</h2>
                {selectedContent.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedContent.description}
                  </p>
                )}

                {selectedContent.type === 'NOTE' && (
                  <div className="markdown-content">
                    <ReactMarkdown>{selectedContent.content}</ReactMarkdown>
                  </div>
                )}

                {selectedContent.type === 'VIDEO' && (
                  <div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center mb-4">
                      <Play className="w-16 h-16 text-gray-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Video player coming soon...
                    </p>
                  </div>
                )}

                {selectedContent.type === 'QUIZ' && selectedContent.quiz && (
                  <div>
                    <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 mb-4">
                      <h3 className="text-lg font-bold mb-2">Quiz Available</h3>
                      <p className="text-sm mb-4">
                        Test your knowledge with {selectedContent.quiz.questions?.length || 0} questions
                      </p>
                      <div className="flex gap-4 text-sm mb-4">
                        <span>⏱️ {selectedContent.quiz.timeLimit} minutes</span>
                        <span>🎯 Pass: {selectedContent.quiz.passingScore}%</span>
                        <span>📊 {selectedContent.quiz.difficulty}</span>
                      </div>
                      <Link
                        href={`/quizzes/${selectedContent.quiz.id}`}
                        className="btn-primary inline-block"
                      >
                        Start Quiz
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="card text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Select a topic to begin</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a topic from the sidebar to view content
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/dashboard"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
