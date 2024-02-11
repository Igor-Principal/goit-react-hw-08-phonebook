import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

function setToken(token) {
  instance.defaults.headers.common['Authorization'] = token;
}

export function delToken(token) {
  delete instance.defaults.headers.common['Authorization'];
}

export async function signUp(body) {
  return await instance.post('/users/signup', body);
}

export async function logIn(body) {
  const { data } = await instance.post('/users/login', body);
  setToken(`Bearer ${data.token}`);
  return data;
}

export async function getProfile() {
  const { data } = await instance('/users/current');
  return data;
}

export async function getContacts() {
  return await instance(`/contacts`);
}

export async function addContact(data) {
  return await instance.post(`/contacts`, data);
}

export async function deleteContact(id) {
  return await instance.delete(`/contacts/${id}`);
}
