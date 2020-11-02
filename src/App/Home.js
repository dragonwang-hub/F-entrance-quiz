import React, {Component} from 'react';
import StudentList from './StudentList';
import GroupsStudent from "./GroupsStudent";
import {getGroupStudents, addStudent, getAllStudents, makeGroups} from './action';
import './Home.css';


class Home extends Component {
    state = {
        studentList: [],
        groupsStudent: {},
    }

    makeGroup = async () => {
        await makeGroups();
        location.reload(false);
    }

    getAllGroup = async () => {
        const data = await getGroupStudents();
        const groups = [];
        for (const key in data) {
            const obj = {
                'key': key,
                'value': data[key],
            }
            groups.push(obj);
        }
        this.setState({
            groupsStudent: groups,
        });
    }

    addStudent = async (name) => {
        await addStudent(name);
        this.getAllStu();
    }

    getAllStu = async () => {
        const data = await getAllStudents();
        this.setState({
            studentList: data
        })
    }

    componentDidMount() {
        this.getAllStu();
        this.getAllGroup();
    }

    render() {
        return (
            <div className="home-page-card">
                <header className="header">
                    <h1 className="title">分组列表</h1>
                    <button onClick={this.makeGroup} type="button" className="groupsBtn">
                        分组学员
                    </button>
                </header>
                {this.state.groupsStudent.length > 0 &&
                <section className="groups-student">
                    {this.state.groupsStudent.map((group, index) => (
                        <section key={index} className="groups-container">
                            <p className="groups-name">{group.key} 组</p>
                            <GroupsStudent group={group.value}/>
                        </section>
                    ))}
                </section>
                }
                <StudentList allStu={this.state.studentList} addStudent={this.addStudent}/>
            </div>
        );
    }
}

export default Home;