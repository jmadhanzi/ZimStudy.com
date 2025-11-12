import Link from 'next/link'
import { BookOpen, Users, TrendingUp, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to ZimStudy.com
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your Gateway to Quality Education in Zimbabwe
            </p>
            <p className="text-lg mb-12 text-primary-50">
              Access study materials, take quizzes, and get WhatsApp updates - all in one platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/auth/login"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors border-2 border-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose ZimStudy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access comprehensive study notes, videos, and past papers aligned with the Zimbabwean curriculum
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your learning journey with detailed analytics and achievement tracking
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Quizzes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Test your knowledge with engaging quizzes and get instant feedback
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive study reminders, daily quizzes, and updates directly on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Available Subjects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-2xl font-bold mb-2">Mathematics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Algebra, Geometry, Trigonometry, and more
              </p>
              <Link href="/subjects" className="text-primary-600 hover:text-primary-700 font-medium">
                Explore →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2">English</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Grammar, Comprehension, and Composition
              </p>
              <Link href="/subjects" className="text-primary-600 hover:text-primary-700 font-medium">
                Explore →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-2">Science</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Biology, Chemistry, and Physics
              </p>
              <Link href="/subjects" className="text-primary-600 hover:text-primary-700 font-medium">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of Zimbabwean students improving their grades
          </p>
          <Link
            href="/auth/register"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors inline-block"
          >
            Sign Up Now - It's Free!
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">ZimStudy.com</h3>
              <p className="text-sm">
                Empowering Zimbabwean students with accessible, quality education.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/subjects" className="hover:text-white">Subjects</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">Email: support@zimstudy.com</p>
              <p className="text-sm">Phone: +263 77 123 4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 ZimStudy.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
