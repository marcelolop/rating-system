import React from 'react';

function Dialog({ title, content, onClose = f => f }) {
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <button className="dialog-close-button" onClick={onClose}>X</button>
        <h2 className="dialog-title">{title}</h2>
        <p className="dialog-content">{content}</p>
      </div>
    </div>
  );
};

export default Dialog;