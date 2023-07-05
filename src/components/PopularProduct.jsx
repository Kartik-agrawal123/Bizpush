import React, { useState } from "react";

const Content = [
  {
    id: 1,
    image: "/assests/shoe2.png",
    name: "Nike Running Shoe",
    price: "$100",
    lineThrough: "500 Sold Out"
  },
  {
    id: 2,
    image: "/assests/shoe3.png",
    name: "Nike Shoe Airmax",
    price: "$115",
    lineThrough: "50 Sold Out"
  },
  {
    id: 3,
    image: "/assests/shoe2.png",
    name: "Jordan Sneaker",
    price: "$50",
    lineThrough: "1500 Sold Out"
  },
  {
    id: 4,
    image: "/assests/shoe3.png",
    name: "Nike Running Shoe 2",
    price: "$200",
    lineThrough: "210 Sold Out"
  }
];

const PopularProduct = () => {
  const [items, setItems] = useState(Content);
  return (
    <section id="popularProduct">
      

      <div className="container mt-10 w-auto mx-auto px-10 py-8 h-auto  ">
        <h1 className="text-3xl ml-10 font-sans font-black md:uppercase text-blue-400 ">Popular Products</h1>
        <div className=" flex items-center justify-between container mt-6 max-w-10xl px-4 h-80  ">
          {
            items.map((elem) => {
              const { id, image, name, price, lineThrough } = elem;

              return (
                <>
                  <div className=" container min-w-min h-66 ml-5 font-bold ">
                    {/* images */}
                    <div className="flex border-1 w-60 bg-white h-44  rounded-2xl shadow-pink-300 shadow-inner">
                      <img src={image} alt="" className="w-64 h-40  rounded-2xl " />
                      <div className="w-8 h-8 mt-2 mr-3 rounded-3xl border-2  bg-gradient-to-b from-pink-600 to-emerald-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart mx-1 my-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                      </div>
                    </div>
                    {/* images contents */}
                    <div className="container flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler text-pink-600 ml-2 mt-1 icon-tabler-star-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" />
                      </svg>
                      <p className="ml-2 mt-2 text-xs">(1K Reviews)</p>
                    </div>
                    <h2 className="ml-3 mt-2 font-bold text-sm">{name}</h2>
                    <div className="flex">
                      <h2 className="ml-4 mt-1 font-bold text-sm">{price}</h2>
                      <p className="line-through ml-4 mt-1 text-sm">{lineThrough}</p>
                      <button className="ml-6 bg-white border-6 rounded-md cursor-pointer text-md px-1 py-0.5 border-neutral-200">Buy Now</button>
                    </div>
                  </div>

                </>
              )

            })
          }

        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
