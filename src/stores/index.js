import { RouterStore } from "mobx-router";

import articlesStore from "./articlesStore";
import commentsStore from "./commentsStore";
import authStore from "./authStore";
import commonStore from "./commonStore";
import editorStore from "./editorStore";
import userStore from "./userStore";
import profileStore from "./profileStore";

const stores = {
  articlesStore,
  commentsStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore,
  router: new RouterStore()
};

export default stores;
