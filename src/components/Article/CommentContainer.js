import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
// import { Link } from "react-router-dom";
import React from "react";

import { Link } from "mobx-router";
import views from "../../config/views";

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div>
          <list-errors errors={props.errors} />
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
          onDelete={props.onDelete}
        />
      </div>
    );
  } else {
    return (
      <div className="col-xs-12 col-md-8 offset-md-2">
        <p>
          {/*<Link to="/login">Sign in</Link>*/}
          <Link view={views.login} store={props.store}>
            Sign in
          </Link>
          &nbsp;or&nbsp;
          {/*<Link to="/register">sign up</Link>*/}
          <Link view={views.register} store={props.store}>
            Sign up
          </Link>
          &nbsp;to add comments on this article.
        </p>

        <CommentList
          store={props.store}
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
          onDelete={props.onDelete}
        />
      </div>
    );
  }
};

export default CommentContainer;
