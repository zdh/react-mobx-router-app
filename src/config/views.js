import React from 'react';

import Loadable from 'react-loadable';

//models
import {Route} from 'mobx-router';

//components

// import Article from './components/Article';
// import Editor from './components/Editor';
// import Home from './components/Home';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Register from './components/Register';
// import Settings from './components/Settings';

// Loading Component
function Loading() {
    return <div>Loading...</div>;
}

const Article = Loadable({
    loader: () => import('../components/Article'),
    loading: Loading,
});

const Editor = Loadable({
    loader: () => import('../components/Editor'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('../components/Home'),
    loading: Loading,
});

const Login = Loadable({
    loader: () => import('../components/Login'),
    loading: Loading,
});

const Profile = Loadable({
    loader: () => import('../components/Profile'),
    loading: Loading,
});

const Register = Loadable({
    loader: () => import('../components/Register'),
    loading: Loading,
});

const Settings = Loadable({
    loader: () => import('../components/Settings'),
    loading: Loading,
});

const views = {
    login: new Route({
        path: '/login',
        component: <Login/>
    }),
    register: new Route({
        path: '/register',
        component: <Register/>
    }),
    editor: new Route({
        path: '/editor/:slug?',
        component: <Editor/>,
        // beforeEnter: (route, params, store) => {
        //   store.editorStore.setArticleSlug(params.slug);
        // },
        // onEnter: (route, params, store) => {
        //   store.editorStore.loadInitialData();
        // }
    }),
    article: new Route({
        path: '/article/:id',
        component: <Article/>
    }),
    settings: new Route({
        path: '/settings',
        component: <Settings/>
    }),
    usernams: new Route({
        path: '/@:usernams',
        component: <Profile/>
    }),
    favorites: new Route({
        path: '/@:username/favorites',
        component: <Profile/>
    }),
    home: new Route({
        path: '/',
        component: <Home/>,
        // beforeEnter: (route, params, store) => {
        //   if (store ) {
        //     if( !store.commonStore.token){
        //       store.commonStore.setAppLoaded();
        //     }
        //   }
        // },
        // onEnter: (route, params,store) => {
        //   if (store ) {
        //     if (store && store.commonStore.token) {
        //       store.userStore.pullUser()
        //           .finally(() => store.commonStore.setAppLoaded());
        //     }
        //   }
        // }
    })
};
export default views;
