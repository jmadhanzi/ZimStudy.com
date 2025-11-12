'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookOpen } from 'lucide-react'
import { subjectsApi } from '@/lib/api'
import { isAuthenticated } from '@/lib/auth'

export default function SubjectsPage() {
  const router = useRouter()
  const [subjects, setSubjects] = useState<any[]>([])
  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [levelFilter, setLevelFilter] = useState('all')

  useEffect(() => {
    loadSubjects()
    if (isAuthenticated()) {
      loadEnrolledSubjects()
    } else {
      setLoading(false)
    }
  }, [levelFilter])

  const loadSubjects = async () => {
    try {
      const params = levelFilter !== 'all' ? { level: levelFilter } : {}
      const response = await subjectsApi.getAll(params)
      setSubjects(response.data.data.subjects)
    } catch (error) {
      console.error('Failed to load subjects:', error)
    }
  }

  const loadEnrolledSubjects = async () => {
    try {
      const response = await subjectsApi.getEnrolled()
      const enrolled = new Set(response.data.data.enrollments.map((e: any) => e.subjectId))
      setEnrolledIds(enrolled)
    } catch (error) {
      console.error('Failed to load enrolled subjects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEnroll = async (subjectId: string) => {
    if (!isAuthenticated()) {
      router.push('/auth/login')
      return
    }

    try {
      await subjectsApi.enroll(subjectId)
      setEnrolledIds(new Set([...enrolledIds, subjectId]))
    } catch (error) {
      console.error('Failed to enroll:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading subjects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse Subjects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Choose subjects to start your learning journey
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <label htmlFor="level" className="block text-sm font-medium mb-2">
            Filter by Level
          </label>
          <select
            id="level"
            className="input max-w-xs"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="PRIMARY">Primary</option>
            <option value="ORDINARY_LEVEL">Ordinary Level (O-Level)</option>
            <option value="ADVANCED_LEVEL">Advanced Level (A-Level)</option>
            <option value="TERTIARY">Tertiary</option>
          </select>
        </div>

        {/* Subjects Grid */}
        {subjects.length === 0 ? (
          <div className="card text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No subjects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => {
              const isEnrolled = enrolledIds.has(subject.id)

              return (
                <div key={subject.id} className="card">
                  <div className="flex items-start mb-4">
                    <div className="text-5xl mr-4">{subject.icon || '📚'}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{subject.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {subject.level.replace('_', ' ')}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 min-h-[3rem]">
                    {subject.description}
                  </p>

                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-500">
                      {subject._count?.topics || 0} topics
                    </span>
                    <span className="text-gray-500">
                      {subject._count?.enrollments || 0} students
                    </span>
                  </div>

                  {isEnrolled ? (
                    <Link
                      href={`/subjects/${subject.id}`}
                      className="btn-primary w-full text-center block"
                    >
                      View Subject
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleEnroll(subject.id)}
                      className="btn-secondary w-full"
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Back to Dashboard */}
        {isAuthenticated() && (
          <div className="mt-8 text-center">
            <Link
              href="/dashboard"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
