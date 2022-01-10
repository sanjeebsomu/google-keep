import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const Input = () => {
  const takeNote = () => {
    console.log("sanjeeb");
  };
  return (
    <>
    <div className="flex justify-center">
      <div className="flex items-center border-2 h-12 w-96 md:w-1/3 mt-8 rounded-lg shadow shadow-gray-700/70 ">
        <div>
          <input
            onClick={takeNote}
            className="w-full pr-52 py-2 placeholder:text-gray-600 placeholder:font-semibold tracking-wide placeholder:pl-4"
            type="text"
            name="input"
            id="input"
            placeholder="Take a Note..."
            contentEditable='true'
          />
        </div>
        <div className="flex justify-between">
          <div className="px-2">
            <AddPhotoAlternateOutlinedIcon />
          </div>
          <div className="px-2">
            <NoteAddRoundedIcon />
          </div>
          <div className="px-2">
            <EditTwoToneIcon />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Input;
