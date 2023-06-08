import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState("");
  // const navigate = useNavigate();
  const filterClients = (name, creationData) => {
    console.log("Aqui se van a filtrar los clientes ");
  };

  const editClient = (client) => {
    console.log(client);
  };

  const deleteClient = (id) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  const createClient = (newClient) => {
    console.log("Aqui se va a crear los clientes ");
  };

  const resetValue = () => {};
  return (
    <ClientContext.Provider
      value={{
        clients,
        setClients,
        client,
        setClient,
        filterClients,
        editClient,
        deleteClient,
        createClient,
        resetValue,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider };
