import ArticlePreview from "./ArticlePreview";
// import ListPagination from "./ListPagination";
import LoadingSpinner from "./LoadingSpinner";
import React from "react";
import VirtualList from "react-tiny-virtual-list";

const ArticleList = props => {
  if (props.loading && props.articles.length === 0) {
    return <LoadingSpinner />;
  }

  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <>
      {/*{props.articles.map(article => {*/}
      {/*return <ArticlePreview article={article} key={article.slug} />;*/}
      {/*})}*/}

      <VirtualList
        height={600}
        itemCount={props.articles.length}
        itemSize={200}
        renderItem={({ index, style }) => {
          return props.articles[index] !== null ? (
            <div style={style} key={index}>
              <ArticlePreview article={props.articles[index]} key={index} />
            </div>
          ) : (
            <div key={index}>Loading …</div>
          );
        }}
        onItemsRendered={({ startIndex, stopIndex }) => {
          // load nextPage
          if (
            !props.isLoading &&
            stopIndex - props.currentPage * 10 > 5 &&
            props.currentPage < props.totalPagesCount
          ) {
            props.onSetPage(props.currentPage + 1);
          }
        }}
      />

      {/*<ListPagination*/}
      {/*onSetPage={props.onSetPage}*/}
      {/*totalPagesCount={props.totalPagesCount}*/}
      {/*currentPage={props.currentPage}*/}
      {/*/>*/}
    </>
  );
};

export default ArticleList;
