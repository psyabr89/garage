import styleDoneJob from './DoneJob.module.css';
import Job from "../Job/Job";

const DoneJob=()=>{
    return(
       <div className={styleDoneJob.doneJob}>
           <h1>Выполненные работы</h1>
            <Job/>
            <Job/>
            <Job/>
       </div>
    );
};
export default DoneJob;