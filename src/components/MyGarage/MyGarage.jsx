import React from "react";
import {useState} from "react";
import styleMyGarage from './MyGarage.module.css'
import CarImage from "./CarImage/CarImage";
import MyMileage from "./MyMileage/MyMileage";



const MyGarage = () => {
    const [mileage, setMileage]=useState(1);
    let onClickPlus = ()=>{
        setMileage(mileage+1);
    };
    return (

    <div className={styleMyGarage.myGarage}>
        <div className={styleMyGarage.wrapper}>
            <CarImage/>
            <MyMileage/>
            <div className="imageCar">Картинка машины</div>
            <ul>
                <li>Мой пробег: {mileage}км</li>
                <button onClick={onClickPlus}>увеличить пробег</button>
                <li>проведенная работа</li>
                <li>проведенная работа</li>
                <li>проведенная работа</li>
            </ul>
        </div>
    </div>
  );
};
export default MyGarage;
