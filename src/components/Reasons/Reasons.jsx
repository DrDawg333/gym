import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const Reasons = () => {
  return (
    <div className="Reasons flex gap-4" id="reasons">
      {/* Image 1 */}
      <div
        className="w-[200px] h-[500px] rounded-md hover:scale-105 duration-200 bg-black"
        style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="w-[500px] h-[500px] flex flex-col gap-2 ">
        <div
          className="w-full h-[300px] rounded-md  hover:scale-105 duration-200"
          style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

        <div className="flex w-full gap-x-4 h-[200px] 500">

          <div
            className="w-1/2 h-full  rounded-md  hover:scale-105 duration-200"
            style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>

          <div
            className="w-1/2 h-[80%] rounded-md  hover:scale-105 duration-200"
            style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>

        </div>
      </div>
    </div>
  )
}

export default Reasons;

