import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const ProductGraph = () => {
  const [value, setValue] = React.useState("actions");

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="px-5 py-7 flex flex-col justify-between items-center border-l-4 border-gray-100">
      <div className="mb-6 bg-gray-100 w-fit h-44 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-4 bg-white rounded-t-3xl rounded w-64 h-32 mb-1">
          <div className="py-2 w-24  flex flex-col justify-between">
            <div className="text-xs font-medium text-gray-700">Total Sales</div>
            <div className="text-2xl font-semibold text-gray-700">$281.90</div>
          </div>
          <div className="w-28 flex items-center">
            <img src="assests/graph3.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-64 h-12 px-5 items-center flex flex-row justify-between">
          <div className="text-xs font-medium text-gray-700">
            & total orders
          </div>
          <div className="text-xs font-medium text-gray-700">View report</div>
        </div>
      </div>

      <div className="mb-6 bg-gray-100 w-fit h-44 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-5 bg-white rounded-t-3xl w-64 h-32 mb-1">
          <div className="py-2 w-24 flex flex-col justify-between">
            <div className="text-xs font-medium text-gray-700">
              Total Sessions
            </div>
            <div className="text-2xl font-semibold text-gray-700">456</div>
          </div>
          <div className="w-28 flex items-center">
            <img src="assests/graph1.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-64 h-12 px-5 items-center flex flex-row justify-between">
          <div className="text-xs font-extrabold flex items-center bg-purple-200 py-1.5 px-4 text-purple-700 rounded-md">
            Live
          </div>
          <div className="text-xs font-medium text-gray-700">4 visitors</div>
          <div className="text-xs font-medium text-gray-700">See Live View</div>
        </div>
      </div>

      <div className="mb-6 bg-gray-100 w-fit h-44 flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-row justify-between p-5 bg-white rounded-t-3xl w-64 h-32 mb-1">
          <div className="py-2 w-24 flex flex-col justify-between">
            <div className="text-xs font-medium text-gray-700">
              Customer care
            </div>
            <div className="text-2xl font-semibold text-gray-700">5.43%</div>
          </div>
          <div className="w-28 flex items-center">
            <img src="assests/graph2.png" alt="graph" />
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-64 h-12 px-5 items-center flex flex-row justify-between">
          <div className="h-8 w-24 flex flex-row justify-between items-center">
            <div className="bg-purple-400 rounded-full w-2 h-2"></div>
            <div className="text-xs font-medium  text-gray-700 pr-2">
              First Time
            </div>
          </div>
          <div className="h-8 w-24 flex flex-row justify-between items-center">
            <div className="bg-orange-300 rounded-full w-2 h-2"></div>
            <div className="text-xs font-medium  text-gray-700 pr-2">
              Returning
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-fit h-fit flex flex-col justify-between p-1 rounded-3xl">
        <div className="flex flex-col justify-between px-5 pt-5 bg-white rounded-3xl  w-64 h-full">
          <div className="w-full h-10 mb-3 flex flex-row items-center justify-between">
            <div className="w-fit flex flex-row items-center justify-between">
              <Box sx={{ width: "100%" }}>
                <Tabs
                  style={{
                    fontWeight: "bold",
                  }}
                  value={value}
                  onChange={handleChanges}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example">
                  <Tab
                    style={{
                      textColor: "myColor",
                      fontWeight: "bolder",
                      textTransform: "capitalize",
                      paddingBottom: "2rem",
                    }}
                    value="actions"
                    label="Actions"
                  />
                  <Tab
                    style={{
                      fontWeight: "bolder",
                      textTransform: "capitalize",
                      paddingBottom: "2rem",
                    }}
                    value="orders"
                    label="Orders"
                  />
                </Tabs>
              </Box>
            </div>
            <div className="ml-auto w-1">
              <img src="assests/3dots.png" alt="3 Dots" srcset="" />
            </div>
          </div>
          <div className="w-full h-fit p-2 flex flex-col justify-between">
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  11:23
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-ts font-bold text-gray-600">
                  *Mobile phone*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  15:21
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-ts font-bold text-gray-600">
                  *Apple IPhone 9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  18:54
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-ts font-bold text-gray-600">
                  *Apple IPad Pro 12.9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  08:04
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Product Added
                </div>
                <div className="text-ts font-bold text-gray-600">
                  *Apple IPad Pro 12.9*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  09:49
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-ts font-bold text-gray-600">
                  *Smart Watches*
                </div>
              </div>
            </div>
            <div className="h-fit flex flex-row py-4">
              <div className=" bg-gray-100 h-fit w-fit mr-5 rounded-full p-1">
                <div className="font-semibold text-ss py-2 px-4 text-gray-500 bg-white h-full w-full rounded-full flex items-center justify-center">
                  10:45
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-ts font-bold text-gray-600">
                  New Category Added
                </div>
                <div className="text-ts font-bold text-gray-600">
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
