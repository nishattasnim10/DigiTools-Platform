import React from "react";
import user from "../assets/user.png"
import packages from "../assets/package.png"
import rocket from "../assets/rocket.png"


const Steps = () => {
    return (
        <div className="bg-[#F9FAFC] mt-20 pb-20 ">
            {/* heading & subheading */}
            <div className="w-8/12 mx-auto items-center text-center py-16">
                <h1 className="text-3xl font-extrabold text-[#101727]">Get Started in 3 Steps</h1>
                <p className="text-[#627382] mt-4 text-sm">Start using premium digital tools in minutes, not hours.</p>

            </div>
            {/* grid */}
            <div className="w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {/* step-1 */}
                <div className=" relative rounded-2xl  bg-white border border-gray-200 items-center justify-center mb-4">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient   mb-4 items-center justify-center flex text-white">01</div>
                   {/* img */}
                    <div className="mt-15 h-15 w-15 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                        <img src={user} alt="user" className="w-10 h-10 object-contain" />
                    </div>
                    {/* description */}
                    <div className="flex flex-col items-center justify-center text-center mt-5">
                        <h2 className="text-xl font-bold text-[#101727] ">Create Account</h2>
                        <p className="text-[#627382] leading-relaxed max-w-xs mb-15 text-sm">Sign up for free in seconds. No credit card <br />required to get started.</p>
                    </div>
                    

                </div>

                {/* step-2 */}
                <div className="relative rounded-2xl  bg-white border border-gray-200 items-center justify-center mb-4">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient  mb-4 items-center justify-center flex text-white">02</div>
                    {/* img */}
                    <div className="mt-15 h-16 w-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                        <img src={packages} alt="package" className="w-10 h-10 object-contain" />
                    </div>
                    {/* description */}
                    <div className="flex flex-col items-center justify-center text-center mt-5">
                        <h2 className="text-xl font-bold text-[#101727] ">Start Creating</h2>
                        <p className="text-[#627382] leading-relaxed max-w-xs mb-15 text-sm">Download and start using your premium <br/>tools immediately.</p>
                    </div>


                </div>

                {/* step-3 */}
                <div className="md:col-span-2 lg:col-span-1 w-full md:max-w-[calc(50%-20px)] lg:max-w-none mx-auto   relative rounded-2xl  bg-white border border-gray-200 items-center justify-center mb-4 ">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient    items-center justify-center flex text-white">03</div>
                    {/* img */}
                    <div className="mt-15 h-16 w-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                        <img src={rocket} alt="rocket" className="w-10 h-10 object-contain" />
                    </div>
                    {/* description */}
                    <div className="flex flex-col items-center justify-center text-center mt-5">
                        <h2 className="text-xl font-bold text-[#101727] ">Choose Products</h2>
                        <p className="text-[#627382] leading-relaxed max-w-xs mb-15 text-sm">Browse our catalog and select the tools <br/>that fit your needs.</p>
                    </div>


                </div>
               
            </div>

        </div>
    );
};   
export default Steps;