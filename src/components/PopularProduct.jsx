import React from "react";
import { Content } from "../Constraint";

const PopularProduct = () => {
  return (
    <section id="popularProduct">
      <div className="container mt-10 w-auto mx-auto px-10 py-8 h-auto  ">
        <h1 className="text-3xl  font-sans font-black md:uppercase text-blue-400 ">
          Popular Products
        </h1>
        <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-center  mt-6">
          {Content.map((elem) => {
            const { id, image, name, price, lineThrough } = elem;

            return (
              <>
                <div className="font-bold rounded-2xl w-74 ">
                  {/* images */}
                  <div className=" flex items-center relative justify-center border-2 w-68 h-40 ml-0  bg-slate-50 shadow-pink-300 shadow-inner border-s-pink-400 border-t-pink-400 border-e-cyan-300 border-b-cyan-300 rounded-2xl">
                    <img src={image} alt="" className="w-60 h-40" />
                    <div className=" absolute top-1 right-0 flex items-center justify-center w-10 h-8 border-2 rounded-2xl mr-2 mb-28 bg-gradient-to-b from-textColorRed to-cyan-300  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-heart"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </div>
                  </div>

                  <div className="container w-66 h-20">
                    {/* images contents */}
                    <div className="container flex items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler text-pink-600 ml-2 mt-2 icon-tabler-star-filled"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="ml-2 mt-2 text-xs">(1K Reviews)</p>
                    </div>

                    <h2 className="ml-3 mt-1 font-bold text-sm">{name}</h2>
                    <div className="flex items-center justify-around">
                      <h2 className=" font-bold text-sm">{price}</h2>
                      <p className="line-through text-sm">{lineThrough}</p>
                      <button className=" bg-white border-6 rounded-md cursor-pointer text-md px-4 py-2 border-neutral-200">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
