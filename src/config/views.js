import React from "react";
import L from "react-loadable";

//models
import { Route } from "mobx-router";

//components
// Loading Component
const Loading = props =>
  props.pastDelay ? (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      Loading...
    </div>
  ) : props.error ? (
    <div>Error!</div>
  ) : null;

const Loadable = opts =>
  L({
    render(loaded, props) {
      const Component = loaded.default;
      return <Component {...props} />;
    },
    loading: Loading,
    ...opts
  });

const AsyncArticle = Loadable({
  loader: () => import("../components/Article")
});

const AsyncEditor = Loadable({
  loader: () => import("../components/Editor")
});

const AsyncHome = Loadable({
  loader: () => import("../components/Home")
});

const AsyncLogin = Loadable({
  loader: () => import("../components/Login")
});

const AsyncProfile = Loadable({
  loader: () => import("../components/Profile")
});

const AsyncRegister = Loadable({
  loader: () => import("../components/Register")
});

const AsyncSettings = Loadable({
  loader: () => import("../components/Settings")
});

const views = {
  login: new Route({
    path: "/login",
    component: <AsyncLogin />
  }),
  register: new Route({
    path: "/register",
    component: <AsyncRegister />
  }),
  editor: new Route({
    path: "/editor/:slug?",
    component: <AsyncEditor />
  }),
  article: new Route({
    path: "/article/:id",
    component: <AsyncArticle />
  }),
  settings: new Route({
    path: "/settings",
    component: <AsyncSettings />
  }),
  profile: new Route({
    path: "/:username/:fav",
    component: <AsyncProfile />
  }),
  home: new Route({
    path: "/",
    component: <AsyncHome />,
    onParamsChange: (route, params, store, queryParams) => {
      store.articlesStore.setPredicate(
        store.articlesStore.getPredicate({
          store
        })
      );
      store.articlesStore.loadArticles();
    }
  })
};
export default views;
