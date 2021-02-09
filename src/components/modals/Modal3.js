import React from 'react';
import { Fragment } from 'react';
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import Muertos1 from "images/Muertos1.jpg";
import Muertos2 from "images/Muertos2.jpg";
import Muertos3 from 'images/Muertos3.jpg';
import Muertos4 from "images/Muertos4.JPG";
import Muertos5 from "images/Muertos5.JPG"; 

const Modal = ({titulo}) => {
    const [showModal, setShowModal] = React.useState(false);

    
    return (
      <>
        <button
          tw="bg-blue-700 text-white active:bg-blue-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Galería
        </button>
        {showModal ? (
          <>
            <div tw="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div tw="relative w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div tw="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 tw="text-3xl font-semibold text-blue-700">
                      Eventos Academicos
                    </h3>
                    <button
                      tw="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span tw="bg-transparent text-red-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div tw="relative p-6 grid grid-cols-3 gap-4">
                    <div>
                      <img src={Muertos1} />
                    </div>
                    <div>
                      <img src={Muertos2} />
                    </div>
                    <div>
                      <img src={Muertos3} />
                    </div>
                  </div>
                  <div tw="relative p-6 grid grid-cols-3 gap-4">
                    <div>
                      <img src={Muertos4} />
                    </div>
                    <div>
                      <img src={Muertos5} />
                    </div>
                  </div>
                  <div tw="relative p-6 grid grid-cols-3 gap-4"></div>
                </div>
              </div>
            </div>
            <div tw="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
};

export default Modal;