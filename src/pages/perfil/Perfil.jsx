import React, {useState} from "react";
import {
  RiDashboardLine,
  RiUser6Line,
  RiLogoutBoxLine,
  RiChatHistoryLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiNotification3Line,
  RiArrowDownSLine,
  RiSearch2Line,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import ModalNotifi from "./ModalNotifi";
import { Link } from "react-router-dom";

function Perfil() {

    const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /* Parte izquierda del sidebar */
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const [showModalNotifi, setShowModalNotifi] = useState(false);


  return (
    <>
      <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
        {/* Barra Lateral Izquierda */}
        <div
          className={`fixed border-e border-gray-600 lg:static w-[60%] md:w-[40%] lg:w-full top-0 z-50 transition-all ${
            sidebar ? "-left-0" : "-left-full"
          } h-full w-full  bg-[#0F1523] col-span-1 p-4`}
        >

{/* Logo */}

          <div className="text-center p-6">
            <h1 className="font-bold tracking-[4px] text-2xl font-serif text-white">
              Start Alarm
            </h1>
          </div>
          <div className="flex flex-col justify-between h-[600px]">

{/* Menu */}

            <nav>
              <ul>
                <li>
                  <a
                    href="/contenido"
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                  >
                    <RiDashboardLine />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/perfil"
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                  >
                    <RiUser6Line />
                    Perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/paciente"
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                  >
                    <RiChatHistoryLine />
                    Historial
                  </a>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                  >
                    <RiLogoutBoxLine />
                    Salir
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        

{/* Boton devuelta a barra izquierda */}

        <button
          className="block lg:hidden fixed bottom-4 right-4 bg-[#1F2937] text-white rounded-full text-4xl p-3"
          onClick={handleSidebar}
        >
          {sidebar ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
        </button>
{/* Contenido */}

        <div className="bg-[#111827] col-span-5 ">
{/* Cabecera */}

          <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 w-full border-b border-gray-700">
            {/* Buscador */}
            <form className="w-full md:w-[50%] order-1 md:-order-none">
              <div className="relative">
                <RiSearch2Line className="text-white absolute left-2 top-3" />
                <input
                  type="search"
                  className="bg-[#111827] py-2 px-8 pr-4 rounded-lg outline-none text-white w-full"
                  placeholder="Buscar..."
                />
              </div>
            </form>
            {/* Notificaciones */}
            <nav className="w-full md:w-[50%] flex justify-center md:justify-end">
              <ul className="flex items-center gap-5">
                <li>
                  <button href="/notificaciones" className="relative">
                    <RiNotification3Line
                      className="text-2xl text-white"
                      onClick={() => setShowModalNotifi(true)}
                    />
                    <RiCheckboxBlankCircleFill className="absolute right-0 -top-1 text-xs text-red-500" />
                  </button>
                </li>
                <li>
                  <a
                    href="/perfiles"
                    className="flex items-center gap-1 text-white"
                  >
                    Sara del Real
                    <RiArrowDownSLine />
                  </a>
                </li>
              </ul>
            </nav>
          </header>

 {/* Perfil del Paciente*/}

      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-10">
            <h1 className="text-4xl text-gray-300 font-bold mb-10">
              Nombre de la persona
            </h1>
            <p className="text-gray-400 text-2xl mb-10">
              Descripción de la persona
            </p>
            <div className="mt-4">
              <span className="text-gray-400 text-xl font-bold">Contacto:</span>
              <ul className="mt-4 text-xl">
                <li className="text-gray-400">Teléfono: xxx-xxx-xxxx</li>
                <li className="text-gray-400 mt-2">Email: email@algo.com</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <div className="h-48 w-48 md:h-64 md:w-64 rounded-full mx-auto overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <div className="h-full w-full rounded-full flex items-center justify-center bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="mt-4 w-full">
              <label className="block text-gray-400 font-semibold mb-2">
                Subir imagen:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block border border-gray-400 py-2 px-4 rounded-lg w-full text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>



</div>
</div>


      {/* Modal de Notificaciones */}
      <ModalNotifi
        isVisible={showModalNotifi}
        onClose={() => setShowModalNotifi(false)}
      >
        <div className="p-8">
          <h1 className="text-xl mb-5 border-b border-gray-400">
            Alertas Detectadas
          </h1>
          <h3>Cosas</h3>
        </div>
      </ModalNotifi>
    </>
  );
}
export default Perfil;