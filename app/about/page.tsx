import Link from "next/link";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"


const d = '[‘disciple’]'; 

const gspLinks = [
    {name:  "https://www.theblueeconomy.org/", href:"https://www.theblueeconomy.org/"},
    {name: "https://www.blueecampus.ch/", href:"https://www.blueecampus.ch/"},
    {name: "https://www.guntersfables.org/", href:"https://www.guntersfables.org/"},
    {name: "https://stone-paper.nl/", href:"stone-paper.nl"}
]
function About (){
    return (
        <div>
            <div className=" pt-20 px-8 mt-2">
                <h1 className="text-[#18A9EC] text-[20px] text-center text pb-4">About Us</h1>
                <h1 className="pb-4">History</h1>
                <p className="text-justify pb-4 leading-[30px]">Co-founded post-COVID by two Nigerian prodigies (one is an original {d} of Prof. Gunter Pauli while the other is now a keen convert) at an Arabian tea spot in Abuja, FCT Nigeria, <b>Premium Blue Economy Innovations and Investments Limited</b> has a unique assortment of some of the most experienced advisors, scientists, social scientists, engineers, economists, strategists, investment experts and other technical subject matter experts in Nigeria and beyond working in the marine and blue economy, climate adaptation, environment and other ancillary sectors </p>
                <h1 className="font-bold pt-16 pb-4 text-center">Our Vision</h1>
                <p className="pb-4 leading-[30px] text-justify">
                <FaQuoteLeft className="top"/>
                To be <em><b>the leading &#39;blue economy&#39; partner of choice</b></em> for public and private sector leaders.<FaQuoteRight className="bottom"/></p>
                <h1 className="font-bold pt-8 pb-4 text-center">Our Mission</h1>
            
                <p className="leading-[30px] pb-4 text-justify"><FaQuoteLeft className="top"/>To <em><b>catalyze Nigeria&apos;s shared and sustainble blue prosperity,</b></em> stimulating blue economy innovations while facilitating local and foreign direct investments and global strategic partnerships for blue economy initiatives across the country.<FaQuoteRight className="bottom"/></p>

                <div>
                <p className="pb-4 pt-12 text-center">GLOBAL STRATEGIC PARTNERSHIP</p>
                <div className="">
                {gspLinks.map((item, index) => (
                        <Link className="text-[#18A9EC] flex py-3 font-medium underline text-center" href={item.href} key={index}>
                            {item.name}
                        </Link>))}
                </div>   
                </div>
            </div>
        </div>
        
    )
}

export default About;