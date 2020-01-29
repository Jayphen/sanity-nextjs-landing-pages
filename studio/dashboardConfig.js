export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e3170efbb0210776fb2e47d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ukbzqeaw',
                  apiId: 'd9fef053-b396-4f0a-989e-902cf59452bb'
                },
                {
                  buildHookId: '5e3170f0a46a96771a29893b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eqmcb9gn',
                  apiId: '7d5083f5-5f53-4a6d-83e6-ed5836b0958b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jayphen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eqmcb9gn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
