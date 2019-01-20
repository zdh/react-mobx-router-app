import ArticleMeta from "./ArticleMeta";
import CommentContainer from "./CommentContainer";
import React from "react";
import { inject, observer } from "mobx-react";
// import { withRouter } from "react-router-dom";
import RedError from "../RedError";
import marked from "marked";
import views from "../../config/views";

@inject("articlesStore", "userStore", "commentsStore", "store")
// @withRouter
@observer
class Article extends React.Component {
  componentDidMount() {
    const slug = this.props.store.router.params.id;
    this.props.articlesStore.loadArticle(slug, { acceptCached: true });
    this.props.commentsStore.setArticleSlug(slug);
    this.props.commentsStore.loadComments();
  }

  handleDeleteArticle = slug => {
    this.props.articlesStore
      .deleteArticle(slug)
      // .then(() => this.props.history.replace("/"));
      .then(() => this.props.store.router.goTo(views.home));
  };

  handleDeleteComment = id => {
    this.props.commentsStore.deleteComment(id);
  };

  render() {
    const slug = this.props.store.router.params.id;
    const { currentUser } = this.props.userStore;
    const { comments, commentErrors } = this.props.commentsStore;
    const article = this.props.articlesStore.getArticle(slug);

    if (!article) return <RedError message="Can't load article" />;

    const markup = { __html: marked(article.body, { sanitize: true }) };
    const canModify =
      currentUser && currentUser.username === article.author.username;
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <ArticleMeta
              store={this.props.store}
              article={article}
              canModify={canModify}
              onDelete={this.handleDeleteArticle}
            />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup} />

              <ul className="tag-list">
                {article.tagList.map(tag => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions" />

          <div className="row">
            <CommentContainer
              store={this.props.store}
              comments={comments}
              errors={commentErrors}
              slug={slug}
              currentUser={currentUser}
              onDelete={this.handleDeleteComment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
