import React,{useState} from "react";

function Header() {

  const [darkmode, setDarkMode] = useState(false);
  // handler
  const toggleDark = ()=>{
    setDarkMode(!darkmode)
    if(darkmode){
      document.body.classList.remove('dark')
    }else{
      document.body.classList.add('dark')
    }
  }
  return (
    <header>
      <h1>
        <span style={{ fontSize: "115%" }} className="material-icons">
          lightbulb
        </span>
        Keeper
      </h1>
      <span onClick={toggleDark} className="material-icons darkmode">
           {darkmode ? "light_mode":"dark_mode"}
      </span>
    </header>
  );
}

export default Header;
