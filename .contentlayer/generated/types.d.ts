// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Page = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Page'
  title: string
  description: string
  date?: IsoDateTimeString | undefined
  image?: string | undefined
  imageAlt?: string | undefined
  imageCaption?: string | undefined
  socials?: string[] | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  slugAsParams: string
}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  description: string
  date: IsoDateTimeString
  published: boolean
  image: string
  imageCaption?: string | undefined
  category: string
  author?: Author | undefined
  tags: string[]
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  slugAsParams: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  title: string
  category: string
  description?: string | undefined
  url: string
  date: IsoDateTimeString
  icon: string
  screenshot: string
  tags: string[]
  features: string[]
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  slugAsParams: string
}

export type Social = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Social'
  title: string
  description: string
  address: string
  url: string
  icon: string
  iconColor: string
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  slugAsParams: string
}  

/** Nested types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  name: string
  image: string
  twitter: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Page | Post | Project | Social
export type DocumentTypeNames = 'Page' | 'Post' | 'Project' | 'Social'

export type NestedTypes = Author
export type NestedTypeNames = 'Author'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allPages: Page[]
  allProjects: Project[]
  allSocials: Social[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Page: Page
  Post: Post
  Project: Project
  Social: Social
}

export type NestedTypeMap = {
  Author: Author
}

 
