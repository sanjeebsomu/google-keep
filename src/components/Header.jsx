import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import BallotIcon from "@mui/icons-material/Ballot";
import { Tooltip } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="p-1 flex justify-between bg-gray-50 shadow-md text-gray-600 font-sans">
        <div className="flex justify-start items-center">
          <div className="p-4 ml-1">
            <Tooltip title="Main Menu">
              <button>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="h-6 fill-gray-700"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
              </button>
            </Tooltip>
          </div>
          <Tooltip title="Keep">
            <button>
              <img
                className="h-10"
                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                alt="google keep icon"
              />
            </button>
          </Tooltip>
          <Tooltip title="Keep">
              <button>
              <h1 className="text-lg ml-1 pl-1 font-body">Keep</h1>
              </button>
            </Tooltip>
          
        </div>
        <div className="flex justify-between items-center">
          <div className="px-2 sm:px-4">
            <Tooltip title="Search">
              <button>
                <SearchIcon />
              </button>
            </Tooltip>
          </div>
          <div className="px-2 sm:px-4">
            <Tooltip title="Refresh">
              <button>
                <RefreshIcon />
              </button>
            </Tooltip>
          </div>
          <div className="px-2 sm:px-4">
            <Tooltip title="Setting">
              <button>
                <SettingsOutlinedIcon />
              </button>
            </Tooltip>
          </div>
          <div className="px-2 sm:px-4">
            <Tooltip title="List View">
              <button>
                <BallotIcon />
              </button>
            </Tooltip>
          </div>
          <div className="px-2 sm:px-4">
            <img
              className="rounded-full"
              src="https://lh3.googleusercontent.com/ogw/ADea4I7iAU1xMMQGvquoTT35uRTSPC6b9wB046hi1qJ4D6Q=s32-c-mo"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
