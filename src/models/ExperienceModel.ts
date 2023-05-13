import mongoose, { Schema } from 'mongoose'
import { ExperienceModelType } from '../helpers/interfaces'
import { EXPERIENCE_COLLECTION_NAME } from '../helpers/contants'

const ExperienceModel = new Schema(
  {
    infoId: {
      type: Schema.Types.ObjectId,
      ref: 'infos',
    },
    companyName: { type: String },
    from: { type: String },
    to: { type: String },
    designation: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false }
)

export default mongoose.model<ExperienceModelType>(EXPERIENCE_COLLECTION_NAME, ExperienceModel)
