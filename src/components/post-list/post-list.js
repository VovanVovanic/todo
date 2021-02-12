import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = ({
  posts,
  onDeleted,
  onToggleLike,
  onToggleDisLike,
  onToggleImportant,
}) => {
  const elements = posts.map((item) => {
    if (typeof item === "object" && isPost(item)) {
      const { id, ...itemProps } = item;
      return (
        <li className="list-group-item" key={id}>
          <PostListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleLike={() => onToggleLike(id)}
            onToggleDisLike={() => onToggleDisLike(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      );
    }
    function isPost(obj) {
      for (let key in obj) {
        return true;
      }
      return false;
    }
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
