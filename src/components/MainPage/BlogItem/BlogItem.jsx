import React from 'react';
import BlogItemModal from './BlogItemModal/BlogItemModal';

import { connect } from 'react-redux';
import { updateBlog, deleteBlog } from '../../../redux/Blog/blog-actions';

import './BlogItem.css';

function BlogItem({ blogData, updateBlog, deleteBlog }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState(blogData.title);
  const [modalContent, setModalContent] = React.useState(blogData.content);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {blogData.title ? (
        <div className="blog-item">
          <div className="blog-item-main">
            <h3 className="blog-item-main-title">{blogData.title}</h3>
            <p className="blog-item-main-content">{blogData.content}</p>
          </div>
          <button onClick={(e) => handleModal()}>Open</button>
          <BlogItemModal
            open={isOpen}
            onClose={handleModal}
            updateBlog={updateBlog}
            modalTitle={modalTitle}
            modalContent={modalContent}
            modalID={blogData.id}
            deleteBlog={deleteBlog}>
            <input
              className="modal-input-title"
              type="text"
              value={modalTitle}
              onChange={(e) => setModalTitle(e.target.value)}
            />
            <textarea
              className="modal-input-content"
              type="text"
              value={modalContent}
              onChange={(e) => setModalContent(e.target.value)}
            />
          </BlogItemModal>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBlog: (modalID, modalTitle, modalContent) =>
      dispatch(updateBlog(modalID, modalTitle, modalContent)),
    deleteBlog: (modalID) => dispatch(deleteBlog(modalID)),
  };
};

export default connect(null, mapDispatchToProps)(BlogItem);
