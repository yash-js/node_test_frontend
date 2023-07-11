import React, { useState } from "react";
import Modal from "../../components/Modal/index";
import { useList } from "../../hooks/useList";
const Header = () => {
  const { setShowModal, showModal } = useList();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-4 pb-0">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Candidates</h2>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add New Candidate
          </button>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </section>
  );
};

export default Header;
