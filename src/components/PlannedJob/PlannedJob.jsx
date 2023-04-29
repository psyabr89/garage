import stylePlannedJob from './PlannedJob.module.css';
import Job from "../Job/Job";
import AddDeleteBtn from "../AddDeleteBtn/AddDeleteBtn";
import React, {useState} from "react";


const PlannedJob=()=>{
    const cart = [
        {id: '1', title: 'Замена ступицы', mileage: 100000, price: 30000},
        {id: '2', title: 'Замена тормозов', mileage: 109000, price: 305000},
        {id: '3', title: 'Замена колес', mileage: 140000, price: 37000},
    ];

    // const handleDeleteItem = (id)=>{
    //     setProducts((prevState)=>{
    //         prevState.filter((product)=>{product.id !== id});
    //     });
    // };

    // const [products, setProducts]=useState(cart);
    //
    // const ProductListItem=({product, onDeleted})=>{
    //     const [id,title]=product;
    //     return (
    //         <div>
    //             <h2>{title}</h2>
    //             <button onClick={()=>handleDeleteItem(id)}>DELETE</button>
    //         </div>
    //     );
    // };
    // const ProductList = ({products, onDeleted})=>{
    //     return (
    //         <ul>
    //             {products.map((product)=>{
    //                 return (
    //                     <li key={product.id}>
    //                         <ProductListItem product={product} onDeleted={onDeleted}/>
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //     );
    // };






    return(
        <div className={stylePlannedJob.plannedJob}>
            <AddDeleteBtn text={'Add'}/>
            <div className={stylePlannedJob.wrapper}>
                <h1>Запланированные работы</h1>

                {/*<ProductList products={cart} onDeleted={handleDeleteItem}/>*/}

                <Job/>
                {/*<Job/>*/}
                {/*<Job/>*/}
                {/*<Job/>*/}
                {/*<Job/>*/}
                {/*<Job/>*/}
                {/*<Job/>*/}
                {/*<Job/>*/}
            </div>

        </div>
    );
};
export default PlannedJob;
