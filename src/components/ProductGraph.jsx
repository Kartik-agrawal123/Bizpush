import React from "react";

const ProductGraph = () => {
  return (
    <div className=" w-96 h-fit px-8 py-10 flex flex-col justify-between border-4 border-gray-100">
      <div className="mb-6 bg-gray-100 w-full h-56 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-5 bg-white rounded-t-3xl rounde w-full h-40 mb-1">
          <div className="py-4 w-32 flex flex-col justify-between">
            <div className="text-sm font-medium text-gray-700">Total Sales</div>
            <div className="text-3xl font-semibold text-gray-700">$281.90</div>
          </div>
          <div className="w-32 flex items-center">
            <img src="assests/graph3.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-full h-16 px-5 items-center flex flex-row justify-between">
          <div className="text-sm font-medium text-gray-700">
            & total orders
          </div>
          <div className="text-sm font-medium text-gray-700">View report</div>
        </div>
      </div>

      <div className="mb-6 bg-gray-100 w-full h-56 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-5 bg-white rounded-t-3xl rounde w-full h-40 mb-1">
          <div className="py-4 w-32 flex flex-col justify-between">
            <div className="text-sm font-medium text-gray-700">
              Total Sessions
            </div>
            <div className="text-3xl font-semibold text-gray-700">456</div>
          </div>
          <div className="w-32 flex items-center">
            <img src="assests/graph1.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-full h-16 px-5 items-center flex flex-row justify-between">
          <div className="text-sm font-extrabold flex items-center bg-purple-200 py-1.5 px-4 text-purple-700 rounded-md">
            Live
          </div>
          <div className="text-sm font-medium text-gray-700">4 visitors</div>
          <div className="text-sm font-medium text-gray-700">See Live View</div>
        </div>
      </div>

      <div className="mb-6 bg-gray-100 w-full h-56 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-5 bg-white rounded-t-3xl rounde w-full h-40 mb-1">
          <div className="py-4 w-32 flex flex-col justify-between">
            <div className="text-sm font-medium text-gray-700">
              Customer care
            </div>
            <div className="text-3xl font-semibold text-gray-700">5.43%</div>
          </div>
          <div className="w-32 flex items-center">
            <img src="assests/graph2.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-full h-16 px-5 items-center flex flex-row justify-between">
          <div className="h-8 w-24 flex flex-row justify-between items-center">
            <div className="bg-purple-400 rounded-full w-3 h-3"></div>
            <div className="text-sm font-medium  text-gray-700">First Time</div>
          </div>
          <div className="h-8 w-24 flex flex-row justify-between items-center">
            <div className="bg-orange-300 rounded-full w-3 h-3"></div>
            <div className="text-sm font-medium  text-gray-700">Returning</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full h-fit flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-col justify-between p-5 bg-white rounded-3xl rounde w-full h-full">
          <div className="w-full h-10 mb-3 flex flex-row items-center justify-between">
            <div className="text-sm font-bold text-gray-700">Actions</div>
            <div className="text-sm font-bold text-purple-700 ml-5">Orders</div>
            <div className="ml-auto w-1">
              <img src="assests/3dots.png" alt="3 Dots" srcset="" />
            </div>
          </div>
          <div className="w-full h-fit p-4 flex flex-col justify-between">
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  11:23
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Mobile phone*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  15:21
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Apple IPhone 9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  18:54
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Apple IPad Pro 12.9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  08:04
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Apple IPad Pro 12.9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  09:49
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Smart Watches*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-xs py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  10:45
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-xs font-bold text-gray-600">
                  *Smart Watches*
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGraph;
