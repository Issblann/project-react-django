import React, { useContext } from "react";
import userIMG from "../../assets/user-img.svg";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { deleteClients } from "../../api/client.api";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../context/Context";

const ClientsCard = ({ client }) => {
  const { deleteClient, editClient, setClient } = useContext(ClientContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este cliente?"
    );
    if (confirmDelete) {
      try {
        await deleteClients(client.id);
        // deleteClient();
      } catch (err) {
        console.error("Error al eliminar la tarea", err);
      }
    }
  };

  const handleEdit = (client) => {
    // console.log(client);
    setClient(client);
    navigate("../client/" + client.id);
  };

  return (
    <>
      <div className="text-black flex md:items-center p-4 gap-7 flex-col items-start md:flex-row ">
        <img src={userIMG} width="30px" height="30px" alt="userIMG" />
        <div className="flex justify-between w-full flex-wrap md:flex-nowrap ">
          <div className="flex flex-col  justify-center">
            <h1 className=" font-semibold">{client.name} </h1>

            <p className=" font-normal text-gray-600">{client.email}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-gray-500 font-normal text-[13px]">
              <p>{client.birth_date}</p>
              <span>|</span>
              <p>{client.created_at}</p>
            </div>

            <div className="flex justify-start md:justify-end gap-3">
              <FaRegEdit
                onClick={() => handleEdit(client)}
                className=" bg-blue-500 text-white text-[30px] p-1"
              />
              <AiFillDelete
                cursor="pointer"
                onClick={handleDelete}
                className=" bg-red-600 text-white text-[30px] p-1 "
              />
            </div>
          </div>
        </div>
      </div>
      <span className="border bg-slate-500 w-full flex"></span>
    </>
  );
};

export default ClientsCard;
