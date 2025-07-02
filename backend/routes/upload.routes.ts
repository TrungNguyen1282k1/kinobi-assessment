import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import upload from '../middleware/multer.config'

const router = Router()
const uploadDir = path.join(__dirname, '../uploads')

// Upload endpoint
router.post('/upload', upload.single('file'), (req: Request, res: Response):void => {
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded.' })
    return
  }

  res.status(200).json({
    message: 'File uploaded successfully.',
    filename: req.file.filename
  })
})

// List files
router.get('/files', (_req: Request, res: Response) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read files.' })
    }
    res.status(200).json(files)
  })
})

export default router
