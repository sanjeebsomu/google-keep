import React from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';

const MaxInput = () => {

    return (
        <>
            <div className="flex justify-center">
            <div className="flex flex-col items-center border-2 h-auto w-96 md:w-2/3 xl:w-1/3 mt-8 rounded-lg shadow shadow-gray-700/70 ">
                <div>
                    <input
                        // onClick={max}
                        className="w-full pr-52 py-2 placeholder:text-gray-600 text-lg font-semibold tracking-wide pl-4 outline-none"
                        type="text"
                        name="input"
                        id="input"
                        placeholder="Title"
                    />
                    <input
                        // onClick={max}
                        className="w-full pr-52 py-4 placeholder:text-gray-600 text-sm font-medium tracking-wide pl-4 outline-none"
                        type="text"
                        name="input"
                        id="input"
                        placeholder="Take a Note..."
                    />
                    <div className='flex py-2 justify-evenly'>
                        <div className='opacity-70'>
                            <AddAlertOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70'>
                            <PersonAddAltOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70 '>
                            <ColorLensOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70'>
                            <ImageOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70'>
                            <ArchiveOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70'>
                            <MoreVertOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-30'>
                            <UndoOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-30'>
                            <RedoOutlinedIcon fontSize='small'/>
                        </div>
                        <div className='opacity-70'>
                            <AddBoxIcon fontSize='small'/>
                        </div>
                        <div className='font-medium'>
                            Close
                        </div>
                  
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default MaxInput
