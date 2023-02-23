import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articles',
  title: 'Artikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'lead',
      title: 'Ingress',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'author',
      title: 'Laget av',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'section',
      title: 'Seksjon',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sections'}}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tags'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publisert',
      type: 'date',
    }),
    defineField({
      name: 'carousel',
      title: 'Vis i karusell',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `av ${author}`}
    },
  },
})
