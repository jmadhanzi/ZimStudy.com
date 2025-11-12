'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BookOpen, TrendingUp, Award, Clock } from 'lucide-react'
import { subjectsApi, userApi } from '@/lib/api'
import { getUser, isAuthenticated } from '@/lib/auth'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState<any>(null)
  const [enrolledSubjects, setEnrolledSubjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login')
      return
    }

    const userData = getUser()
    setUser(userData)

    loadDashboardData()
  }, [router])

  const loadDashboardData = async () => {
    try {
      const [statsRes, enrollmentsRes] = await Promise.all([
        userApi.getStats(),
        subjectsApi.getEnrolled(),
      ])

      setStats(statsRes.data.data.stats)
      setEnrolledSubjects(enrollmentsRes.data.data.enrollments)
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user?.firstName}! 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Let's continue your learning journey
              </p>
            </div>
            <Link href="/subjects" className="btn-primary">
              Browse Subjects
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Enrolled Subjects</p>
                <p className="text-2xl font-bold">{stats?.enrolledSubjects || 0}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Topics Completed</p>
                <p className="text-2xl font-bold">{stats?.completedTopics || 0}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
                <p className="text-2xl font-bold">{stats?.points || 0}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Study Streak</p>
                <p className="text-2xl font-bold">{stats?.streak || 0} days</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Subjects */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Subjects</h2>
            <Link href="/subjects" className="text-primary-600 hover:text-primary-700 font-medium">
              View All →
            </Link>
          </div>

          {enrolledSubjects.length === 0 ? (
            <div className="card text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No subjects enrolled yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Start your learning journey by enrolling in subjects
              </p>
              <Link href="/subjects" className="btn-primary inline-block">
                Browse Subjects
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledSubjects.map((enrollment) => (
                <Link
                  key={enrollment.id}
                  href={`/subjects/${enrollment.subject.id}`}
                  className="card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{enrollment.subject.icon || '📚'}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{enrollment.subject.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {enrollment.subject.level.replace('_', ' ')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {enrollment.subject.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      {enrollment.subject._count?.topics || 0} topics
                    </span>
                    <span className="text-primary-600 font-medium">Continue →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/subjects" className="card hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Browse Subjects</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Explore available subjects and enroll in new courses
              </p>
            </Link>

            <Link href="/profile" className="card hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">My Progress</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                View your learning progress and achievements
              </p>
            </Link>

            <Link href="/settings" className="card hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">WhatsApp Alerts</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Set up WhatsApp notifications for study reminders
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
