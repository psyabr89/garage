import stylePlannedJob from './PlannedJob.module.css';
import Job from "../Job/Job";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";
const PlannedJob=()=>{
    const baseOfPlannedJob = [
        {id: 1, task: 'Замена ступицы', mileage: 100000, price: 30000},
        {id: 2, task: 'Замена тормозов', mileage: 109000, price: 305000},
        {id: 3, task: 'Замена колес', mileage: 140000, price: 37000},
    ];
    const jobItem = ({baseOfPlannedJob})=>{
        const elements = baseOfPlannedJob.map(item=>{
            return (
                <Job {...item}/>
            );
        });
        return (
            <ul>
                {elements}
            </ul>
        );
    };

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
