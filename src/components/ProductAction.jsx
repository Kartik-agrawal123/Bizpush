import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import WidgetsIcon from "@mui/icons-material/Widgets";

const ProductAction = () => {
  return (
    <div className="container px-10">
      <div className="flex justify-between w-full">
        <div className="flex space-x-4 items-center">
          <Checkbox />
          <span className="hidden lg:block">Select All</span>
        </div>
        <div className="rounded-lg shadow-lg px-4 py-2 flex space-x-4 ">
          {/* filter */}
          <div className="flex items-center space-x-1">
            <FilterListIcon />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Filter
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* search */}
          <div className="flex items-center space-x-1">
            <SearchIcon />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Search
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* edit */}
          <div className="flex items-center space-x-1">
            <EditIcon />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Edit
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* delete */}
          <div className="flex items-center space-x-1">
            <DeleteIcon />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Delete
            </span>
          </div>
        </div>
        <div className="rounded-lg shadow-lg px-4 py-2 flex space-x-4 ">
          <div className="flex items-center space-x-1">
            <ListIcon />
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          <div className="flex items-center space-x-1">
            <WidgetsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAction;
