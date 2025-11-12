import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error)
  }
)

// API functions
export const authApi = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: any) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
}

export const subjectsApi = {
  getAll: (params?: any) => api.get('/subjects', { params }),
  getById: (id: string) => api.get(`/subjects/${id}`),
  getTopics: (id: string) => api.get(`/subjects/${id}/topics`),
  enroll: (id: string) => api.post(`/subjects/${id}/enroll`),
  unenroll: (id: string) => api.delete(`/subjects/${id}/enroll`),
  getEnrolled: () => api.get('/subjects/enrolled/me'),
}

export const contentApi = {
  getByTopic: (topicId: string) => api.get(`/content/topic/${topicId}`),
  getById: (id: string) => api.get(`/content/${id}`),
  trackView: (id: string) => api.post(`/content/${id}/view`),
}

export const quizApi = {
  getById: (id: string) => api.get(`/quizzes/${id}`),
  startAttempt: (id: string) => api.post(`/quizzes/${id}/attempt`),
  submitAttempt: (attemptId: string, data: any) =>
    api.patch(`/quizzes/attempt/${attemptId}`, data),
  getAttempt: (attemptId: string) => api.get(`/quizzes/attempt/${attemptId}`),
  getUserAttempts: (params?: any) => api.get('/quizzes/user/attempts', { params }),
}

export const progressApi = {
  getMy: () => api.get('/progress/my'),
  getSubjectProgress: (subjectId: string) =>
    api.get(`/progress/subject/${subjectId}`),
  markTopicComplete: (topicId: string) =>
    api.post(`/progress/topic/${topicId}/complete`),
}

export const userApi = {
  getStats: () => api.get('/users/stats'),
  updateProfile: (data: any) => api.patch('/users/profile', data),
}

export const notificationsApi = {
  getMy: (params?: any) => api.get('/notifications', { params }),
  markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
  markAllAsRead: () => api.patch('/notifications/read-all'),
  delete: (id: string) => api.delete(`/notifications/${id}`),
}

export const whatsappApi = {
  optIn: (phoneNumber: string) => api.post('/whatsapp/opt-in', { phoneNumber }),
  optOut: () => api.post('/whatsapp/opt-out'),
}
