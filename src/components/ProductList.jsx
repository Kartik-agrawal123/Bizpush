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
                  className="w-full relative rounded-md bg-cardColor px-4 py-4 border-1"
                >
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
                  <div className="flex items-center justify-center  w-full h-36 ">
                    <img src={image} alt="" className="w-18 h-24" />
                  </div>
                  <div className="flex flex-col space-y-6 justify-center bg-cardColor h-20">
                    <p className="text-center text-xs font-semibold text-gray-400">
                      {name}
                    </p>
                    <div className="flex justify-center">
                      <button className=" bg-white   px-5 py-1 text-textCustom  rounded-full shadow-sm hover:cursor-pointer">
                        <span className="text-ts font-bold">$600</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mx-auto mb-12 w-40">
        <button className="border-1 border-gray-300 text-myColor text-base font-semibold px-5 py-1 bg-white rounded-full shadow-sm">
          Load More
        </button>
      </div>
    </>
  );
};

export default ProductList;
