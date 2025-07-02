import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import fs from 'fs'
import sanitize from 'sanitize-filename'
import { Request } from 'express'

const uploadDir = path.join(__dirname, '../uploads')

// Ensure uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Define storage behavior
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir)
  },
  filename: (_req, file, cb) => {
    const sanitizedName = sanitize(file.originalname)
    cb(null, `${Date.now()}-${sanitizedName}`)
  }
})

// Allow general files, disallow dangerous types
const disallowedTypes = [
  'application/x-msdownload', // .exe
  'application/x-sh',         // .sh
  'application/x-bat',        // .bat
  'application/javascript',   // .js (optional depending on context)
]

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (disallowedTypes.includes(file.mimetype)) {
    return cb(new Error('Disallowed file type.'))
  }
  cb(null, true)
}

// Export the configured multer instance
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter
})

export default upload
