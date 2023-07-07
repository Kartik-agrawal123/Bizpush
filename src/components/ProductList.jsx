import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Carts } from "../Constraint";

const ProductList = () => {
  return (
    <>
      <div className="container px-10 py-8">
        <div className="grid grid-cols-1 items-center  gap-10 md:grid-cols-2 lg:grid-cols-4 ">
          {Carts.map((elem) => {
            const { id, image, name } = elem;
            return (
              <>
                <div
                  key={id}
                  className="w-full relative shadow-md rounded-md bg-gray-50 px-4 py-4 border-1">
                  <div className="absolute left-0 top-0">
                    <Checkbox
                      icon={
                        <RadioButtonUncheckedIcon
                          // style={{ color: "#e5e7eb" }}
                          style={{
                            color: "#e5e7eb",
                            backgroundColor: "white",
                            borderRadius: "50%",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckCircleIcon style={{ color: "#8833FF" }} />
                      }
                    />
                  </div>
                  <div className="flex items-center justify-center  w-full h-36">
                    <img src={image} alt="" className="w-18 h-24" />
                  </div>
                  <div className="flex flex-col space-y-6 justify-center bg-gray-50 h-20">
                    <p className="text-center text-xs font-semibold text-gray-400">
                      {name}
                    </p>
                    <div className="flex justify-center">
                      <button className=" bg-white   px-4 py-2 text-textCustom  rounded-full shadow-md hover:cursor-pointer">
                        <span className="text-xs font-bold">$600</span>
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
        <button className="border-1 border-gray-300 text-violet-500 px-2 py-1 bg-white rounded-full shadow-md">
          Load More...
        </button>
      </div>
    </>
  );
};

export default ProductList;
