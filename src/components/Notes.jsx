import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Notes = ({notes, setNotes}) => {

  const handleRemove = (id) => {
    const updatedNote = notes.filter((item) => item.id !== id); //Our notes/item contains 2 values id and name, so for those items doesn't matches with the given id, store them and which one matches filter that out.
    
    setNotes(updatedNote);
  }
  return (
    <>
          <div className="flex justify-center mt-20">
            <div className="grid w-4/5 gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notes.map((noteGrid) => {
                return (
                    <div key={noteGrid.id} className="border-2 rounded-lg hover:shadow-md">
                    <div className="block break-words text-md tracking-wide font-medium pt-4 pl-4 pr-4">{noteGrid.name.title}</div>
                    <div className="block break-words text-sm pt-1 pl-4 pb-4 pr-4">{noteGrid.name.description}</div>
                    <div className="opacity-70 p-2 flex justify-end">
                      <button onClick={()=>handleRemove(noteGrid.id)}> 
                        <DeleteOutlineOutlinedIcon fontSize="small"/>
                      </button>
                    </div>
                </div>
                );
                })}
            </div>
          </div>
    </>
  );
};

export default Notes;
