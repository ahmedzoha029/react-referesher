import React, { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function buttonClicked() {
    setIsModalOpen(true);
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={buttonClicked}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
      {isModalOpen && <Backdrop closeModal={closeModal} />}
    </div>
  );
}

export default Todo;
