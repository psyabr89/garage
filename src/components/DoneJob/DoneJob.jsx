import styleDoneJob from './DoneJob.module.css';
import Job from "../Job/Job";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";

const DoneJob=()=>{
    const BaseOfDoneJob = [

    ];
    return(
        <div className={styleDoneJob.doneJob}>
            <h1>Выполненные работы</h1>
            <AddDeleteBtn text={"Add"}/>
            <div className={styleDoneJob.wrapper}>

                <Job/>
                <Job/>
                <Job/>
            </div>
        </div>
    );
};

export default DoneJob;