import React from 'react';
import './App.css';
import HeaderContainer from './HeaderContainer';
import Popup from "reactjs-popup";
import BurgerIcon from "../components/menu/burger-icon/BurgerIcon";
import Menu from "../components/menu/Menu";
import '../components/menu/Menu.css';
import ContactForm from '../components/ContactForm';
import SubHeader from '../components/SubHeader';
import ValuesContainer from './ValuesContainer';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  fontFamily: "'Roboto', serif",
  fontSize:"1.5em",
  width: "80%",
  border: "none",
  color: "white"
};
function App() {
  return (
    <div className="App" style={styles}>
      <Popup
           modal
        overlayStyle={{ background: "rgba(12,25,25,0.96" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
      <div className="main-container">
      <HeaderContainer/>
      <div>
         <SubHeader partOne="Our" partTwo="Values" viewAll={false}/>
         <ValuesContainer/>
      </div>
      <SubHeader partOne="Contact" partTwo="Us" viewAll={false}/>
      <ContactForm/>
      </div>
    </div>
  );
}

export default App;
