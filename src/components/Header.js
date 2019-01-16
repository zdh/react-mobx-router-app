import React from "react";
// import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Link } from "mobx-router";
import views from "../config/views";

const LoggedOutView = props => {
    const { currentUser } = props.store.userStore;
  if (!currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          {/*<Link to="/" className="nav-link">*/}
          {/*Home*/}
          {/*</Link>*/}
          <Link className={"nav-link"} view={views.home} store={props.store}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          {/*<Link to="/login" className="nav-link">*/}
          {/*Sign in*/}
          {/*</Link>*/}
          <Link className={"nav-link"} view={views.login} store={props.store}>
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          {/*<Link to="/register" className="nav-link">*/}
          {/*Sign up*/}
          {/*</Link>*/}
          <Link
            className={"nav-link"}
            view={views.register}
            store={props.store}
          >
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  const { currentUser } = props.store.userStore;
  if (currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          {/*<Link to="/" className="nav-link">*/}
          {/*Home*/}
          {/*</Link>*/}
          <Link className={"nav-link"} view={views.home} store={props.store}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          {/*<Link to="/editor" className="nav-link">*/}
          {/*<i className="ion-compose" />*/}
          {/*&nbsp;New Post*/}
          {/*</Link>*/}
          <Link className={"nav-link"} view={views.editor} store={props.store}>
            <i className="ion-compose" />
            &nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          {/*<Link to="/settings" className="nav-link">*/}
          {/*<i className="ion-gear-a" />*/}
          {/*&nbsp;Settings*/}
          {/*</Link>*/}
          <Link
            className={"nav-link"}
            view={views.settings}
            store={props.store}
          >
            <i className="ion-gear-a" />
            &nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          {/*<Link to={`/@${currentUser.username}`} className="nav-link">*/}
          {/*<img src={currentUser.image} className="user-pic" alt="" />*/}
          {/*{currentUser.username}*/}
          {/*</Link>*/}
          <Link
            className={"nav-link"}
            view={views.register}
            store={props.store}
            params={{ username: `@${currentUser.username}` }}
          >
            <img src={currentUser.image} className="user-pic" alt="" />
            {currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

@inject("userStore", "commonStore", "store")
@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          {/*<Link to="/" className="navbar-brand">*/}
          {/*{this.props.commonStore.appName.toLowerCase()}*/}
          {/*</Link>*/}
          <Link
            className={"navbar-brand"}
            view={views.home}
            store={this.props.store}
          >
            {this.props.commonStore.appName.toLowerCase()}
          </Link>
          <LoggedOutView {...this.props} />

          <LoggedInView {...this.props} />
        </div>
      </nav>
    );
  }
}

export default Header;
