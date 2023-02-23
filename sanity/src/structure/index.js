export const structure = (S, context) => 
  S.list()
    .title('Site Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        ...S.documentTypeListItems().filter(
          (listItem) =>
            ![
              'siteSettings',
              // 'articles',
              // 'tags',
              // 'author',
            ].includes(listItem.getId())
        ),
      ])
       
    