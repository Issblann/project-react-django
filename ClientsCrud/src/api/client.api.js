import axios from "axios";

const clientApi = axios.create({
  baseURL:
    "https://django-project-production-5c19.up.railway.app/clients/api/v1/clients/",
});
export const getAllClients = () => {
  return clientApi.get("/");
};

export const createClients = (client) => {
  return clientApi.post("/", client);
};
export const getClient = (id) => clientApi.get(`/${id}`);
export const deleteClients = (id) => clientApi.delete(`/${id}`);

export const updateClients = (id, client) => clientApi.put(`/${id}`, client);
