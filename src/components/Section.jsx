import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";
export default function Sections() {
    const img = "https://satincorp.com/wp-content/uploads/2021/01/ai-robot-using-computer-chat-with-customer-scaled-1.jpg";
    const img2 = "https://i.ytimg.com/vi/Acst11cFmxE/maxresdefault.jpg";
    const navigate = useNavigate()
    const { loggedIn } = useSelector(state => state.auth)
    const tryChat = () => {

        if (loggedIn) {
            navigate("/chat")
        } else {
            navigate("/login")

        }
    }
    return (

        <>
            <Navbar />

            <div className="bg-[#F8EDE3] md:flex flex justify-around mt-[20px] p-[12px]">
                <div className=" w-[50%]">
                    <h1 className="text-indigo-500 font-mono xl:text-[22px]  2xl:text-[35px] text-[18px] p-[20px_0px] ">Chat GPT</h1>
                    <p className="text-slate-500">
                        Bu meningizni aniqlash uchun, men sun'iy intellekt yordamida tilni
                        avtomatik ravishda o'rganiladigan bir texnologiyadan
                        foydalanamanizni tavsiya qilaman. Sun'iy intellekt imkoniyatlari,
                        yodlab turish, ma'lumotlarni tahlil qilish, xabar yuborish va boshqa
                        ko'plab ishlar uchun foydali bo'lishi mumkin. Shuningdek, bu
                        imkoniyatlar, sizning ishlar va vazifalaringizni osonlashtirish,
                        vaqt va samaradorlikni oshirishga yordam berishi mumkin.
                    </p>

                    <button onClick={tryChat} className="mt-5 px-3 py-2 hover:bg-[#571313] duration-75 text-white bg-[#A64040]">
                        Sinab ko’rish
                    </button>

                </div>
                <div className="h-[300px] w-[550px] md:shrink-0 bg-red-400">
                    <img className="h-full w-full" src={img} alt="" />{" "}
                </div>
            </div>
            <div className="bg-[#F8EDE3] flex justify-around mt-[20px] p-[12px]">
                <div className="h-[300px] w-[550px] bg-red-400">
                    {" "}
                    <img className="h-full w-full" src={img2} alt="" />
                </div>
                <div className="w-[50%]">
                    <h1 className="text-indigo-500 font-mono xl:text-[22px]  2xl:text-[35px] text-[18px] p-[20px_0px] ">
                        AI Image Generate
                    </h1>
                    <p className="text-slate-500">
                        Bu sun'iy intellekt asosida yaratilgan bir dastur yoki xizmatdir, bu
                        xizmat yoki dastur orqali siz biron bir rasmni avtomatik ravishda
                        yarata olasiz. Bu dastur yoki xizmat sizning istalgan rasmingizni
                        asosiy ma'lumotlariga ko'ra tahlil qiladi va o'zining o'zaro bog'liq
                        algoritmlarini ishlatadi. Bu algoritmlar, tasvirning shakl, rang,
                        uslub va boshqa ko'plab tafsilotlari haqida ma'lumotlarni aniqlab,
                        yangi tasvirlar yaratishga yordam beradi.
                    </p>

                    <button disabled className="mt-5 text-white px-3 py-2 bg-[#a95252]">Tez Kunda...</button>
                </div>
            </div>
            <Footer />

        </>
    );
}
