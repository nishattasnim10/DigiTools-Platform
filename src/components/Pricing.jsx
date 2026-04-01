import React from "react";

const Pricing = () => {
    return (
        <div className="bg-white pb-25 ">
            {/* heading & subheading */}
            <div className="w-8/12 mx-auto items-center text-center py-16 ">
                <h1 className="mt-8 text-4xl font-extrabold text-[#101727]">Simple, Transparent Pricing</h1>
                <p className="text-[#627382] mt-4 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            </div>
            {/* grid */}
            {/* grid section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

                {/* Starter Plan */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-[#101727]">Starter</h3>
                        <p className="text-[#627382] text-sm mt-1">Perfect for getting started</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-[#101727]">$0</span>
                            <span className="text-[#627382] text-lg">/Month</span>
                        </div>
                        <ul className="space-y-2 mb-10">
                            <li className="flex items-center gap-3 text-[#627382] text-sm">
                                <span className="text-green-500">✓</span> Access to 10 free tools
                            </li>
                            <li className="flex items-center gap-3 text-[#627382] text-sm">
                                <span className="text-green-500">✓</span> Basic templates
                            </li>
                            <li className="flex items-center gap-3 text-[#627382] text-sm">
                                <span className="text-green-500">✓</span> Community support
                            </li>
                            <li className="flex items-center gap-3 text-[#627382] text-sm">
                                <span className="text-green-500">✓</span> 1 project per month
                            </li>
                        </ul>
                    </div>
                    <button className="w-full bg-[#7128F0] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all cursor-pointer">
                        Get Started Free
                    </button>
                </div>

                {/* Pro Plan (Highlighted) */}
                <div className="bg-gradient rounded-3xl p-8 shadow-xl relative transform lg:scale-105">
                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                        Most Popular
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">Pro</h3>
                        <p className="text-purple-100 text-sm mt-1">Best for professionals</p>
                        <div className="my-8 text-white">
                            <span className="text-4xl font-extrabold">$29</span>
                            <span className="text-purple-100 text-lg">/Month</span>
                        </div>
                        <ul className="space-y-2 mb-10 text-white">
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Access to all premium tools</li>
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Unlimited templates</li>
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Priority support</li>
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Unlimited projects</li>
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Cloud sync</li>
                            <li className="flex items-center gap-3 text-sm"><span>✓</span> Advanced analytics</li>
                        </ul>
                    </div>
                    <button className="w-full bg-white text-[#7128F0] font-bold py-4 rounded-2xl hover:bg-purple-100 transition-all cursor-pointer ">
                        Start Pro Trial
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-[#101727]">Enterprise</h3>
                        <p className="text-[#627382] text-sm mt-1">For teams and businesses</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-[#101727]">$99</span>
                            <span className="text-[#627382] text-lg">/Month</span>
                        </div>
                        <ul className="space-y-2 mb-10 text-[#627382]">
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> Everything in Pro</li>
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> Team collaboration</li>
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> Custom integrations</li>
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> Dedicated support</li>
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> SLA guarantee</li>
                            <li className="flex items-center gap-3 text-sm"><span className="text-green-500">✓</span> Custom branding</li>
                        </ul>
                    </div>
                    <button className="w-full bg-[#7128F0] text-white font-bold py-4 rounded-2xl  hover:opacity-90 transition-all cursor-pointer">
                        Contact Sales
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Pricing