import { useState, useRef } from 'react';
import { Input, Button } from 'antd';
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../styles/task.css';

const Task = ({ taskId, onDestroy, initialText, wasDone, wasCancelled }) => {
  // Cuando una tarea se completa, se bloquea
  // el input y se pone verde el fondo.
  const [isDone, setDone] = useState(wasDone ?? false);

  // Cuando una tarea se cancela, se bloquea
  // el input y se pone rojo el fondo.
  const [isCancelled, setCancelled] = useState(wasCancelled ?? false);

  // Ref para la tarea actual
  const thisTask = useRef(null);

  // Setea la tarea como no-cancelada
  // (esto evita que el estado anterior
  // se mantenga) y setea el estado contrario
  const handleDoneTask = () => {
    setCancelled(false);
    setDone(!isDone);
  };

  // Lo mismo acá
  const handleCancelledTask = () => {
    setDone(false);
    setCancelled(!isCancelled);
  };

  // Acá le puse una animación y le
  // pongo un timeout para que espere
  // que termine y luego, llamo la función
  // que le pasé como un prop. Al usar el hook 
  // {useEffect}, la lista de tareas está actualizada
  const handleDestroy = () => {
    thisTask.current.classList.add('deleted-task');
    setTimeout(() => {
      onDestroy(taskId)
    }, 300); // 300 ms es justo lo que dura la animación
  }

  const getTaskInfo = () => {
    return {
      id: taskId,
      text: thisTask.current.querySelector('.text').value,
      isDone: isDone,
      isCancelled: isCancelled
    };
  }

  const setCorrectBackground = () => {
    return {
      background: `${isDone ? '#00a362' : (isCancelled ? '#a12a2a' : 'black')}`
    };
  };

  return (
    <div ref={thisTask} className='container' style={setCorrectBackground()}>
      <Input className='text' style={isDone || isCancelled ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} placeholder='Editame' defaultValue={initialText ?? null} bordered={false} disabled={isDone || isCancelled}/>
      <Button className='complete' onClick={handleDoneTask} size='middle' icon={ <CheckOutlined/> }/>
      <Button className='cancel' onClick={isCancelled ? handleDestroy : handleCancelledTask} size='middle' icon={ <CloseCircleOutlined /> }/>
    </div>
  );
};

export default Task;