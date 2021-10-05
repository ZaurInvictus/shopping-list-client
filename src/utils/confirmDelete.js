import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// Delete Confirmation
export default function confirmDelete(id, deleteItem) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="confirmation__pop-up">
          
          <div className="confirmation__pop-up-text">
            <p className="delete-text2">Delete Item?</p>
            <p className="delete-text">
              Are you sure you want to delete this item? This can not be undone.
            </p>
          </div>

          <div className="delete-buttons">
            <button
              className="modal__inner-footer-close custom"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="btn button button--primary"
              onClick={() => {
                deleteItem(id);
                onClose();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    },
  });
}
