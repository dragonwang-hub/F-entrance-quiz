import axios from 'axios';
// TODO GTB-工程实践: - API的utils文件取名叫action.js没有体现业务逻辑
// TODO GTB-工程实践: - API文件应该放入/src下面，而不是App下面
// TODO GTB-知识点: - http://localhost:8080/应该被提出为API的公共变量
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