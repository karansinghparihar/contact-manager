import { useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function ToDoList() {
    let [tasks,setTasks] = useState(["task 1", "task 2", "task 3"])
    let [task,setTask] = useState('')

    function addTask() {
        console.log('task added : ',task)
        setTasks([...tasks, task])
        console.log('tasks : ',tasks)
    }

    function selectedTasks(e){
        console.log(e.target.checked)
    }

    console.log('rerendering..')
    return (
        <div>
            <h1>To Do List!</h1><br /><br />
            <input type='text' placeholder='Add new task...' onChange={(e) => setTask(e.target.value)} /> {' '}
            <Button onClick={addTask}>Add Task</Button>
            <Table>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Task</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((item,key) =>
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{item}</td>
                                <td><input type='checkbox' onChange={selectedTasks} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table><br />
            <Button>Delete selected task</Button>
        </div>
    )
}