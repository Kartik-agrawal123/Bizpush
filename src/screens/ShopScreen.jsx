import React, { useState } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SideBarMenu from "../components/SideBarMenu";
import ProductStatus from "../components/ProductStatus";
import ProductAction from "../components/ProductAction";
import CheckBox from "../components/CheckBox";

const Carts = [
  {
    id: "1",
    image: "/assests/airpods.png",
    name: "Apple AirPods 2",
  },
  {
    id: "2",
    image: "/assests/watch.png",
    name: "Samsung Smart Watch",
  },
  {
    id: "3",
    image: "/assests/pc.png",
    name: "Apple Macbook Pro",
  },
  {
    id: "4",
    image: "/assests/watch.png",
    name: "Samsung Smart Watch",
  },
  {
    id: "5",
    image: "/assests/phone.png",
    name: "Google Pixel 4 XL",
  },
  {
    id: "6",
    image: "/assests/airpods.png",
    name: "Amazon Smart Speaker",
  },
  {
    id: "7",
    image: "/assests/laptop.png",
    name: "Apple Macbook Pro 18",
  },
  {
    id: "8",
    image: "/assests/laptop.png",
    name: "Apple IPad 2",
  },
  {
    id: "9",
    image: "/assests/airpods.png",
    name: "Microsoft Surface Book",
  },
  {
    id: "10",
    image: "/assests/airpods.png",
    name: "Google",
  },
  {
    id: "11",
    image: "/assests/laptop.png",
    name: "Apple Mac Pro",
  },
  {
    id: "12",
    image: "/assests/watch.png",
    name: "Samsung Smart Watch",
  }
];
const ShopScreen = () => {
  const [carts, setCarts] = useState(Carts);

  return (
    <SideBarMenu>
      <section>
        <div className="container px-10 py-8">
          {/* header */}
          <div className="flex justify-between w-full">
            <div className="flex space-x-4 items-center">
              <div className="rounded-lg w-12 h-12 shadow-lg flex justify-center items-center">
                <InventoryIcon />
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
              <button className="flex justify-center space-x-2 items-center rounded-lg shadow-lg bg-violet-700 px-4 py-2 hover:opacity-60">
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
        {/* product actions */}
        <ProductAction />
        <div className="flex justify-between space-x-10 ">
          <div className="container w-full h-auto grid grid-cols-4 gap-3">
            {
              carts.map((elem) => {
                const { id, image, name } = elem;

                return (
                  <>
                    <div className="container w-56 h-64 rounded-2xl bg-gray-50">
                      <div className="relative left-5 top-2"><CheckBox /></div>
                      <div className=" flex items-center justify-center container w-52 h-36 mt-2 ml-2">
                        <img src={image} alt="" className="w-18 h-24" />
                      </div>
                      <div className=" container w-56 h-20 mt-1">
                        <h2 className="ml-8 px-2 py-2">{name}</h2>
                        <button className=" bg-white ml-20 rounded-2xl px-1">$600</button>
                      </div>
                    </div>
                  </>
                )
              })
            }
            <div className="flex w-full justify-center">
            <button className="border-2 border-gray-100 w-24 h-8 bg-white rounded-2xl px-1">Load More</button>
            </div>
          </div>
          
          <div>
            Product Graph
          </div>
        </div>
      </section>
    </SideBarMenu>
  );
};

export default ShopScreen;
