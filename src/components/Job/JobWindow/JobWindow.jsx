import styleJobWindow from './JobWindow.module.css'
import Task from './Task/Task'
import Mileage from "./Mileage/Mileage";
import Photos from "./Photos/Photos";
import Price from "./Price/Price";

const JobWindow =()=> {
    return (
        <div className={styleJobWindow.jobWindow}>
            <Task/>
            <Mileage/>
            <Photos/>
            <Price/>
        </div>
    );
};

export default JobWindow;