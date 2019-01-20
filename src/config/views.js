import React from "react";

import Loadable from "react-loadable";

//models
import { Route } from "mobx-router";

//components

// import Article from './components/Article';
// import Editor from './components/Editor';
// import Home from './components/Home';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Register from './components/Register';
// import Settings from './components/Settings';

// Loading Component
function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const Article = Loadable({
  loader: () => import("../components/Article"),
  loading: Loading
});

const Editor = Loadable({
  loader: () => import("../components/Editor"),
  loading: Loading
});

const Home = Loadable({
  loader: () => import("../components/Home"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../components/Login"),
  loading: Loading
});

const Profile = Loadable({
  loader: () => import("../components/Profile"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("../components/Register"),
  loading: Loading
});

const Settings = Loadable({
  loader: () => import("../components/Settings"),
  loading: Loading
});

const views = {
  login: new Route({
    path: "/login",
    component: <Login />
  }),
  register: new Route({
    path: "/register",
    component: <Register />
  }),
  editor: new Route({
    path: "/editor/:slug?",
    component: <Editor />
  }),
  article: new Route({
    path: "/article/:id",
    component: <Article />
  }),
  settings: new Route({
    path: "/settings",
    component: <Settings />
  }),
  profile: new Route({
    path: "/:username/:fav",
    component: <Profile />
  }),
  home: new Route({
    path: "/",
    component: <Home />,
    onParamsChange: (route, params, store, queryParams) => {
      store.articlesStore.setPredicate(store.articlesStore.getPredicate({
        store
      }));
      store.articlesStore.loadArticles();
    }
  })
};
export default views;
