import React from "react";

const Notes = ({notes}) => {
  return (
    <>
          <div className="flex justify-center mt-20">
            <div className="grid w-4/5 gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notes.map((noteGrid) => {
                return (
                    <div key={noteGrid.id} className="border-2 rounded-lg hover:shadow-md">
                    <div className="block break-words text-md tracking-wide font-medium pt-4 pl-4 pr-4">{noteGrid.name.title}</div>
                    <div className="block break-words text-sm pt-1 pl-4 pb-4 pr-4">{noteGrid.name.description}</div>
                </div>
                );
                })}
            </div>
          </div>
    </>
  );
};

export default Notes;
