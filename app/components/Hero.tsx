import Image from "next/image"
import Pauli from "../../public/assets/Pauli.jpg";
import BlurArrow from "../../public/assets/arrow.png"


const brace = '[Portfolio of Opportunities]'


export function Hero (){
    return(
        <div className="pt-4 overflow-hidden">
            <div className="px-[20px]">
                <div className="text-center text-[16px] leading-[24px] font-medium font-xs text-[#fff] bg-water bg-no-repeat bg-cover bg-center h-[240px] px-[30px] py-[20px] lg:text-[32px] lg:leading-[40px] lg:px-[120px] lg:h-[300px] lg:py-[40px]">
                    <p className="pt-20">From policy design and strategy development to blue economy innovations and investments to blue prosperity</p>
                </div>
                <div className="h-16px">
                    <p className="text-justify lg:text-center pt-6 font-medium">We are focused on catalyzing <b>shared and sustainable blue prosperity in Nigeria</b> Collaborating with public and private sector stakeholders while leading the way in stimulating Blue economy innovations and facilitating global investments for nation-wide impact.</p>
                <div className="flex w-full justify-center pt-8">
                    <button className="bg-[#0070C2]  py-4 px-4 text-[#FFFFFF] rounded-[4px] underline">Learn more about us</button>
                </div>
                </div>
                    
            </div>
                
            <div className="bg-[#F2F2F2] text-center mt-8 mb-12 text-[#fff] px-[20px] py-[20px]">
                <h1 className="text-center text-[#000] pb-[20px] font-bold text-[20px]">we work across the blue economy value chain</h1>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-auto items-stretch justify-items-center">

                        <div className="flex justify-center items-center w-80 max-w-sm h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                            <div className="px-6 py-4">                            
                                <div className="font-bold text-xl">
                                    Policy Advisory, Advocacy & Strategy Development
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-80 max-w-sm h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                            <div className="px-6 py-4">                            
                                <div className="font-bold text-xl">
                                Policy Management, Strategic Execution & Project Governance
                                </div>
                            </div>
                        </div>

                        <div className=" flex justify-center items-center w-80 max-w-sm h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                        <div className="px-6 py-4">                            
                            <div className="font-bold text-xl">
                                Ecosystems Regeneration & Biodiversity Restoration
                            </div>
                        </div>
                        </div>

                        <div className="flex justify-center items-center w-80 max-w-sm h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                        <div className="px-6 py-4">                            
                            <div className="font-bold text-xl">
                                Project Finance & Foreign Direct Investment
                            </div>
                        </div>
                        </div>

                        <div className="flex justify-center items-center max-w-sm w-80 h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                        <div className="px-6 py-4">                            
                            <div className="font-bold text-xl">
                                Ecological Research, Analysis & Mapping {brace}
                            </div>
                        </div>
                        </div>

                        <div className="flex justify-center items-center max-w-sm w-80 h-36 rounded overflow-hidden shadow-lg bg-[#4373C5]">
                        <div className="flex px-6 py-4">                            
                            <div className="font-bold text-xl">
                                   Monitoring & Evaluation
                            </div>
                        </div>
                        </div>
                </div>
            </div>

            <p className="text-center text-12 font-medium text-[#000]">STRATEGIC ADOPTION AND PRAGMATIC ADAPTATION</p>
            <div className="relative flex h-full w-full justify-start px-[200px]">
                <Image src={Pauli} alt="" className="min-h-[10px] object-cover"/>
            </div>
            <div className="flex w-full justify-center pt-8">
            <button className="bg-[#0070C2] flex items-center justify-center gap-x-2  py-4 px-4 text-[#FFFFFF] rounded-[4px]">view more videos
                <span>
                    <Image src={BlurArrow} alt="view more videos"/>
                </span>
            </button>
            </div>
        </div>
    )
}