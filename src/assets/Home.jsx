import Sidebar from "./Sidebar";
import ProjectInfo from "./ProjectInfo";
import NoProject from "./NoProject";
import { useState } from "react";

export default function Home({headp,namig}) {
  const [isProject, setProject] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask]= useState([]);
  const [naming,setNaming] = useState("");
  function handleTask(newObj){
    setTask([...task,...newObj]);
    console.log(task);
    setNaming(task[0].name);
  }
  function setHandler() {
    setProject((prevIsProject) => !prevIsProject);
  }
  function handleToggel(){
    setProject(prevProject=>!prevProject);
  }
  function handleProject(name){
    setNaming(name);
    handleToggel();
  }
  
  return (
    <>

      <div className="flex">
        <Sidebar tasks={task} tasking={handleTask} handleProject={handleProject} />

        {task.length==0 ? (
          <NoProject disp={isProject} tasks={handleTask} headp={headp} namig={namig} />
        ) : (
          <ProjectInfo disp={setHandler} tasks={task} Key={namig} headp={headp} />
        )}
        
      </div>

    </>

  );
}

