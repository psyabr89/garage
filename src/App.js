import "./App.css";
import Header from "./components/Header/Header.jsx";
// import Body from "./components/Body/Body.jsx";
// import Footer from "./components/Footer/Footer";
import MyGarage from "./components/MyGarage/MyGarage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DoneJob from "./components/DoneJob/DoneJob";
import PlannedJob from "./components/PlannedJob/PlannedJob";
import About from "./components/About/About";

const App = () => {
  return (
        <div className="App">
            <BrowserRouter >
                <Header />
                    <Routes>
                        <Route path='/myGarage' element={<MyGarage/>}/>
                        <Route path='/doneJob' element={<DoneJob/>}/>
                        <Route path='/plannedJob' element={<PlannedJob/>}/>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                {/*<Footer />*/}
            </BrowserRouter>
        </div>
  );
};

export default App;
