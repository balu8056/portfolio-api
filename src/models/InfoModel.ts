import mongoose, { Schema } from 'mongoose'
import { SocialMediaType, SkillCertificationType, InfoModelType } from '../helpers/interfaces'
import { INFO_COLLECTION_NAME } from '../helpers/contants'

const InfoModel: Schema = new Schema(
  {
    aliasName: { type: String, required: true },
    fullName: { type: String, required: true },
    mainImg: { type: String, required: true },
    aboutImg: { type: String, required: true },
    designation: { type: String, required: true },
    profileNames: { type: Array<string>, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    socialMedias: { type: Array<SocialMediaType>, required: true },
    description: { type: String, required: true },
    skills: { type: Array<SkillCertificationType>, required: true },
    certification: { type: Array<SkillCertificationType>, required: true },
    contactDesc: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false }
)

export default mongoose.model<InfoModelType>(INFO_COLLECTION_NAME, InfoModel)
