import React from "react";
import Form from "../Form";

const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          style={{
            boxShadow: " rgba(0, 0, 0, 0.4) 0px 30px 90px",
          }}
          className="relative w-full my-6 mx-auto max-w-md"
        >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="p-3 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl text-center font-semibold">
                Add Candidate
              </h3>
            </div>
            <div className="relative p-6 flex-auto justify-center">
              <Form setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
