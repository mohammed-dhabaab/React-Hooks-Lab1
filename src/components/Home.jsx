import { useState } from "react";
import styles from "../styles"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaEquals } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

function Home() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)

    const [textColor, setTextColor] = useState("text-black");
    const [slateColor, setSlateColor] = useState("bg-slate-100");

    const toggleMode = () => {
        setTextColor(prevTextColor => prevTextColor === "text-black" ? "text-white" : "text-black");
        setSlateColor(prevSlateColor => prevSlateColor === "bg-slate-100" ? "bg-slate-600" : "bg-slate-100");
    };
    const images = ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww", "https://plus.unsplash.com/premium_photo-1669018130437-7cf2eb36af1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1670591909028-1ea631e317d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlYXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYXxlbnwwfHwwfHx8MA%3D%3D"]
    const [img, setImg] = useState("https://plus.unsplash.com/premium_photo-1669018130437-7cf2eb36af1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXxlbnwwfHwwfHx8MA%3D%3D")

    const changeImg = () => {
        setImg(images[Math.floor(Math.random() * images.length)])
    }

    return (
        <main className={`${styles.outerWrapper} `}>
            <div className={`${styles.wrapper} px-8 ${textColor}`}>
                <div className="bg-slate-400 rounded-md p-10 flex flex-col gap-6">
                    <div className="flex justify-between">
                        <h1 className={`${styles.heading2} mb-8`}>Operations</h1>
                        <IoInvertMode onClick={() => toggleMode()} className={`cursor-pointer`} size={30} />
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className={`${slateColor} flex flex-col items-center p-2 rounded-md fill-current`}>
                            <h2>{num1}</h2>
                            <div className="flex gap-2">
                                <FaPlus onClick={() => setNum1(num1 + 1)} className="cursor-pointer" />
                                <FaMinus onClick={() => setNum1(num1 - 1)} className="cursor-pointer" />
                            </div>
                        </div>

                        <div className={`${slateColor} flex flex-col items-center p-2 rounded-md fill-current`}>
                            <h2>{num2}</h2>
                            <div className="flex gap-2">
                                <FaPlus onClick={() => setNum2(num2 + 1)} className="cursor-pointer" />
                                <FaMinus onClick={() => setNum2(num2 + 1)} className="cursor-pointer" />
                            </div>
                        </div>
                        <FaEquals />
                        <div className={`${slateColor} flex flex-col items-center justify-center p-2 rounded-md fill-current`}>
                            <h2>{res}</h2>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-wrap fill-current">
                        <div onClick={() => setRes(num1 + num2)} className={`${slateColor} cursor-pointer p-2 rounded-md`}>
                            <FaPlus />
                        </div>
                        <div onClick={() => setRes(num1 - num2)} className={`${slateColor} cursor-pointer p-2 rounded-md`}>
                            <FaMinus />
                        </div>
                        <div onClick={() => setRes(num1 * num2)} className={`${slateColor} cursor-pointer p-2 rounded-md`}>
                            <FaTimes />
                        </div>
                        <div onClick={() => setRes(num1 % num2)} className={`${slateColor} cursor-pointer p-2 rounded-md`}>
                            <FaPercentage />
                        </div>
                        <div onClick={() => setRes(num1 / num2)} className={`${slateColor} cursor-pointer p-2 rounded-md`}>
                            <FaDivide />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-4 mt-7">
                    <div>
                        <img className="rounded-md" src={img} alt="" />

                    </div>
                    <button onClick={() => changeImg()} className={`${styles.ghostButton}`}>Change</button>
                </div>

            </div>
        </main>
    )
}

export default Home