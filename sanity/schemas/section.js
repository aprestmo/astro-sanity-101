import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sections',
  title: 'Seksjoner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
    })
  ],
})
