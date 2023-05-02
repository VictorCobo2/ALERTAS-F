import { getAlertas } from "@/api/endpoints/dashboard";
import React, { Fragment, useEffect, useState } from "react";
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
  RiAddCircleLine,
} from "react-icons/ri";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const [alertas, setAlertas] = useState([]);
  let ALERTAS = []

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    llenarDash();
  }, []);

  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

  const llenarDash = async () => {
    ALERTAS = await getAlertas()
    setAlertas(ALERTAS);
  };
  const [showModalNotifi, setShowModalNotifi] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  return (
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
                  href="/contenido"
                  className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                >
                  <RiUser6Line />
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="/contenido"
                  className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                >
                  <RiChatHistoryLine />
                  Historial
                </a>
              </li>
              <li>
                <a
                  to={"/login"}
                  className="flex items-center gap-2 hover:bg-[#1F2937] transition-colors mt-5 p-3 hover:font-semibold rounded-lg text-lg text-white"
                >
                  <RiLogoutBoxLine />
                  Salir
                </a>
              </li>
            </ul>
          </nav>
          {/* Imagen */}
          {/* <div className='flex flex-col'>
                <img src='/imagenes/ImagenDashboard.svg' alt="Imagen"/>
              </div> */}
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

        {/* Titulo */}
        <div className="p-5 border-b border-gray-600">
          <div className="flex items-center justify-between ">
            <h1 className="flex text-white text-3xl font-semibold pl-3">
              Contenido
            </h1>
            {/* Añadir nuevo contenido */}
            <button
              className="flex items-center gap-1 text-white px-6 py-2 rounded-xl bg-[#1F2937] hover:bg-slate-600 hover:font-bold transition-colors"
              onClick={() => setShowModalContent(true)}
            >
              <RiAddCircleLine />
              Añadir
            </button>
          </div>
        </div>
        {/* Contenido */}
        <div className="bg-[#111827] p-4 ">
          {/* Resultados y Fechas */}
          <div className="flex items-center justify-between">
            <p className="p-4 text-gray-300">
              Se han encontrado {" "}
              <span className="text-indigo-500 font-bold">{alertas.length}</span> resultados
            </p>
            <p className="flex items-center gap-2 p-4 text-gray-300 hover:cursor-pointer">
              Ordenar por{" "}
              <span className="text-indigo-500 font-bold"> Fecha</span>
              <RiArrowDownSLine />
            </p>
          </div>

          {/* CAJA de Informacion de Fechas */}
          <div>
            {alertas.map((item) => (
              <div
                key={item._id}
                href="/historial"
                className="flex flex-col hover:shadow-slate-700 md:flex-row border-2 border-transparent hover:border-gray-600 bg-[#1F2937] mb-5 pl-4 rounded-3xl p-4 shadow-lg transition-all"
              >
                {/* Titulo y texto */}
                <div className="w-full md:w-[80%]">
                  <h1 className="text-2xl text-white font-semibold font-serif mb-4">
                    Estado: {item.estado}
                  </h1>
                  <input
                    className="bg-[#1F2937] text-white border-b p-4 w-[80%] rounded-lg outline-none mb-2"
                    placeholder="Ingresa la información necesaria"
                  ></input>
                </div>
                {/* Fechas a la derecha */}
                <div className="w-full md:w-[20%] flex flex-col items-end">
                  <h2 className="text-2xl text-gray-300 mb-4 ">{new Date(item.fecha).getDate()} de { meses[new Date(item.fecha).getMonth()]}, {new Date(item.fecha).getFullYear()}</h2>
                  <p className="text-gray-200">Nivel de riesgo: {item.reiesgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
