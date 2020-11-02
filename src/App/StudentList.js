import React, {Component} from 'react';
import './StudentList.css';

class StudentList extends Component {
    state = {
        addVisible: false,
        name: "",
    }

    showAddComponent = () => {
        this.setState({
            addVisible: true,
        })
    }

    cancelAddComponent = () => {
        this.setState({
            addVisible: false,
        })
    }

    submitContent = () => {
        if (this.state.name === "") {
        } else {
            this.props.addStudent(this.state.name);
            this.setState({
                addVisible: false,
            })
        }
    }

    getInputValue = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    render() {
        return (
            <section className="container">
                <h1>学员列表</h1>
                <section className="student-list">
                    {this.props.allStu.map((student, index) => (
                        <div key={index} className="students-container">
                            <span className="student-info">{student.id}. {student.name}</span>
                        </div>
                    ))}
                    <div className="students-container">
                        {this.state.addVisible === false &&
                        <input
                            type="submit"
                            onClick={this.showAddComponent}
                            className="add-button"
                            value="+ 添加学员"
                        />}
                        {this.state.addVisible === true &&
                        <div className="add-input">
                            <input
                                type="text"
                                className="name-input"
                                onChange={(e) => this.getInputValue(e)}
                            />
                            <input
                                type="submit"
                                onClick={this.submitContent}
                                className="form-button"
                                value="确认"
                            />
                            <input
                                type="submit"
                                onClick={this.cancelAddComponent}
                                className="form-button"
                                value="取消"
                            />
                        </div>
                        }
                    </div>
                </section>
            </section>
        )
    }
}

export default StudentList;