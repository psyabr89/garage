import styleDoneJob from './DoneJob.module.css';
import Job from "../Job/Job";

const DoneJob=()=>{
    return(
       <div className={styleDoneJob.doneJob}>
           <div className={styleDoneJob.wrapper}>
               <h1>Выполненные работы</h1>
               <Job/>
               <Job/>
               <Job/>
           </div>
       </div>
    );
};
export default DoneJob;