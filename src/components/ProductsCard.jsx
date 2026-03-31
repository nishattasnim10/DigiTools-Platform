import React from "react";
import { useState } from "react";

const ProductsCard = ({model, carts, setCarts}) => {
    const [isBuy, setIsBuy] = useState(false)
    const handleBuy = () => {
        setIsBuy(true)
        setCarts([...carts, model])
    }
    return (
        <div key={model.id} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">

            {/*img */}
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 border border-gray-200 rounded-full">
                    <img src={model.image} alt={model.name} className="w-7 h-7 object-contain" />
                </div>

                {/* badge */}
                <span className={`text-sm -mt-2.5 font-semibold px-3 py-1 rounded-full ${model.tagType === 'best-seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' :
                    model.tagType === 'popular' ? 'bg-[#F0EDFF] text-[#6B4DFF]' :
                        'bg-green-100 text-green-600'
                    }`}>
                    {model.tag}
                </span>
            </div>

            {/* des */}
            <div>
                <h3 className="text-xl font-bold text-[#101727] mb-2">{model.name}</h3>
                <p className="text-sm text-[#627382] leading-relaxed mb-3">
                    {model.description}
                </p>
            </div>

            <div className="mb-3">
                <span className="text-lg font-bold text-[#101727]">${model.price}</span>
                <span className="text-sm text-[#627382]">/{model.period}</span>
            </div>


            <ul className="space-y-3 mb-8">
                {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1 text-sm text-[#627382]">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* button */}
            <button onClick={handleBuy}
                className={`w-full -mt-2 text-white font-bold py-3 rounded-full transition-all duration-300 cursor-pointer 
                            ${isBuy ? "bg-green-500" : "bg-gradient hover:opacity-60"}`}
            >
                {isBuy ? "Added to Cart" : "Buy Now"}
            </button>
        </div>
    );
}   
export default ProductsCard;