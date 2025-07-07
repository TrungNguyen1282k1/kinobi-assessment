import { Request, Response } from 'express'
import * as fileService from '../services/file.service'

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('[DEBUG] req.body:', req.body)
    console.log('[DEBUG] req.file:', req.file)

    if (!req.file || !req.body.userId) {
      res.status(400).json({ error: 'File and userId are required.' })
      return
    }

    const saved = await fileService.saveFile({
      userId: req.body.userId,
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path
    })

    console.log('[DEBUG] saved file to DB:', saved)

    res.status(201).json({ message: 'File uploaded successfully.', file: saved })
  } catch (error: any) {
    console.error('Upload error:', error)
    res.status(500).json({ error: error.message })
  }
}

export const listFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.query.userId as string
    if (!userId) {
      res.status(400).json({ error: 'userId query param is required.' })
      return
    }

    const files = await fileService.getFilesByUser(userId)
    res.status(200).json(files)
  } catch (error: any) {
    console.error('List error:', error)
    res.status(500).json({ error: error.message })
  }
}
