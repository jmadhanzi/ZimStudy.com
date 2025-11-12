'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { authApi } from '@/lib/api'
import { setToken, setUser } from '@/lib/auth'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    level: 'ORDINARY_LEVEL',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await authApi.register(formData)
      const { token, user } = response.data.data

      setToken(token)
      setUser(user)

      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            ZimStudy.com
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Create your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="input"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="input"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                className="input"
                placeholder="Password (min. 6 characters)"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="input"
                placeholder="+263771234567"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium mb-2">
                Education Level
              </label>
              <select
                id="level"
                name="level"
                className="input"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="PRIMARY">Primary</option>
                <option value="ORDINARY_LEVEL">Ordinary Level (O-Level)</option>
                <option value="ADVANCED_LEVEL">Advanced Level (A-Level)</option>
                <option value="TERTIARY">Tertiary</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-center justify-center"
            >
              {loading ? 'Creating account...' : 'Register'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                href="/auth/login"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              ← Back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
