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
        return (
            <div className={styleJob.job}>
                <Task/>
                <Mileage/>
                <Photos/>
                <Price/>
                <button className={styleJob.openBtn} onClick={() => setModalActive(true)}>Отредактировать</button>
                <ModalWindow active={modalActive} setActive={setModalActive}/>
                <AddDeleteBtn text = {'Delete'}></AddDeleteBtn>
            </div>
        );
};

export default Job;