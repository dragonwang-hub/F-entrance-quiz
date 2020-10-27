import React, { Component } from 'react';
import { getGroupStudents } from './action';
import './Home.css';

class Home extends Component {
  getAll = async () => {
    console.log("分组学员");
    const data = await getGroupStudents();
    console.log(data)
  }
  render() {
    return (
      <div className="home-page-card">
        <p className="title">分组列表</p>
        <p className="groupsBtn">
          <button onClick={this.getAll}>
            分组学员
          </button >
        </p>
      </div>
    );
  }
}

export default Home;