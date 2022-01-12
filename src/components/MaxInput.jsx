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
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const MaxInput = (props) => {

    return (
        <>
            <div className="flex justify-center">
            <div className="flex flex-col items-center border-2 h-auto w-96 md:w-2/3 xl:w-1/3 mt-8 rounded-lg shadow shadow-gray-700/70 ">
                <div>
                    <textarea
                        style={{resize: 'none'}}
                        onChange={props.handleInput}
                        className="w-full pr-52 pt-2 placeholder:text-gray-600 text-lg font-semibold tracking-wide pl-4 outline-none"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={props.newNote.title}
                    />
                    <textarea
                        style={{resize: 'none'}}
                        onChange={props.handleInput}
                        className="w-full pr-52 placeholder:text-gray-600 text-sm font-medium tracking-wide pl-4 outline-none"
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Take a Note..."
                        value={props.newNote.description}
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
                        {
                            props.toggleAdd?  <div className='opacity-70'>
                                        <button onClick={props.addNote}><AddBoxIcon fontSize='small'/></button>
                                        </div>
                                        : 
                                        <button className="px-2" onClick={props.addNote}>
                                        <EditOutlinedIcon />
                                        </button>
                        }
                        
                        <div onClick={props.minInput} className='font-medium'>
                            <button>Close</button>
                        </div>
                  
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default MaxInput
