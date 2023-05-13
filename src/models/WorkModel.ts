import mongoose, { Schema } from 'mongoose'
import { WorkModelType } from '../helpers/interfaces'
import { WORKS_COLLECTION_NAME } from '../helpers/contants'

const WorkModel: Schema = new Schema(
  {
    infoId: {
      type: Schema.Types.ObjectId,
      ref: 'infos',
    },
    heading: { type: String },
    description: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false }
)

export default mongoose.model<WorkModelType>(WORKS_COLLECTION_NAME, WorkModel)
