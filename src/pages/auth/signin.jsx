import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    contrasena: "",
  });

  async function onSubmit() {
    const data = formData;
    event.preventDefault();
    signIn("credentials", {
      credentials: JSON.stringify(data),
      callbackUrl: "/dashboard",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="flex w-full h-screen">
      <div className="bg-[#111827] w-full flex items-center justify-center lg:w-1/2">
        <form onSubmit={onSubmit} className="px-10 py-20 rounded-e-3xl">
          <h1 className="text-5xl text-white font-semibold">Bienvenido</h1>
          <p className="font-medium text-lg text-gray-200 mt-4">
            ¡Bienvenido! Por favor ingrese sus datos
          </p>

          <div className="mt-5">
            <div>
              <label className="text-lg text-white font-medium">
                Nombre de usaurio
              </label>
              <input
                className="w-full border text-white border-gray-500 rounded-xl p-3 mt-1 bg-[#1D2432]"
                name="name"
                onChange={handleChange}
                placeholder="Ingrese su correo"
              />
            </div>

            <div className="mt-4">
              <label className="text-lg text-white font-medium">
                Contraseña
              </label>
              <input
                className="w-full border border-gray-500 text-white rounded-xl p-3 mt-1 bg-[#1D2432]"
                placeholder="Ingrese su contraseña"
                name="contrasena"
                onChange={handleChange}
                type="password"
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
              <button className="font-medium text-sky-300 " type="">
                ¿Ha olvidado su contraseña?
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 bg-indigo-300 font-semibold text-lg text-center rounded-xl"
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-[#F7F7F7]">
        <Image
          src="/images/FondoNegro.webp"
          alt="Picture of the author"
          fill
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        {/* <img
          src="/FondoNegro.webp"
          className="h-screen"
          alt="Imagen de Fondo"
        ></img> */}
      </div>
    </div>
  );
}
