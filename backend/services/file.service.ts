import FileModel from '../models/file.model'

export const saveFile = async (data: {
  userId: string
  filename: string
  originalName: string
  mimetype: string
  size: number
  path: string
}) => {
  console.log('[SERVICE] Saving to DB:', data)
  const file = new FileModel(data)
  return await file.save()
}

export const getFilesByUser = async (userId: string) => {
  return await FileModel.find({ userId }).sort({ createdAt: -1 })
}
