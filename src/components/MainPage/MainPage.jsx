import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BlogItem from './BlogItem/BlogItem';

import './MainPage.css';

function MainPage({ blogs }) {
  return (
    <div className="mainpage">
      <h1>Main page</h1>
      <div className="mainpage-content">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blogData={blog} />
        ))}
      </div>
      <Link to="/createblog" className="mainpage-create">
        <button className="mainpage-create-btn">Create blog</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs,
  };
};

export default connect(mapStateToProps)(MainPage);
