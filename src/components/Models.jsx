import React, { use} from "react";
import ProductsCard from "./ProductsCard";

const Models = ({ modelPromise, carts, setCarts }) => {
    const models= use(modelPromise)
    
    return (
        <section className="bg-gray-50">
        <div className="container w-9/12 mx-auto px-6 lg:px-20 py-10 mt-20">
            <h2 className="text-4xl text-[#101727] font-extrabold text-center">Premium Digital Tools</h2>
            <p className="text-center text-[#627382] text-sm mt-4">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
            
        </div>
        
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 py-10 ">
                {models.map((model)=>(
                    <ProductsCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
                ))}
            </div>
    </section>
            );
        };

export default Models
