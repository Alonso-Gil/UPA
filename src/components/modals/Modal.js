import React from 'react';
import { Fragment } from 'react';
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import Congreso1 from "images/Congreso1.JPG";
import Congreso2 from "images/Congreso2.JPG";
import Congreso4 from 'images/Congreso4.JPG';
import Congreso3 from "images/Congreso3.JPG";
import Congreso5 from "images/Congreso5.JPG"; 
import Congreso6 from "images/Congreso6.JPG";
import Congreso7 from "images/Congreso7.JPG";
import Congreso8 from "images/Congreso8.JPG";

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
                      <img src={Congreso1} />
                    </div>
                    <div>
                      <img src={Congreso2} />
                    </div>
                    <div>
                      <img src={Congreso3} />
                    </div>
                  </div>
                  <div tw="relative p-6 grid grid-cols-3 gap-4">
                    <div>
                      <img src={Congreso4} />
                    </div>
                    <div>
                      <img src={Congreso5} />
                    </div>
                    <div>
                      <img src={Congreso6} />
                    </div>
                  </div>
                  <div tw="relative p-6 grid grid-cols-3 gap-4">
                    <div>
                      <img src={Congreso7} />
                    </div>
                    <div>
                      <img src={Congreso8} />
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