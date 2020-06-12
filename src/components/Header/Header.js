import React from "react";
import {FadeMenu} from './DropDown';
import DehazeIcon from "@material-ui/icons/Dehaze";
import "./Header.css";

// const menuItems = [
//   {
//     title:"Boards", 
//     action: function() {
//       alert("Boards")
//     }
//   },
//   ,{title:"Profile",  action: function() {
//     alert("Profile")
//   }},{title:"Settings",  action: function() {
//     alert("Settings")
//   }}]


const Header = props => {
  return (
    <header id="headerContainer">
      <h1 id="headerTitle">Remember to...</h1>
      {/* <div id="headerDropDown">
        <FadeMenu icon ={ <DehazeIcon
            color="black"
          />} items = {menuItems}>

            </FadeMenu>
      </div> */}
    </header>
  );
};

export default Header;
