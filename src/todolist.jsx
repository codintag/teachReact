import React, { Component } from 'react'
import Task from "./task";
import Notfound from "./Notfound"


const ROUTES = {
    home: '#/',
    completeTasks: '#/complete-tasks',
    incompleteTasks: '#/incomplete-tasks'
}

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRoute: ROUTES.home,
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

        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        window.location.hash = ROUTES.home;

        window.onhashchange = (e) => {
            this.setState({currentRoute: window.location.hash});
        }
    }

    allTasks() {
       return this.state.tasks;
    }

    completeTasks() {
        return this.state.tasks.filter(task => task.complete)
     }

     incompleteTasks() {
        return this.state.tasks.filter(task => !task.complete)
     }

     renderRoute() {
        // eslint-disable-next-line default-case
        switch(this.state.currentRoute) {
            case ROUTES.home: return <TaskList tasks={this.allTasks()} title="All Tasks"/>;
            case ROUTES.completeTasks: return <TaskList tasks={this.completeTasks()} title="Complete Tasks"/>;
            case ROUTES.incompleteTasks: return <TaskList tasks={this.incompleteTasks()} title="Incomplete Tasks"/>;
            default: return <Notfound titre="La page des tasks n'a pas été trouvé"/>;
        }
     }

     addTask(event) {
         event.preventDefault();
         
         this.setState(prevState => {
            const newTask = {
                id: prevState.tasks.length + 1,
                description: this.newTaskDescription.value,
                complete: false
            }

            this.newTaskDescription.value = '';
            this.addTaskForm.reset();
  
            return { tasks: [...prevState.tasks, newTask] }
        });

    }

    render() {
        return (
        <div>
        <ul>
            <li><a href={ROUTES.home}>All Tasks</a></li>
            <li><a href={ROUTES.completeTasks}>Complete Tasks</a></li>
            <li><a href={ROUTES.incompleteTasks}>Incomplete Tasks</a></li>
        </ul>

            <form onSubmit = {this.addTask} ref={input => this.addTaskForm = input}>
                <input type="text" defaultValue = "" ref = {input => this.newTaskDescription = input} required placeholder="Enter a description" />
                <input type="submit" value="Add Task" />
            </form>

        {this.renderRoute()}

            {/* <TaskList tasks = {this.allTasks()} title = "All Tasks"/>
            <TaskList tasks = {this.completeTasks()} title = "Complete Tasks"/>
            <TaskList tasks = {this.incompleteTasks()} title= "Incomplete Tasks"/> */}
        </div>)
    }
}

const TaskList = (props) => (
        <div>
        <h1>{props.title}</h1>
            {props.tasks.map(task => <Task key = {task.id} details = {task}/>)}
        </div>
    )

export default TaskApp;