import { File } from '@saulx/aristotle-build'
//   server: string

// also send req ofc
export type RenderOpts = {
  body: string
  head: string
  env: string[]
  envFile: string
  js: File[]
  css: File[]
  files: {
    [filename: string]: File
  }
  needsEs5: boolean
  url: string
  queryString: string
  language: string
  userAgent: {
    device: string
    browser: string
    version: number
  }
}

// maybe seperate function for how to cache?

export type RenderResult =
  | undefined
  | string
  | {
      cache: number
      checksum: string
      contents: Buffer | string
      contentLength?: number
      gzip?: boolean
      mime?: string
      statusCode?: number
    }

export type ServeResult = {
  cache: number | string
  checksum: string
  contents: Buffer
  contentLength: number
  mime: string
  gzip: boolean
  statusCode: number
}

export type RenderFunction = (renderOpts: RenderOpts) => Promise<RenderResult>
