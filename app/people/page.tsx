const dataList = [
    {
        img: "/assets/Pauli2.jpg",
        name: "Prof. Gunter Pauli",
        text: "Technical Partner",
        position: "Global Advisory Board"
    },
    {
        img: "/assets/Olushola.jpg",
        name: "Gegele Yahya Olushola",
        text: "Co-founder/CEO",
        position: "Executive Member"
    },
    {
        img: "/assets/fife.jpg",
        name: "Fife Banks",
        text: "Co-founder/COO",
        position: "Executive Member"
    },
    {
        img: "/assets/abiodun.jpg",
        name: "Abiodun Sanusi",
        text: "Head Investment",
        position: "Executive Member"
    },
    {
        img: "/assets/victor.jpg",
        name: "Victor Ayo Oritedi",
        text: "Director, Business Development",
        position: "Executive Member"
    },
    {
        img: "/assets/tunde.jpg",
        name: "Tunde Ahmed",
        text: "Team Lead, Special Projects",
        position: "Executive Member"
    },
    {
        img: "/assets/Axis.jpg",
        name: "Axis Ribs",
        text: "Head International Blue Education",
        position: "Executive Member"
    },
    {
        img: "/assets/Abdulkadir.jpg",
        name: "Abdulkadir Abdulrahman",
        text: "Head Data Management and Machine Learning",
        position: "Executive Member"
    },
    {
        img: "/assets/ibrahim.jpg",
        name: "Al Amin Ibrahim Al Amin",
        text: "Head Climate Investment and Sustainability",
        position: "Executive Member"
    },
    {
        img: "/assets/grace.jpg",
        name: "Grace Eluma",
        text: "",
        position: " Staff Members"
    },
    {
        img: "/assets/mohammed.jpg",
        name: "Mohammed Adelodun esq",
        text: "",
        position: "Legal Advisory Board"
    },
]


function People(){
    return (
        <div className="h-screenflex flex-col justify-between px-8">
            <div className="mx-auto py-12 pt-24 leading-[32px]">
                <h1 className="text-center text-3xl pt-2 mb-8">OUR PEOPLE</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-4">
                    
                    {dataList.map((card, i) => (
                        <div key={i} className="shadow-lg rounded-lg mx-auto">
                            <img className="rounded-t-lg" src={card.img} alt=""/>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-slate-700 mb-3">{card.name}</h3>
                                <p className="text-md font-normal mb-1 text-slate-500">{card.position}</p>
                                <p className="text-lg font-normal text-gray-600">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>      
            </div>
        </div>
        
    )
}

export default People;