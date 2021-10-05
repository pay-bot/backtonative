import React, { useState } from "react";
import DropdownWrapper from "react-dropdown-wrapper";
import caret from "../../caret.svg";
import logo from "../../baezeni.jpg";


export default function Navbar(props) {
  const [navcolor, setNavColor] = useState({
    backgroundColor: "aquamarine",
  });

  return (
    <>
      <div className="w-screen ">
        <div className="flex h-20 z-30 px-10 items-center " style={navcolor}>
        <img src={logo} className="mx-5 w-32 h-20 py-2 rounded-2xl" />

          <div className="w-3/12 ml-auto flex relative justify-end -mt-5 ">
            <DropdownWrapper
              closeOnEsc
              onStateChange={console.log}
              wrapperProps={{
                className: "absolute border px-2 py-1 rounded-xl border-2 bg-white ",
              }}
            >
              {({ changeStatus, isShow }) => (
                <>
                  <button
                    className="flex capitalize font-semibold"
                    onClick={() => changeStatus(!isShow)}
                  >
                    Change Nav Color
                    <img src={caret} className="" />
                  </button>
                  {isShow && (
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          setNavColor({
                            backgroundColor: "aquamarine",
                          })
                        }
                        className="space-y-1 capitalize font-semibold"
                      >
                        default
                      </button>
                      <button
                        onClick={() =>
                          setNavColor({
                            backgroundColor: "white",
                          })
                        }
                        className="space-y-1 capitalize font-semibold"
                      >
                        white
                      </button>
                    </div>
                  )}
                </>
              )}
            </DropdownWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
