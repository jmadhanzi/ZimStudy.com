'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Clock, CheckCircle, XCircle } from 'lucide-react'
import { quizApi } from '@/lib/api'
import { isAuthenticated } from '@/lib/auth'

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const quizId = params.id as string

  const [quiz, setQuiz] = useState<any>(null)
  const [attemptId, setAttemptId] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<any[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login')
      return
    }

    loadQuiz()
  }, [quizId, router])

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && attemptId && !submitted) {
      handleSubmit()
    }
  }, [timeLeft, submitted, attemptId])

  const loadQuiz = async () => {
    try {
      const response = await quizApi.getById(quizId)
      const quizData = response.data.data.quiz

      setQuiz(quizData)
      setAnswers(quizData.questions.map(() => ({ questionId: '', selectedOption: -1 })))

      // Start attempt
      const attemptRes = await quizApi.startAttempt(quizId)
      setAttemptId(attemptRes.data.data.attempt.id)

      // Set timer
      if (quizData.timeLimit) {
        setTimeLeft(quizData.timeLimit * 60) // Convert to seconds
      }
    } catch (error) {
      console.error('Failed to load quiz:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (questionId: string, optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = { questionId, selectedOption: optionIndex }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    if (!attemptId) return

    try {
      const timeSpent = quiz.timeLimit ? (quiz.timeLimit * 60 - timeLeft) : 0
      const response = await quizApi.submitAttempt(attemptId, {
        answers,
        timeSpent,
      })

      setResult(response.data.data)
      setSubmitted(true)
    } catch (error) {
      console.error('Failed to submit quiz:', error)
    }
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Quiz not found</h2>
          <Link href="/dashboard" className="text-primary-600 hover:text-primary-700">
            ← Back to dashboard
          </Link>
        </div>
      </div>
    )
  }

  if (submitted && result) {
    const passed = result.passed

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="card text-center">
            {passed ? (
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            ) : (
              <XCircle className="w-20 h-20 text-red-600 mx-auto mb-4" />
            )}

            <h1 className="text-3xl font-bold mb-2">
              {passed ? 'Congratulations! 🎉' : 'Keep Practicing! 💪'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {passed
                ? `You passed the quiz with ${result.percentage.toFixed(1)}%`
                : `You scored ${result.percentage.toFixed(1)}%. You need ${quiz.passingScore}% to pass.`}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-2xl font-bold">
                  {result.score}/{result.totalPoints}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Percentage</p>
                <p className="text-2xl font-bold">{result.percentage.toFixed(1)}%</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Points Earned</p>
                <p className="text-2xl font-bold">+{result.pointsEarned}</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary">
                Back to Dashboard
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setResult(null)
                  setCurrentQuestion(0)
                  setAnswers(quiz.questions.map(() => ({ questionId: '', selectedOption: -1 })))
                  loadQuiz()
                }}
                className="btn-secondary"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="card mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{quiz.title}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </div>
            {quiz.timeLimit && (
              <div className="flex items-center bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 mr-2 text-primary-600" />
                <span className="font-bold text-lg">{formatTime(timeLeft)}</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold mb-6">{question.question}</h2>

          <div className="space-y-3">
            {(question.options as string[]).map((option, index) => (
              <label
                key={index}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  answers[currentQuestion]?.selectedOption === index
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={answers[currentQuestion]?.selectedOption === index}
                  onChange={() => handleAnswer(question.id, index)}
                  className="mr-3"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="btn-secondary disabled:opacity-50"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {quiz.questions.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium ${
                  index === currentQuestion
                    ? 'bg-primary-600 text-white'
                    : answers[index]?.selectedOption !== -1
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === quiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={answers.some((a) => a.selectedOption === -1)}
              className="btn-primary disabled:opacity-50"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion]?.selectedOption === -1}
              className="btn-primary disabled:opacity-50"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
