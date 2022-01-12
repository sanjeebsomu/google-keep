import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { IconButton, Tooltip } from "@mui/material";
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const Input = (props) => {

  return (
    <>
    <div id="min-input" className="flex justify-center">
      <div className="flex justify-between items-center border-2 h-12 w-96 md:w-2/3 xl:w-1/3 mt-8 rounded-lg shadow shadow-gray-700/70 ">
        <div>
          <input
            onFocus={props.takeNote}
            className="w-full pr-20 md:pr-52 py-2 placeholder:text-gray-600 placeholder:font-semibold tracking-wide pl-4 outline-none"
            type="text"
            name="input"
            id="input"
            placeholder="Take a Note..."
          />
        </div>
        <div className="flex justify-between">
          <div className="px-1 lg:px-2">
          <Tooltip title='Add Image'>
            <IconButton><AddPhotoAlternateOutlinedIcon /></IconButton>
          </Tooltip>
            
          </div>
          <div className="px-1 lg:px-2">
          <Tooltip title='Draw'>
            <IconButton><BrushOutlinedIcon/></IconButton>
          </Tooltip>
            
          </div>
          <div className="px-1 lg:px-2">
          <Tooltip title='List'>
            <IconButton><FormatListBulletedOutlinedIcon /></IconButton>
          </Tooltip>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Input;
