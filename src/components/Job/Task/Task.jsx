import styleTask from './Task.module.css'

const Task =()=>{
    return (
        <div className={styleTask.task}>
            <p> Что именно было сделано </p>
        </div>
    );
};

export default Task;