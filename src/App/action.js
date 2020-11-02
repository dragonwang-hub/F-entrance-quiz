import axios from 'axios';

const HttpClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 60000,
    headers: {
        "Content-Type": "application/json;"
    }
})

export const getAllStudents = async () => {
    const response = await HttpClient.get('/')
    return response.data;
}

export const getGroupStudents = async () => {
    const response = await HttpClient.get('/group')
    return response.data;
}

export const addStudent = async (name) => {
    const response = await HttpClient.post('/add', name)
    return response.data;
}

export const makeGroups = async () => {
    await HttpClient.post('/group');
}