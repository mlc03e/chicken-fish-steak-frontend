import React from 'react'
import ModalStyle from './Modal.css'

const Modal = ({seeModal, children }) => {

  return (
    <div className={seeModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal
