import React from "react";
import { useState } from "react";
import CheckBox from "./CheckBox";
import ProductGraph from "./ProductGraph";
import {Carts} from "../Constraint";

const ProductList = () => {
  const [carts, setCarts] = useState(Carts);

  return (
    <>
      <div className="flex justify-between space-x-10 mt-2">
        <div className="container w-full h-auto grid grid-cols-4 gap-x-4 ">
          {carts.map((elem) => {
            const { id, image, name } = elem;

            return (
              <>
                <div className="container w-52 h-64 rounded-2xl bg-gray-50">
                  <div className="relative left-5 top-2">
                    <CheckBox />
                  </div>
                  <div className=" flex items-center justify-center container w-52 h-36 mt-2 ml-2">
                    <img src={image} alt="" className="w-18 h-24" />
                  </div>
                  <div className=" container w-56 h-20 mt-1">
                    <h2 className="ml-7 px-2 py-2">{name}</h2>
                    <button className=" bg-white ml-20 rounded-2xl px-1">
                      $600
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex w-full justify-center">
            <button className="border-2 border-gray-100 w-24 h-8 bg-white rounded-2xl px-1">
              Load More
            </button>
          </div>
        </div>
      <div><ProductGraph/></div>
      </div>
    </>
  );
};

export default ProductList;
