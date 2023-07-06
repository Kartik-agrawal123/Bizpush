import React from "react";
import CheckBox from "./CheckBox";
import { Carts } from "../Constraint";

const ProductList = () => {
  return (
    <>
      <div className=" container px-10 py-8">
        <div className="grid grid-cols-1 items-center  gap-10 md:grid-cols-2 lg:grid-cols-4 ">
          {Carts.map((elem) => {
            const { id, image, name } = elem;

            return (
              <>
                <div
                  key={id}
                  className="w-full shadow-md rounded-lg bg-gray-50 border-2">
                  <div className="relative left-5 top-2">
                    <CheckBox />
                  </div>
                  <div className="flex items-center justify-center  w-full h-36">
                    <img src={image} alt="" className="w-18 h-24" />
                  </div>
                  <div className="flex flex-col justify-center bg-gray-50 h-20">
                    <h2 className="text-center">{name}</h2>
                    <div className="flex justify-center">
                      <button className=" bg-white w-20 px-2 py-1  rounded-lg shadow-lg hover:cursor-pointer">
                        $600
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mx-auto w-40">
        <button className="border-2 border-gray-300 text-violet-500 px-4 py-2 bg-white rounded-lg shadow-lg">
          Load More...
        </button>
      </div>
    </>
  );
};

export default ProductList;
