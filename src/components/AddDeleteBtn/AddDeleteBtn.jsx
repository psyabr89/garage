import styleAddDeleteBtn from './AddDeleteBtn.module.css';

const AddDeleteBtn =(props)=>{
    return (
        <button className={styleAddDeleteBtn.deleteBtn} onClick={props.func}>
            {props.text}
        </button>
    );
};

export default AddDeleteBtn;