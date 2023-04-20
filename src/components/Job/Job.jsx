import styleJob from './Job.module.css'
import JobWindow from "./JobWindow/JobWindow";
import Mileage from "./JobWindow/Mileage/Mileage";

const Job = ()=> {
    return (
        <div className={styleJob.job}>
            <JobWindow/>
            <JobWindow/>
            <JobWindow/>
            <JobWindow/>
        </div>
    )
};

export default Job;