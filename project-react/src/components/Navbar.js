import React from "react";
import {BsBook} from 'react-icons/bs'


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='h-20 w-full flex items-center pl-10 space-x-4'style={{ backgroundColor: "red",height: 80,color: "white", fontFamily: "Sans-Serif"}} >
            <div>
            <BsBook className='text-white text-5xl '/>
            </div>

            <div>
            <p className='text-white text-5xl' >Istudent</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
