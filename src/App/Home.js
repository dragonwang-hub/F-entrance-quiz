import React, { Component } from 'react';
import { getGroupStudents, addStudent } from './action';
import './Home.css';

class Home extends Component {
  state = {
    studentList: [],
    groupsStudent: {},
  }

  getAll = async () => {
    console.log("分组学员");
    const data = await getGroupStudents();
    console.log(data)
  }
  addStudent = async () => {
    console.log("添加学员");
    const data = await addStudent();
    console.log(data)
  }

  getAllStudents = async () => {
    console.log("打印所有学员");
    const data = await getAllStudents();
    console.log(data)
  }

  render() {
    return (
      <div className="home-page-card">
        <p className="title">分组列表</p>
        <p className="groupsBtn">
          <button onClick={this.getAll} type="button">
            分组学员
          </button >
        </p>

        <p className="addBtn">
          <button onClick={this.addStudent} type="button">
            添加学员
          </button >
        </p>
      </div>
    );
  }
}

export default Home;