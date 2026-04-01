import React from "react";
import badgeCircle from '../../src/assets/badge-circle.png'
import playicon from '../../src/assets/Play.png'
import bannerImg from '../../src/assets/banner.png'

const Banner = () => {
    return (
        <div className="w-[90%] lg:w-9/12 mx-auto gap-10 lg:gap-15 flex flex-col-reverse lg:flex-row items-center py-10 lg:py-15">
            <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 ">

            {/* Badge */}
                <span className="text-purple-500 text-xs md:text-sm font-medium bg-[#E1E7FF] inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-max mx-auto lg:mx-0">
                    <img src={badgeCircle} alt="Badge" className="h-3 w-3" />New: AI-Powered Tools Available
                </span>

            {/* Headline */}
                <p className="text-6xl font-extrabold mt-4 leading-16 ">Supercharge Your<br />Digital Workflow</p>
            {/* Subheadline */}
                <p className="leading-7 mt-4 text-sm text-[#627382]">Access premium AI tools, design assets, templates, and productivity
                    <br/>software—all in one place. Start creating faster today.

                    <br />Explore Products
                </p>
            
            {/* Buttons */}
                <div className="flex mt-4 flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm font-medium px-6 py-3 hover:opacity-90 transition">Explore Products</button>

                    <div className="btn rounded-full px-3 border-purple-400"><button className="text-sm font-semibold cursor-pointer text-linear flex items-center gap-2"><img src={playicon} alt="Play" className="h-4 w-4" />Watch Demo</button></div>
                   </div>

            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src={bannerImg} alt="Banner" className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"/>

            </div>
            
        </div>
    );
};

export default Banner


