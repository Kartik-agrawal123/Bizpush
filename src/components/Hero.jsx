import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="herosection">
      <div className="container  max-w-6xl mx-auto px-10 py-8 text-black h-auto">
        <div className=" flex flex-col space-y-10 items-center justify-center md:flex-row md:space-x-10 md:space-y-0">
          <div className="lg:w-2/4 w-full  h-fit flex flex-col items-start justify-start ">
            <div className="lg:text-5xl text-3xl  text-indigo-400 font-extrabold w-2/4 lg:w-4/5">
              PURCHASE YOUR <u>SHOES</u> NOW.
            </div>

            <div className="mt-12 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dalar
              morbi velt turpis et dolor sit morbi odio id. Aliquam ultricies
              tortor ac.
            </div>

            <div className="w-full h-24">
              <div className="relative">
                <div
                  className="bg-white md:w-36 w-full h-12 flex hover:cursor-pointer items-center justify-center rounded-lg drop-shadow-xl relative z-10"
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Shop Now
                </div>
                <div className="w-fit h-fit mt-8 md:justify-center md:hidden flex flex-col justify-between items-center p-1 ">
                  <div className="flex flex-row items-center h-5">
                    <div className="font-semibold text-lg h-fit">4.3</div>
                    <div className="flex flex-row w-24 justify-between ml-1 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#E142AA"
                        fill="red"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs">(11.6k Total Reviews)</div>
                </div>

                <div className="w-64 hidden md:block  absolute z-20 -top-2 left-24">
                  <img src="assests/arrow.png" alt="" srcset="" />
                </div>
                <div className="w-fit h-fit absolute top-20 left-80 ml-4 hidden md:flex flex-col justify-between items-center p-1 ">
                  <div className="flex flex-row items-center h-5">
                    <div className="font-semibold text-lg h-fit">4.3</div>
                    <div className="flex flex-row w-24 justify-between ml-1 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#E142AA"
                        fill="red"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler text-pink-600 icon-tabler-star-filled"
                        width="14"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          stroke-width="0"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs">(11.6k Total Reviews)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between md:w-2/4 w-full h-auto">
            <div className="drop-shadow-lg z-0 w-fit mb-5">
              <img src="assests/shoe1.png" alt="shoes image" srcset="" />
            </div>
            <div className="z-10 right-24 h-fit w-fit rounded-lg grad p-1 ml-auto">
              <div className="bg-white h-fit w-fit p-3 justify-center items-center rounded-lg">
                <div className="font-bold text-base ">GET UPTO 30% OFF</div>
                <div className="text-xs pt-2">
                  You can get 30% off this product
                  <br />
                  if you are buying now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
