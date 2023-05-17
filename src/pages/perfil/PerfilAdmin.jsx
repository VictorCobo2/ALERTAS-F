import React, { useState, useMemo } from "react";
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
  RiCheckboxFill,
} from "react-icons/ri";
import ModalNotifi from "./ModalNotifi";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";


function Perfil() {

  /* Datos Ficticioss */
  
  const data = useMemo(
    () => [
      {
        descripcion: "Gabriel García Márquez",
        gravedad: "Descrp",
        estado: "1967",
        fecha: "7/05/2023",
      },   
      {
        descripcion: "Mario Vargas Llosa",
        gravedad: "Descrp",
        estado: "1963",
        fecha: "7/05/2023",
      },
      {
        descripcion: "Julio Cortázar",
        gravedad: "Descrp",
        estado: "1963",
        fecha: "7/05/2023",
      },
      {
        descripcion: "Isabel Allende",
        gravedad: "Descrp",
        estado: "1982",
        fecha: "7/05/2023",
      },
      {
        descripcion: "Jorge Luis Borges",
        gravedad: "Descrp",
        estado: "1944",
        fecha: "7/05/2023",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Descripción",
        accessor: "descripcion",
      },
      {
        Header: "Algo",
        accessor: "gravedad",
      },
      {
        Header: "Fecha",
        accessor: "estado",
      },
      {
        Header: "Nivel de Gravedad",
        accessor: "fecha",
      },
      {
        Header: "Estado",
        accessor: "editar",
      },
    ],
    []
  );

  /* Paginacion y Lectura de los datos */
  const tableInstance = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex }
  } = tableInstance;

  const [hiddenButtons, setHiddenButtons] = useState([]);

  const toggleButtonVisibility = (rowIndex) => {
    setHiddenButtons((hiddenButtons) => {
      const newHiddenButtons = [...hiddenButtons];
      newHiddenButtons[rowIndex] = !newHiddenButtons[rowIndex];
      return newHiddenButtons;
    });
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
                    href="/contenido"
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

 {/* Tabla de Datos de Fecha, y esas cosas*/}

        <>
          <div className="bg-[#111827] shadow-md rounded">
            <table {...getTableProps()} className="min-w-max w-full table-auto">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-800 text-gray-100 text-xl leading-normal">
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="py-5 px-6 text-left">{column.render("Header")}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="text-gray-200 text-lg font-light">
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="border-b border-gray-700 hover:bg-[#1F2934] hover:font-semibold hover:border-gray-400">
                      {row.cells.map((cell, j) => {
                        if (j === row.cells.length - 2) {
                          return (
                            <td
                              key={j}
                              className="py-3 px-6 text-left whitespace-nowrap max-w-xs overflow-hidden"
                            >
                              <select className="bg-gray-800 border-gray-800 text-gray-200 py-2 px-4 w-full">
                                <option>Alto</option>
                                <option>Medio</option>
                                <option>Bajo</option>
                              </select>
                            </td>
                          );
                        } else if (j === row.cells.length - 1) {
                          return (
                            <td
                              key={j}
                              className="flex justify-evenly py-4 px-6 text-left whitespace-nowrap"
                            >
                              <button
                                className={`text-green-200 text-4xl hover:scale-125 transition-all ${
                                  hiddenButtons[i] ? "hidden" : ""
                                }`}
                                onClick={() => toggleButtonVisibility(i)}
                              >
                                <RiCheckboxFill />
                              </button>
                            </td>
                          );
                        } else {
                          return (
                            <td key={j} className="py-3 px-6 text-left whitespace-nowrap max-w-xs overflow-hidden">{cell.render("Cell")}</td>
                          );
                        }
                      })}
                    </tr>                 
                  );
                })}
              </tbody>
            </table> 

            {/* Paginado */}

            <div className="pagination flex justify-center p-4">
              <button onClick={() => previousPage()} disabled={!canPreviousPage}className={`mx-1 bg-[#303d4f] text-gray-700 text-white rounded py-2 px-4 hover:scale-110 transition-all ${
                !canPreviousPage && "opacity-50 cursor-not-allowed"
              }`}>{'<'}</button>
              <span className="text-white">
                Página{' '}
                <strong>
                  {pageIndex + 1} de {pageOptions.length}
                </strong>{' '}
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage} className={`mx-1 bg-[#303d4f] text-white rounded py-2 px-4 hover:scale-110 transition-all${
                !canNextPage && "opacity-50 cursor-not-allowed"
              }`}>{'>'}</button>
            </div>
          </div> 
        </>

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