import styleDoneJob from './DoneJob.module.css';
import Job from "../Job/Job";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";

const DoneJob=()=>{
    const BaseOfDoneJob = [
        {id: 1, task: 'Замена ступицы', mileage: 100000, price: 30000},
        {id: 2, task: 'Замена тормозов', mileage: 100000, price: 30000},
        {id: 3, task: 'Замена колес', mileage: 100000, price: 30000},
    ];
    return(
        <div className={styleDoneJob.doneJob}>
            <h1>Выполненные работы</h1>
            {/*<AddDeleteBtn text={"Add"}/>*/}
            <div className={styleDoneJob.wrapper}>

                <Job/>
                <Job/>
                <Job/>
            </div>
        </div>
    );
};

export default DoneJob;