export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6074a63119b9a60db2808926',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j8tctxzm',
                  apiId: '3f9155a1-894a-4bd4-8990-6e72452fca33'
                },
                {
                  buildHookId: '6074a631ff19df1acf2c664e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pw8kg2cg',
                  apiId: '384a3ce9-43dd-4570-82d4-18c71d83b4d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamandi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pw8kg2cg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
