import axios from 'axios';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const privateInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

function setToken(token) {
  privateInstance.defaults.headers.common['Authorization'] = token;
}

export function delToken() {
  delete privateInstance.defaults.headers.common['Authorization'];
}

export async function signUp(body) {
  return await publicInstance.post('/users/signup', body);
}

export async function logIn(body) {
  const { data } = await publicInstance.post('/users/login', body);
  setToken(`Bearer ${data.token}`);
  return data;
}

export async function getProfile() {
  const { data } = await privateInstance('/users/current');
  return data;
}

export async function getContacts() {
  return await privateInstance(`/contacts`);
}

export async function addContact(data) {
  return await privateInstance.post(`/contacts`, data);
}

export async function deleteContact(id) {
  return await privateInstance.delete(`/contacts/${id}`);
}