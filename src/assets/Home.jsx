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
  function handleProject(){
    handleToggel();
  }
  
  return (
    <>

      <div className="flex">
        <Sidebar tasks={task} tasking={handleTask} handleProject={handleProject} fname={setNaming} />

        {task.length==0 ? (
          <NoProject disp={isProject} tasks={handleTask} headp={headp} namig={naming} />
        ) : (
          <ProjectInfo disp={setHandler} tasks={task} Key={naming} headp={headp} />
        )}
        
      </div>

    </>

  );
}

