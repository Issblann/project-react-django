import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createClients, updateClients } from "../../api/client.api";
import { useNavigate, useParams } from "react-router-dom";
import { ClientContext } from "../../context/Context";

const ClientsForm = () => {
  const { client, setClient } = useContext(ClientContext);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const defaultValues = {
    name: client.name,
    email: client.email,
    dni: client.dni,
    birth_date: client.birth_date,
  };

  const defaultValuesCreate = {
    name: "",
    email: "",
    dni: "",
    birth_date: "",
  };

  const handleValues = () => {
    if (id) {
      reset(defaultValues);
    } else {
      reset(defaultValuesCreate);
    }
  };

  useEffect(() => {
    handleValues();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await updateClients(id, data);
      console.log("texto", data);
    } else {
      const res = await createClients(data);
    }
    navigate("/client/list");
  });

  return (
    <section className="w-full flex items-center gap-3 flex-col px-4 justify-center m-auto ">
      <div className="w-full max-w-4xl">
        <h1 className="text-white font-bold text-[35px]">Nuevo cliente</h1>
      </div>
      <form
        className="w-full max-w-4xl flex items-center flex-col justify-between bg-white"
        onSubmit={onSubmit}
      >
        <div className="flex justify-between flex-col md:flex-row w-full p-5 gap-3">
          <div className="w-[60%]">
            <p>Nombre completo</p>
            <input
              className="border-2 border-gray-400 p-1 w-full"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Es requerido</span>}
          </div>
          <div className="w-[30%]">
            <p>Número de documento</p>
            <input
              type="number"
              className="appearance-none focus:outline-none hover:outline-none border-2 p-1 w-full border-gray-400 "
              {...register("dni", { required: true })}
            />
            {errors.dni && <span>Es requerido</span>}
          </div>
        </div>
        <div className="flex justify-between w-full p-5 flex-col gap-3 md:flex-row">
          <div className="w-[30%]">
            <p>Fecha de nacimiento</p>
            <input
              className="border-2 border-gray-400 p-1 w-full"
              type="date"
              {...register("birth_date", { required: true })}
            />
            {errors.birth_date && <span>Es requerido</span>}
          </div>
          <div className="w-[60%]">
            <p>Email</p>
            <input
              type="email"
              className="border-2 border-gray-400 p-1 w-full"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <span>Es requerido</span>}
        </div>
        <div className="w-[90%] mb-3">
          <span className="border-2 bg-slate-600 w-full flex "></span>
        </div>

        <div className=" w-[90%] justify-end items-end py-2 flex gap-3">
          <button className="p-2 bg-red-500 text-white">Cancelar</button>
          <button className="p-2 bg-blue-500 text-white">Guardar</button>
        </div>
      </form>
    </section>
  );
};

export default ClientsForm;
