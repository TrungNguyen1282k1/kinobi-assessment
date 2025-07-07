import mongoose from 'mongoose'

const FileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    filename: { type: String, required: true },
    originalName: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('File', FileSchema)
