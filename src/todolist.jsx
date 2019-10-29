import React, { Component } from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks :[
                {
                    id: 1, 
                    description: "Go to bed",
                    complete: true
                },
                {
                    id: 2, 
                    description: "Record a tutorial",
                    complete: false
                },
                {
                    id: 3, 
                    description: "Watch a movie",
                    complete: false
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>All Tasks</h1>
                {this.state.tasks.map(task => {
                    return (
                        <article key={task.id}>
                            <h1>#{task.id} - {task.description}
                                 { task.complete ? ' ✅ ' : ' ❌ ' }
                            </h1>
                        </article>
                    )
                })}
            </div>
        )
    }
}

export default TaskList;