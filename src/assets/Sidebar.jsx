import NoProject from "./NoProject";
import CustomModal from "./CustomModal";
import { useState } from "react";
export default function Sidebar({ tasks, tasking ,handleProject,fname }) {
  const [isOpen, setIsOpen] = useState(false);

  function modalHandler() {
    console.log("yes");
    setIsOpen((prevOpn) => !prevOpn);
  }
  function setupHandler(obj1){
    fname(obj1);
    handleProject();
  }
  return (
    <div className="bg-slate-900 pt-16 rounded-r-3xl text-center h-screen w-96">
      <h2 className="text-white text-4xl font-semibold mb-4">Your Projects</h2>
      <button
        className="bg-slate-500 opacity-50 p-4 rounded-lg hover:cursor-pointer"
        onClick={modalHandler}
      >
        + Add Your Project
      </button>
      <CustomModal modalOpen={isOpen} funcHandle={modalHandler} tasking={tasking}/>
      <ul className="text-white">
        {tasks.map((obj, index) => (
          <li key={index} className="mt-4 bg-slate-600 rounded-2xl">
            <button className="p-4 cursor-pointer" onClick={()=>setupHandler(obj.name)} >{obj.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
