import axios from 'axios';

export const getAllStudents = async () => {
  const response = await axios.get('http://localhost:8080/')
  return response.data;
}

export const getGroupStudents = async () => {
  const response = await axios.get('http://localhost:8080/group')
  return response.data;
}

export const addStudent = async (name) => {
  const response = await axios.post('http://localhost:8080/add', name)
  return response.data;
}