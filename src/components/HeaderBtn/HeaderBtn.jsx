import styleHeaderBtn from "./HeaderBtn.module.css"
import {Link} from "react-router-dom";
const HeaderBtn = (props) => {
  return (
      <Link to={props.away}>
        <button className={[styleHeaderBtn.navLi,props.style2].join(' ')} >
          {props.text}
        </button>
      </Link>);
};
export default HeaderBtn;
