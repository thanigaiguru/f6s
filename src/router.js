import Vue from 'vue';
import Router from 'vue-router';

// Declare the routes with the appropriate order.
import chatRoutes from './routers/chat/chatRoutes.js';

Vue.use(Router);

let childrenRoutes = [ chatRoutes ];

const router = new Router(
    {
        routes: [
            {
                path: `/`,
                name: 'Home', //No I18N
                redirect: {name: 'Chat'},
                component: () => import( /* webpackChunkName: "Home" */ './pages/Home.vue'), //No I18N
                children: childrenRoutes
            },
        ],
        mode: 'history' //No I18N
    },
)

export default router;