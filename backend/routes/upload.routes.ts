import { Router } from 'express'
import upload from '../middleware/multer.config'
import { uploadFile, listFiles } from '../controllers/file.controller'

const router = Router()

router.post('/upload', upload.single('file'), uploadFile)
router.get('/files', listFiles)

export default router

