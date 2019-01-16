import React from "react";
// import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

import { Link } from "mobx-router";
import views from "../../config/views";

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {tags.map(tag => {
          return (
            <>
              <Link
                className={"tag-default tag-pill"}
                view={views.home}
                store={props.store}
                queryParams={{ tab: "tag", tag }}
                key={tag}
              >
                {tag}
              </Link>
            </>
          );
        })}
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default Tags;
