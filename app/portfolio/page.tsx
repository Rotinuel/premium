import React from "react";
import Link from "next/link";

const catList = [
  {img:"/assets/pot1.jpeg"},
  {img:"/assets/pot2.jpeg"},
  {img:"/assets/pot3.jpeg"},
]

function portfolio() {
  return (
    <div className="mx-auto py-24 lg:px-36 px-8">
      <p className="leading-[32px] text-justify lg:pt-18">
        Premium Blue Economy Innovations and Investments Limited is dedicated to
        driving sustainable marine and blue economy initiatives in Nigeria.
        Founded in Abuja, the company brings together a diverse team of experts
        in marine sciences, engineering, economics, and strategic planning.
        Their focus is on catalyzing blue economy innovations and attracting
        both local and international investments. By fostering strategic
        partnerships, they aim to lead Nigeria towards a prosperous and
        sustainable blue economy future. Our Projects Include: Blue Economy
        Development: Strategic planning and implementation of sustainable marine
        initiatives. Climate Adaptation: Innovative solutions for climate
        resilience in coastal and marine environments. Environmental
        Stewardship: Projects focused on protecting marine biodiversity and
        ecosystems. Unilorin signs MOU with Swiss firm, one other for blue
        economy partnership
        </p>
        <div className="flex-col justify-between px-8">
          <div className="mx-auto pt-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-4">
                {catList.map((card, i)=>(
                  <div key={i} className="shadow-lg rounded-lg mx-auto">
                    <img className="rounded-t-lg" src={card.img} alt=""/>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
        <button className="underline">
        <a className="pt-12 px-8" href='https://nairametrics.com/2024/02/07/unilorin-signs-mou-with-swiss-firm-one-other-for-blue-economy-partnership/'> Click here to see More       
        </a>
        </button>
        </div>
        
    </div>
  );
}

export default portfolio;
