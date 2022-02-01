import * as actionTypes from './blog-types';

const INITIAL_STATE = {
  blogs: [
    {
      id: 1,
      title: 'Title',
      content: 'Content',
    },
    {
      id: 2,
      title: 'Title',
      content: 'Content',
    },
    {
      id: 3,
      title: 'Title',
      content: 'Content',
    },
    {
      id: 4,
      title: 'Title',
      content: 'Content',
    },
    {
      id: 5,
      title: 'Title',
      content: 'Content',
    },
    {
      id: 6,
      title: 'Title',
      content: 'Content',
    },
  ],
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE:
      let lastBlog = state.blogs[state.blogs.length - 1];
      let lastID = lastBlog.id + 1; //Getting id for the new object below
      return {
        ...state,
        blogs: state.blogs.concat(Object.assign({ id: lastID }, action.payload)),
      };
    case actionTypes.DELETE:
      console.log(state.blogs)
      return {
        ...state,
        blogs: state.blogs.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.UPDATE:
      return {
        ...state,
        blogs: state.blogs.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title, content: action.payload.content }
            : item
        ),
      };
    default:
      return state;
  }
};

export default blogReducer;
