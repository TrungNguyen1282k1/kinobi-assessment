import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import uploadRoutes from './routes/upload.routes'
import { join } from 'path'
import { connectToDB } from './utils/db'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to MongoDB
connectToDB()

// Middlewares
app.use(cors())
app.use(helmet())
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  })
)

// Serve static files
app.use('/uploads', express.static(join(__dirname, 'uploads')))

// Routes
app.use('/api', uploadRoutes)

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err.message)
  res.status(500).json({ error: err.message || 'Something went wrong.' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
