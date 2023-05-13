import mongoose, { Schema } from 'mongoose'
import { BlogTypeModelType } from '../helpers/interfaces'
import { BLOGS_COLLECTION_NAME } from '../helpers/contants'

const BlogModel = new Schema(
  {
    infoId: {
      type: Schema.Types.ObjectId,
      ref: 'infos',
    },
    logo: { type: String },
    heading: { type: String },
    desc: { type: String },
    content: { type: String },
    author: { type: String },
    writtenOn: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false }
)

export default mongoose.model<BlogTypeModelType>(BLOGS_COLLECTION_NAME, BlogModel)
