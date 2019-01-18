import ArticleList from "../ArticleList";
import React from "react";
import { inject, observer } from "mobx-react";
// import { withRouter, NavLink } from "react-router-dom";

import { Link } from "mobx-router";
import views from "../../config/views";

const YourFeedTab = props => {
  console.log('YourFeedTab');
  if (props.currentUser) {
    return (
      <li className="nav-item">
        <Link
          className={`nav-link ${props.tab === "feed" ? "active" : null}`}
          view={views.home}
          store={props.store}
          queryParams={{ tab: "feed" }}
        >
          Your Feed
        </Link>

        {/*<NavLink*/}
        {/*className="nav-link"*/}
        {/*isActive={(match, location) => {*/}
        {/*return location.search.match("tab=feed") ? 1 : 0;*/}
        {/*}}*/}
        {/*to={{*/}
        {/*pathname: "/",*/}
        {/*search: "?tab=feed"*/}
        {/*}}*/}
        {/*>*/}
        {/*Your Feed*/}
        {/*</NavLink>*/}
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  console.log('GlobalFeedTab');
  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${props.tab === "all" ? "active" : ""}`}
        view={views.home}
        store={props.store}
        queryParams={{ tab: "all" }}
      >
        Global Feed
      </Link>

      {/*<NavLink*/}
      {/*className="nav-link"*/}
      {/*isActive={(match, location) => {*/}
      {/*return !location.search.match(/tab=(feed|tag)/) ? 1 : 0;*/}
      {/*}}*/}
      {/*to={{*/}
      {/*pathname: "/",*/}
      {/*search: "?tab=all"*/}
      {/*}}*/}
      {/*>*/}
      {/*Global Feed*/}
      {/*</NavLink>*/}
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound" /> {props.tag}
      </a>
    </li>
  );
};

@inject("articlesStore", "commonStore", "userStore", "store")
// @withRouter
@observer
class MainView extends React.Component {
  componentWillMount() {
    this.props.articlesStore.setPredicate(this.getPredicate());
  }

  componentDidMount() {
    this.props.articlesStore.loadArticles();
  }

  componentDidUpdate(previousProps) {
    if (
      this.getTab(this.props) !== this.getTab(previousProps) ||
      this.getTag(this.props) !== this.getTag(previousProps)
    ) {
      this.props.articlesStore.setPredicate(this.getPredicate());
      this.props.articlesStore.loadArticles();
    }
  }

  getTag(props = this.props) {
    // return qsParse(props.location.search).tag || "";
    const { store } = props;
    const {
      router: { queryParams }
    } = store;
    return (queryParams && queryParams.tab) || "";
  }

  getTab(props = this.props) {
    // return qsParse(props.location.search).tab || 'all';
    const { store } = props;
    const {
      router: { queryParams }
    } = store;
    return (queryParams && queryParams.tab) || "all";
  }

  getPredicate(props = this.props) {
    switch (this.getTab(props)) {
      case "feed":
        return { myFeed: true };
      case "tag":
        return { tag: props.store.router.queryParams.tag };
      default:
        return {};
    }
  }

  // handleTabChange = tab => {
  //   if (this.props.location.query.tab === tab) return;
  //   this.props.router.push({ ...this.props.location, query: { tab } });
  // };

  handleSetPage = page => {
    this.props.articlesStore.setPage(page);
    this.props.articlesStore.loadArticles();
  };

  render() {
    const { currentUser } = this.props.userStore;
    const {
      articles,
      isLoading,
      page,
      totalPagesCount
    } = this.props.articlesStore;

    return (
      <div className="col-md-9">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            <YourFeedTab {...this.props} currentUser={currentUser} tab={this.getTab()} />

            <GlobalFeedTab {...this.props} tab={this.getTab()} />

            <TagFilterTab tag={this.props.store.router.queryParams.tag} />
          </ul>
        </div>

        <ArticleList
          articles={articles}
          loading={isLoading}
          totalPagesCount={totalPagesCount}
          currentPage={page}
          onSetPage={this.handleSetPage}
        />
      </div>
    );
  }
}

export default MainView;
