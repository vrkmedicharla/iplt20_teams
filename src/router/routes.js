import pointTables from 'pages/pointTables'
import teams from 'pages/teams'

const routes = [
    // {
    //       path: '/',
    //       component: () =>
    //           import ('layouts/MainLayout.vue'),
    //       children: [
    //           { path: '', component: () =>
    //                   import ('pages/Index.vue') }
    //       ]
    //   },
    {
        path: "/",
        component: pointTables
    },
    {
        path: '/teams/:teamId/:teamName',
        component: teams
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes