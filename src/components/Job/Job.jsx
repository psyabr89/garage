import styleJob from './Job.module.css';
import Task from './Task/Task';
import Mileage from "./Mileage/Mileage";
import Photos from './Photos/Photos';
import Price from "./Price/Price";

const Job =()=>{
    return (
        <div className={styleJob.job}>
            <Task/>
            <Mileage/>
            <Photos/>
            <Price/>
        </div>
    );
};

export default Job;