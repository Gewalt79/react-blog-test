import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToBlog } from '../../redux/Blog/blog-actions';

import './CreateBlog.css';

function CreateBlog({ blogs, addToBlog }) {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const saveBlog = () => {
    addToBlog(title, content);
    alert('Blog saved!');
    setContent('');
    setTitle('');
  };

  return (
    <div className="create-blog">
      <h1>Create new blog</h1>
      <input
        maxLength="25"
        className="create-blog-title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="create-blog-content"
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="create-blog-buttons">
        <button onClick={saveBlog}>Save</button>
        <Link to="/mainpage">
          <button className="create-blog-buttons-main">Main page</button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBlog: (blogID, blogTitle, blogContent) =>
      dispatch(addToBlog(blogID, blogTitle, blogContent)),
  };
};

export default connect(null, mapDispatchToProps)(CreateBlog);
