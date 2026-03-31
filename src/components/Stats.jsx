import React from 'react';

const Stats = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-12 w-full mt-10">
            <div className="container mx-auto px-6 lg:px-20">

                <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-white/30 text-white">

                    {/* item-1 */}
                    <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0">
                        <h2 className="text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">50K+</h2>
                        <p className="text-white/80 font-medium text-lg">Active Users</p>
                    </div>

                    {/* item-2 */}
                    <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0">
                        <h2 className="text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">200+</h2>
                        <p className="text-white/80 font-medium text-lg">Premium Tools</p>
                    </div>

                    {/* item-3 */}
                    <div className="flex flex-col items-center justify-center w-full md:w-1/3 py-6 md:py-0">
                        <h2 className="text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight">4.9</h2>
                        <p className="text-white/80 font-medium text-lg">Rating</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;