import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import userImg from "../assests/user.png";
import DropdownMenuList from "./DropdownMenuList";

// const drawerWidth = 240;
const drawerWidth = 80;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideBarMenu(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        style={{
          backgroundColor: "white",
          padding: "10px 8px",
          boxShadow: "none",
          borderBottom: "0.25rem solid #F3F4F6",
        }}
      >
        <Toolbar>
          <IconButton
            style={{ color: "black" }}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-full shadow-md">
              <MenuIcon />
            </div>
          </IconButton>
          <h2 className="text-myColor text-md md:text-lg font-semibold p-1">
            Constructor
          </h2>
          <div className="hidden md:flex flex-row justify-between w-full ">
            <div className="md:flex hidden lg:space-x-4 space-x-2 items-center ml-4 lg:ml-20">
              <a
                href="/"
                className="text-myDash font-semibold hover:text-gray-400 text-xs"
              >
                Dashboard
              </a>
              <a
                href="/"
                className=" text-myDash font-semibold hover:text-gray-400 text-xs"
              >
                About Us
              </a>
              <a
                href="/"
                className=" text-myDash font-semibold hover:text-gray-400 text-xs"
              >
                News
              </a>
              <a
                href="/"
                className=" text-myDash font-semibold hover:text-gray-400 text-xs"
              >
                User Policy
              </a>
              <a
                href="/"
                className=" text-myDash font-semibold hover:text-gray-400 text-xs"
              >
                Contact
              </a>
            </div>
            {/* <div className="flex ml-20 lg:hidden justify-center items-center">
              <DropdownMenuList />
            </div> */}

            <div className="flex flex-row space-x-2 lg:space-x-4">
              {/* search box */}
              <div className="rounded-full lg:flex shadow-md hidden items-center px-4 py-2 border-1 border-gray-100 w-fit">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Search Transactions and Documents"
                  className="outline-none text-black font-medium my-input"
                />
              </div>
              {/* search icon */}
              <div className="rounded-full lg:hidden w-10 h-10 shadow-lg md:flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </div>
              {/* user icon */}
              <div className="flex items-center space-x-2">
                <img src={userImg} alt="user" className="w-10 h-10" />
                <span className="text-sm font-medium text-myColor">
                  Clayton Santos
                </span>
              </div>
              {/* bell icon */}

              <div className="rounded-full w-10 h-10 shadow-md flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <div className="flex justify-end w-full md:hidden space-x-4">
            <div className="flex items-center space-x-2">
              <img src={userImg} alt="user" className="w-10 h-10" />
              <span className="text-sm text-black">User</span>
            </div>
            <div className="flex lg:hidden justify-center items-center">
              <DropdownMenuList />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   
                    {index % 2 === 0 ? <ExploreOutlinedIcon /> : <StarIcon />}
                   
                   
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        <div className="max-h-screen flex flex-col justify-center">
          <div className="mt-4 ml-4">
            <div className="w-10 h-10 mt-1 rounded-3xl  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <ExploreOutlinedIcon />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <StarBorderOutlinedIcon />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <MapsUgcOutlinedIcon />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <TrendingUpTwoToneIcon />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <PublicTwoToneIcon />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <ApartmentOutlinedIcon />
            </div>
          </div>

          <div className="mt-40 ml-4">
            <div className="w-10 h-10 mt-1 rounded-3xl overflow-hidden  border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <img src="assests/user-6.jpg" alt="" />
            </div>
            <div className="w-10 h-10 mt-4 rounded-3xl overflow-hidden border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <img src="assests/user-8.jpg" alt="" />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl overflow-hidden border-gray-400 shadow-xl shadow-gray-200 flex items-center justify-center bg-white">
              <img src="assests/user-9.jpg" alt="" />
            </div>
            <div className="w-10 h-10 mt-1 rounded-3xl border-gray-400 shadow-xl shadow-gray-300 flex items-center justify-center bg-white">
              <img src="assests/men.png" alt="" />
            </div>
          </div>
        </div>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Box>
  );
}
