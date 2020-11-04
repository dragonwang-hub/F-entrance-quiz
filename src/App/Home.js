import React, { Component } from 'react';
import { getGroupStudents, addStudent } from './action';
import './Home.css';
// TODO GTB-工程实践: - console.log不应该被提交上来
// TODO GTB-工程实践: - 整个文件的ESlint是挂的
// TODO GTB-工程实践: - 组件的命名不合理，没有体现业务逻辑
class Home extends Component {
  // TODO GTB-知识点: - state应该被放在constructor里面
  state = {
    studentList: [],
    groupsStudent: {},
  }

  getAll = async () => {
    console.log("分组学员");
    const data = await getGroupStudents();
    console.log(data)
    this.setState({
      groupsStudent: data
    })
  }
  addStudent = async () => {
    console.log("添加学员");
    // prompt('');
    const data = await addStudent();
    console.log(data)
  }

  getAllStudents = async () => {
    console.log("打印所有学员");
    // TODO GTB-知识点: - 语法错误，getAllStudents is not defined
    const data = await getAllStudents();
    console.log(data)
    this.setState({
      studentList: data
    })
  }

  render() {
    // TODO GTB-知识点: - 也许是没有时间写代码了，我只单纯从现在有的代码评判的话，对React的组件划分概念还不太清楚，不能合理地运用
    // TODO GTB-工程实践: - css class命名格式不规范不统一，出现了groupsBtn和home-page-card。正确的应该是第二种。
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