/* eslint-disable @typescript-eslint/no-explicit-any */
// import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'

export const schema: { types: any[] } = {
  types: [author, startup],
}
