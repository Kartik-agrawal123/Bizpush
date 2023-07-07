import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListIcon from "@mui/icons-material/List";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { color } from "@mui/system";

const ProductAction = () => {
  return (
    <div className="container px-10">
      <div className="flex justify-between w-full">
        <div className="flex space-x-4 items-center">
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon style={{ color: "#8833FF" }} />}
          />
          <span className="hidden lg:block">Select All</span>
        </div>
        <div className="rounded-lg shadow-lg px-4 py-2 flex space-x-4 ">
          {/* filter */}
          <div className="flex items-center space-x-1">
            <FilterListIcon style={{ color: "#C3CAD9" }} />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Filter
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* search */}
          <div className="flex items-center space-x-1">
            <SearchIcon style={{ color: "#C3CAD9" }} />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Search
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* edit */}
          <div className="flex items-center space-x-1">
            <EditIcon style={{ color: "#C3CAD9" }} />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Edit
            </span>
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          {/* delete */}
          <div className="flex items-center space-x-1">
            <DeleteIcon style={{ color: "#C3CAD9" }} />
            <span className="text-lg hidden lg:block font-medium text-gray-400">
              Delete
            </span>
          </div>
        </div>
        <div className="rounded-lg shadow-lg px-4 py-2 flex space-x-4 ">
          <div className="flex items-center space-x-1">
            <ListIcon style={{ color: "#C3CAD9" }} />
          </div>
          <div className="border-r-2 border-gray-400 ml-2"></div>
          <div className="flex items-center space-x-1">
            <WidgetsIcon style={{ color: "#C3CAD9" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAction;
