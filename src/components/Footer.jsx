import React from "react";
import instagram from "../assets/Instagram.png"
import facebook from "../assets/Facebook.png"
import twitter from "../assets/Twitter.png"

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-white pt-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5 pb-16">

                    {/* col-1 */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/*col-2*/}
                    <div className="lg:pl-10">
                        <h3 className="font-bold mb-6">Product</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                        </ul>
                    </div>

                    {/*col-3*/}
                    <div>
                        <h3 className="font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">About</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>

                    {/*col-4*/}
                    <div >
                        <h3 className="font-bold mb-6">Resources</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    {/*col-5*/}
                    <div className="flex flex-col">
                        <h3 className="font-bold mb-6">Social Links</h3>
                        <div className="flex gap-4">
                            <img src={instagram} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="Instagram" />
                            <img src={facebook} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="Facebook" />
                            <img src={twitter} className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="Twitter" />
                        </div>
                    </div>

                </div>

                {/* btm*/}
                <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer