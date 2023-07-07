import React, { useState } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SideBarMenu from "../components/SideBarMenu";
import ProductStatus from "../components/ProductStatus";
import ProductAction from "../components/ProductAction";
import CheckBox from "../components/CheckBox";
import ProductGraph from "../components/ProductGraph";
import ProductList from "../components/ProductList";

const ShopScreen = () => {
  return (
    <>
      <SideBarMenu>
        <section className="lg:flex block lg:space-x-8">
          <div className="2xl:w-3/4 p-8">
            <div className="w-full rounded-3xl shadow-sm border-2 border-gray-100 pb-2">
              <div className="container px-10 py-8">
                {/* header */}
                <div className="flex justify-between w-full">
                  <div className="flex space-x-4 items-center">
                    <div className="rounded-lg w-12 h-12 shadow-lg flex justify-center items-center">
                      <InventoryIcon style={{ color: "#C3CAD9" }} />
                    </div>
                    <span className="text-lg text-gray-400 font-medium">
                      Products
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <ProductStatus status="radio" />
                  </div>
                  <div className="lg:hidden block">
                    <ProductStatus status="select" />
                  </div>
                  <div className="flex items-center">
                    <button className=" flex justify-center space-x-2 items-center rounded-full shadow-lg bg-violet-700 px-4 py-2 hover:opacity-60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-square-rounded-plus"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#9e9e9e"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                      </svg>
                      <span className="text-sm lg:hidden md:block  text-white font-medium">
                        Add
                      </span>
                      <span className="text-sm hidden lg:block text-white font-medium">
                        Add Products
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-500 py-2"></div>
              <ProductAction />
              <ProductList />
            </div>
          </div>
          <div className="w-1/4 hidden 2xl:block h-screen">
            <ProductGraph />
          </div>
        </section>
      </SideBarMenu>
    </>
  );
};

export default ShopScreen;
