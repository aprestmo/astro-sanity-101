import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Innstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sidetittel',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'ogImage',
      title: 'Delebilde',
      type: 'image',
    }),
  ]
});