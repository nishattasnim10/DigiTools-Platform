import React,{use} from "react";

const Models = ({modelPromise}) => {
    const models= use(modelPromise)
    console.log(models)
    return (
        <section className="bg-gray-50">
        <div className="container w-9/12 mx-auto px-6 lg:px-20 py-10 mt-20">
            <h2 className="text-4xl text-[#101727] font-extrabold text-center">Premium Digital Tools</h2>
            <p className="text-center text-[#627382] text-sm mt-4">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
            
        </div>
        {/* <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-15 py-10 bg-amber-100"> 
           
                {models.map(model => <div>
                   <h3>{model.name}</h3>
                   
                <div>
                    <img src={model.image} alt={model.name} />
                </div>
                                   </div>    
                )}
        </div> */}
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 py-10 ">
                {models.map((model)=>(
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
                        <button className="w-full -mt-2 bg-gradient text-white font-bold py-3 rounded-full hover:opacity-60 transition-all duration-300 cursor-pointer">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
    </section>
            );
        };

export default Models
