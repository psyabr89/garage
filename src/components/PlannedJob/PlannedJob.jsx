import stylePlannedJob from './PlannedJob.module.css';
import Job from "../Job/Job";
const PlannedJob=()=>{
    return(
        <div>
            <h1>Запланированные работы</h1>
            <Job/>
            <Job/>
        </div>
    );
};

export default PlannedJob;