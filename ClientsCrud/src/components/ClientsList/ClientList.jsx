import React, { useEffect, useState, useContext } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { getAllClients } from "../../api/client.api";
import ClientsCard from "../ClientsCard/ClientsCard";
import { Link } from "react-router-dom";
import { ClientContext } from "../../context/Context";
import { useForm } from "react-hook-form";

const ClientList = () => {
  const { clients, setClients, deleteClient, editClient, resetValue } =
    useContext(ClientContext);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    async function loadClients() {
      const res = await getAllClients();
      setClients(res.data);
    }
    loadClients();
  }, []);

  let data = [];
  data = clients.filter((client) => client.name.toLowerCase().includes(""));

  const submit = (e) => {
    data = clients.filter(
      (client) =>
        client.birth_date.includes(e.target.value) ||
        client.name.toLowerCase().includes(e.target.value)
    );
    setClients(data);
    console.log(data);
  };

  return (
    <section className="w-full mt-8 flex flex-col bg-slate-500 px-4 py-3 items-center justify-center">
      <div className="w-full max-w-7xl flex justify-between py-5">
        <h1 className=" text-white font-semibold text-[25px]">
          Listado Clientes
        </h1>
        <Link
          to="/client/create"
          className="p-3 bg-blue-500 text-white flex items-center gap-2"
        >
          <span>
            <AiOutlinePlus />
          </span>
          Nuevo Cliente
        </Link>
      </div>
      <div className="bg-white w-full max-w-7xl pt-5 px-0 md:px-10">
        <form className="  flex items-center p-3 gap-2 border">
          <AiOutlineSearch type="submit" className=" text-gray-400" />
          <input
            onChange={submit}
            className="w-full placeholder:text-gray-400 focus:outline-none bg-transparent"
            type="text"
            placeholder="Search..."
          />
        </form>

        <div>
          {data.map((client) => {
            return <ClientsCard key={client.id} client={client} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientList;
