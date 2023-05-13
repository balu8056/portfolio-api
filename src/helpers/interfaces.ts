export { Document } from 'mongoose'

export interface SocialMediaType {
  name: string
  url: string
}

export interface SkillCertificationType {
  name: string
  logo: string
}

export interface InfoType {
  aliasName: string
  fullName: string
  mainImg: string
  aboutImg: string
  designation: string
  profileNames: Array<string>
  email: string
  phoneNo: string
  socialMedias: Array<SocialMediaType>
  description: string
  skills: Array<SkillCertificationType>
  certification: Array<SkillCertificationType>
  contactDesc: string
  address: string
}
export interface InfoModelType extends InfoType, Document {}

export interface WorkType {
  infoId: string
  heading: string
  description: string
}
export interface WorkModelType extends WorkType, Document {}

export interface ExperienceType {
  infoId: string
  companyName: string
  from: string
  to: string
  designation: string
}
export interface ExperienceModelType extends ExperienceType, Document {}

export interface BlogType {
  infoId: string
  logo: string
  heading: string
  desc: string
  content: string
  author: string
  authorImg: string
  writtenOn: string
}
export interface BlogTypeModelType extends BlogType, Document {}
