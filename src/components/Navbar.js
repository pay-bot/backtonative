import React,{useState} from 'react'
import logo from '../baezeni.jpg'
import DropdownWrapper from "react-dropdown-wrapper";
import caret from '../caret.svg'


export default function Navbar() {
    const [navcolor, setNavcolor] = useState({
        backgroundColor: 'aquamarine'
    })

    const green = () => {
        setNavcolor({backgroundColor: 'green'})
    }

    const red = () => {
        setNavcolor({backgroundColor: 'red'})
    }

    const blue = () => {
        setNavcolor({backgroundColor: 'blue'})
    }

    const base = () => {
        setNavcolor({backgroundColor: 'aquamarine'})
    }


    return (

        <>
        <div className="nav">
           <div className="navbar" style={navcolor}>
               <img src={logo} width="200px" height="75px" />
               <h3 >Jakarta, Indonesia</h3>
               <div className="language">
               <DropdownWrapper
        closeOnEsc
        onStateChange={console.log}
        wrapperProps={{
          className: "dropdown-wrapper"
        }}
      >
        {({ changeStatus, isShow }) => (
          <>
            <button
              className="dropdown-toggle"
              onClick={() => changeStatus(!isShow)}
            >
              Change Nav Color
              <img src={caret} className="" />
            </button>
            {isShow && (
              <div className="dropdown">
                <button onClick={green} className="">Green</button>
                <button onClick={red} className="">Red</button>
                <button onClick={blue} className="">Blue</button>
                <button onClick={base} className="">Default</button>
              </div>
            )}
          </>
        )}
      </DropdownWrapper>
               </div>
               </div> 
               </div>
        </>
    )
}
