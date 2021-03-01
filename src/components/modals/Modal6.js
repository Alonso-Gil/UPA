// este modal despliega las instituaciones con las que se tiene convenio
// solo despliega imagenes
//En dado caso de querer cambiar la/las imagen/es , solo hacer la importacion como aparece abajo
//guardar la imagen en el apartado correspondiende y poner nombre de imagen junto con su correcta 
//extencion (png,jpeg,etc)
import React from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import Ins1 from "images/modal6-instituciones/Ins1.png";
import Ins2 from "images/modal6-instituciones/Ins2.png";
import Ins3 from "images/modal6-instituciones/Ins3.png";
import Ins4 from "images/modal6-instituciones/Ins4.png";
import Ins5 from "images/modal6-instituciones/Ins5.png";
import Ins6 from "images/modal6-instituciones/Ins6.png";
import Ins7 from "images/modal6-instituciones/Ins7.png";
import Ins8 from "images/modal6-instituciones/Ins8.png";
import Ins9 from "images/modal6-instituciones/Ins9.png";
import Ins10 from "images/modal6-instituciones/Ins10.png";
import Ins11 from "images/modal6-instituciones/Ins11.png";


const Modal6 = ({ titulo }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        tw="bg-blue-700 text-white active:bg-blue-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Instituciones
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
                    Convenio con empresas
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

                <div tw="relative p-6 grid grid-cols-3 gap-4 h-auto">
                  <a href="http://www.solarcorp.com.mx/">
                    <div>
                      <img tw="h-80 w-full" src={Ins1} />
                    </div>
                  </a>
                  <a href="https://www.solarbeam.com.mx/">
                    <div>
                      <img tw="h-80 w-full" src={Ins2} />
                    </div>
                  </a>
                  <a href="https://www.nordex-online.com/en/">
                    <div>
                      <img tw="h-80 w-full" src={Ins3} />
                    </div>
                  </a>
                </div>
                <div tw="relative p-6 grid grid-cols-3 gap-4 h-auto">
                  <a href="https://topenergy.mx/">
                    <div>
                      <img tw="h-80 w-full" src={Ins4} />
                    </div>
                  </a>
                  <a href="https://www.edf-re.com/es/mx/">
                    <div>
                      <img tw="h-80 w-full " src={Ins5} />
                    </div>
                  </a>
                  <a href="https://www.cio.mx/">
                    <div>
                      <img tw="h-80 w-full" src={Ins6} />
                    </div>
                  </a>
                </div>
                <div tw="relative p-6 grid grid-cols-3 gap-4 h-auto">
                  <a href="https://www.solara-industries.com/">
                    <div>
                      <img tw="h-80 w-full" src={Ins7} />
                    </div>
                  </a>
                  <a href="https://www.marelli.com/">
                    <div>
                      <img tw="h-80 w-full" src={Ins8} />
                    </div>
                  </a>
                  <a href="https://www.grupoortiz.com/">
                    <div>
                      <img tw="h-80 w-full" src={Ins9} />
                    </div>
                  </a>
                </div>
                <div tw="relative p-6 grid grid-cols-3 gap-4 h-auto">
                  <a href="https://seyses.com/es/">
                    <div>
                      <img tw="h-80 w-full" src={Ins10} />
                    </div>
                  </a>
                  <a href="https://www.engiemexico.com/">
                    <div>
                      <img tw="h-80 w-full" src={Ins11} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div tw="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal6;
