import styleJob from './Job.module.css';
import Task from './Task/Task';
import Mileage from "./Mileage/Mileage";
import Photos from './Photos/Photos';
import Price from "./Price/Price";
import ModalWindow from "../ModalWindow/ModalWindow";
// import JobWindow from "./JobWindow/JobWindow";
import {useState} from "react";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";

const Job =()=> {
    const [modalActive, setModalActive] = useState(false);
    const [count, setCount]=useState(0);
        return (
            <div className={styleJob.job}>
                <p> вы кликнули {count} раз</p>
                <button onClick={()=>{setCount(count+1)}}>NAZHMI!!!</button>
                <Task/>
                <Mileage/>
                <Photos/>
                <Price/>
                <ModalWindow />
                <AddDeleteBtn text = {'Delete'}></AddDeleteBtn>
            </div>
        );
};

export default Job;