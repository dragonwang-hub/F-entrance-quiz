import React, {Component} from 'react';

// import './StudentList.css'

class GroupsStudent extends Component {
    render() {
        return (
            <section className="student-group">
                {this.props.group.map((student, index) => (
                    <div key={index} className="students-container">
                        <span className="student-info">{student.id}. {student.name}</span>
                    </div>
                ))}
            </section>
        )
    }
}

export default GroupsStudent;