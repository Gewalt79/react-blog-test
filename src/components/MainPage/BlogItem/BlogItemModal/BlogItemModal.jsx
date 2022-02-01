import React from 'react';
import './BlogItemModal.css';

function BlogItemModal({
  onClose,
  open,
  children,
  updateBlog,
  modalTitle,
  modalContent,
  modalID,
  deleteBlog,
}) {
  const [acceptDeleteIsOpen, setAcceptDeleteIsOpen] = React.useState(false);

  if (!open) return null;

  const handleUpdate = () => {
    updateBlog(modalID, modalTitle, modalContent);
    onClose();
  };

  const handleDelete = () => {
    deleteBlog(modalID);
    onClose();
  };

  return (
    <div className="blogitem-modal">
      <div className="modal-content">
        {children}
        <div className="modal-content-buttons">
          <div className="modal-content-buttons-left">
            <button onClick={() => setAcceptDeleteIsOpen(true)}>Delete</button>
          </div>
          <div className="modal-content-buttons-right">
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleUpdate}>Save</button>
          </div>
        </div>
      </div>
      {acceptDeleteIsOpen ? (
        <div className="accept-delete">
            <p>You sure you want to delete?</p>
          <div className="accept-delete-buttons">
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setAcceptDeleteIsOpen(false)}>No</button>
          </div>
          <div className="accept-delete-bg"></div>
        </div>
      ) : null}
      <div className="blogitem-modal-bg" onClick={onClose}></div>
    </div>
  );
}

export default BlogItemModal;
