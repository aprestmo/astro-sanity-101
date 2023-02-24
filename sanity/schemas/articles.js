import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
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
      rows: 3,
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
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'A description of the image for robots',
        },
      ],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
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
      initialValue: false,
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
