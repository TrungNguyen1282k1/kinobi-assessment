import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import fs from 'fs'
import sanitize from 'sanitize-filename'
import { Request } from 'express'

const uploadDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir)
  },
  filename: (_req, file, cb) => {
    const sanitizedName = sanitize(file.originalname)
    cb(null, `${Date.now()}-${sanitizedName}`)
  }
})

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml']
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only image files are allowed.'))
  }
  cb(null, true)
}

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter
})

export default upload
