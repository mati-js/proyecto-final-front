import { useState, useRef, useEffect } from 'react';
import { Button, Tooltip  } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import Task from './Task';

const TaskList = ({ persistedTasks }) => {
  const [tasks, setTasks] = useState(() => {
    let oldTasks = persistedTasks.map((task) => {
      return <Task onDestroy={destroyTask} initialText={task.text} taskId={task.id} key={task.id}/>
    });
    return oldTasks;
  });
  const taskRef = useRef(tasks);

  const destroyTask = (taskId) => {
    let newTasks = taskRef.current.slice().filter((task) => {
      return parseInt(task.key) !== taskId;
    })
    setTasks(newTasks);
  }
  
  useEffect(() => {
    taskRef.current = tasks;
  }, [tasks]);

  const getActualTasks = () => {
    let tasksInfo = [];
    
    tasks.forEach(task => {
      tasksInfo.push(task.getTaskInfo());
    });

    return tasksInfo;
  }

  const handleNewTask = () => {
    // El ID pasa a ser un timestamp (igual al key).
    // Le paso un task ID para tener un prop desde 
    // la task y así poder levantarla y poder quitarla
    // del array {tasks} (que es un estado de la lista).
    let taskId = + new Date();
    setTasks([...tasks, 
      <Task
        onDestroy={destroyTask}
        taskId={taskId}
        key={taskId}
        initialText={null}
        wasDone={false}
        wasCancelled={false}
      />
    ]);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1 className="title">Tareas para hacer</h1>
      
      {tasks}
      <Tooltip placement="right" title="Crea una nueva tarea!" color='blue'>
        <Button style={{background: 'white'}} onClick={handleNewTask} size='middle' icon={ <PlusSquareOutlined />}/>
      </Tooltip>
    </div>
  );

};

export default TaskList;