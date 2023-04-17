import HeaderBtn from "./../HeaderBtn/HeaderBtn";
import styleHeader from "./Header.module.css";


const Header = () => {
  return (
    <div className={styleHeader.header}>
      <nav>
          <HeaderBtn  style2={styleHeader.myGarage}  text={"Мой гараж"} away={'/myGarage'}></HeaderBtn>
          <HeaderBtn  style2={styleHeader.doneJob}  text={"Выполненные работы"} away={'/doneJob'}></HeaderBtn>
          <HeaderBtn style2={styleHeader.planedJob} text={"Запланированные работы"} away={"/plannedJob"}></HeaderBtn>
          <HeaderBtn style2={styleHeader.about} text={"О приложении"} away={'/about'}></HeaderBtn>
      </nav>
    </div>
  );
};

export default Header;
