import React, { use} from "react";
import ProductsCard from "./ProductsCard";

const Models = ({ modelPromise, carts, setCarts }) => {
    const models= use(modelPromise)
    
    return (
        <section className="bg-gray-50">
        
        
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 py-10 ">
                {models.map((model)=>(
                    <ProductsCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
                ))}
            </div>
    </section>
            );
        };

export default Models
