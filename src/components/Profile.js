import ArticleList from "./ArticleList";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import RedError from "./RedError";
// import { NavLink, Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import views from "../config/views";
import { Link } from "mobx-router";

const EditProfileSettings = props => {
  if (props.isUser) {
    return (
      <>
        {/*<Link*/}
        {/*to="/settings"*/}
        {/*className="btn btn-sm btn-outline-secondary action-btn"*/}
        {/*>*/}
        {/*<i className="ion-gear-a" /> Edit Profile Settings*/}
        {/*</Link>*/}
        <Link
          className={"btn btn-sm btn-outline-secondary action-btn"}
          view={views.settings}
          store={props.store}
        >
          <i className="ion-gear-a" /> Edit Profile Settings
        </Link>
      </>
    );
  }
  return null;
};

const FollowUserButton = props => {
  if (props.isUser) {
    return null;
  }

  let classes = "btn btn-sm action-btn";
  if (props.following) {
    classes += " btn-secondary";
  } else {
    classes += " btn-outline-secondary";
  }

  const handleClick = ev => {
    ev.preventDefault();
    if (props.following) {
      props.unfollow(props.username);
    } else {
      props.follow(props.username);
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {props.following ? "Unfollow" : "Follow"} {props.username}
    </button>
  );
};

@inject("articlesStore", "profileStore", "userStore", "store")
// @withRouter
@observer
class Profile extends React.Component {
  componentWillMount() {
    this.props.articlesStore.setPredicate(this.getPredicate());
  }

  componentDidMount() {
    this.props.profileStore.loadProfile(
      this.props.store.router.params.username
    );
    this.props.articlesStore.loadArticles();
  }

  componentDidUpdate(previousProps) {
    if (this.props.location !== previousProps.location) {
      this.props.profileStore.loadProfile(
        this.props.store.router.params.username
      );
      this.props.articlesStore.setPredicate(this.getPredicate());
      this.props.articlesStore.loadArticles();
    }
  }

  getTab() {
    if (/\/favorites/.test(this.props.store.router.currentView.path))
      return "favorites";
    return "all";
  }

  getPredicate() {
    switch (this.getTab()) {
      case "favorites":
        return { favoritedBy: this.props.store.router.params.username };
      default:
        return { author: this.props.store.router.params.username };
    }
  }

  handleFollow = () => this.props.profileStore.follow();
  handleUnfollow = () => this.props.profileStore.unfollow();

  handleSetPage = page => {
    this.props.articlesStore.setPage(page);
    this.props.articlesStore.loadArticles();
  };

  renderTabs() {
    const { profile } = this.props.profileStore;
    const isActive = this.props.store.router.params.fav === "favorites";
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          {/*<NavLink*/}
          {/*className="nav-link"*/}
          {/*isActive={(match, location) => {*/}
          {/*return location.pathname.match("/favorites") ? 0 : 1;*/}
          {/*}}*/}
          {/*to={`/@${profile.username}`}*/}
          {/*>*/}
          {/*My Articles*/}
          {/*</NavLink>*/}
          <Link
            className={`nav-link ${!isActive ? "active" : ""}`}
            view={views.profile}
            store={this.props.store}
            params={{ username: profile.username }}
          >
            My Articles
          </Link>
        </li>

        <li className="nav-item">
          {/*<NavLink className="nav-link" to={`/@${profile.username}/favorites`}>*/}
          {/*Favorited Articles*/}
          {/*</NavLink>*/}
          <Link
            className={`nav-link ${isActive ? "active" : ""}`}
            view={views.profile}
            store={this.props.store}
            params={{ username: profile.username, fav: "favorites" }}
          >
            Favorited Articles
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const { profileStore, articlesStore, userStore } = this.props;
    const { profile, isLoadingProfile } = profileStore;
    const { currentUser } = userStore;

    if (isLoadingProfile && !profile) return <LoadingSpinner />;
    if (!profile) return <RedError message="Can't load profile" />;

    const isUser = currentUser && profile.username === currentUser.username;

    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profile.image} className="user-img" alt="" />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>

                <EditProfileSettings isUser={isUser} />
                <FollowUserButton
                  isUser={isUser}
                  username={profile.username}
                  following={profile.following}
                  follow={this.handleFollow}
                  unfollow={this.handleUnfollow}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">{this.renderTabs()}</div>

              <ArticleList
                articles={articlesStore.articles}
                totalPagesCount={articlesStore.totalPagesCount}
                onSetPage={this.handleSetPage}
                loading={articlesStore.isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

export { Profile };
