
import styleModuleWindow from './ModalWindow.module.css'
import {useState} from "react";

const ModalWindow = (props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
         <div>
            <button className={styleModuleWindow.buttonOpenModalWindow} onClick={toggleModal}>Open Modal</button>
            {isOpen && (
                <div className={styleModuleWindow.modalWindow}>
                    <div className={styleModuleWindow.modalContent}>
                        <div className={styleModuleWindow.close} onClick={toggleModal}></div>
                        {/*{props.children}*/}
                        <form action="">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <button>save all</button>
                        </form>
                    </div>
                </div>
            )};
        </div>
    );
    // return(
    //
    //     <div className={styleModuleWindow.modalWindow}>
    //         <div >
    //             <form action="">
    //                 <input type="text"/>
    //                 <input type="text"/>
    //                 <input type="text"/>
    //                 <input type="text"/>
    //                 <button>save all</button>
    //             </form>
    //         </div>
    //     </div>
    // );
};

export default ModalWindow;