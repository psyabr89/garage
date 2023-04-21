import stylePlannedJob from './PlannedJob.module.css';
import Job from "../Job/Job";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";
const PlannedJob=()=>{
    return(
        <div className={stylePlannedJob.plannedJob}>
            <AddDeleteBtn text={'Add'}/>
            <div className={stylePlannedJob.wrapper}>
                <h1>Запланированные работы</h1>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
                <Job/>
            </div>

        </div>
    );
};
export default PlannedJob;
