import * as actionTypes from './blog-types';

export const addToBlog = (blogTitle, blogContent) => {
  return {
    type: actionTypes.CREATE,
    payload: {
      title: blogTitle,
      content: blogContent,
    },
  };
};

export const deleteBlog = (blogID) => {
  return {
    type: actionTypes.DELETE,
    payload: {
      id: blogID,
    },
  };
};

export const updateBlog = (blogID, blogTitle, blogContent) => {
  return {
    type: actionTypes.UPDATE,
    payload: {
      id: blogID,
      title: blogTitle,
      content: blogContent,
    },
  };
};
