
import styleModuleWindow from './ModalWindow.module.css'

const ModalWindow = ({active, setActive})=>{
    return(

        <div className={active ? [styleModuleWindow.active, styleModuleWindow.modalWindow].join(" "): styleModuleWindow.modalWindow} onClick={()=>{setActive(false)}}>
            <div className={active ? [styleModuleWindow.active, styleModuleWindow.modalWindowContent].join(" ") : styleModuleWindow.modalWindowContent} onClick={e=>e.stopPropagation()}>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>save all</button>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;