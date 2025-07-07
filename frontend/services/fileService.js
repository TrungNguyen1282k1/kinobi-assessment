import axios from 'axios'

const API = axios.create({ baseURL: '/api' })

export async function uploadFile(file, userId) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('userId', userId)
  const res = await API.post('/upload', formData)
  return res.data
}

export async function fetchUserFiles(userId) {
  const res = await API.get('/files', { params: { userId } })
  return res.data
}