import Home from "./assets/Home";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {user,loginWithRedirect, isAuthenticated, logout}=useAuth0();
  //console.log(user);  
  return (
    <>
    {isAuthenticated ? 
      <button
      onClick={(e)=> logout()}
      className="fixed top-0 right-0 m-4 p-2 w-40 h-20 bg-slate-900 font-bold text-white rounded shadow-md"
      >
      Logout
      </button>
    :
      <button
      onClick={(e)=>loginWithRedirect()}
      className="fixed top-0 right-0 m-4 p-2 w-40 h-20 bg-slate-900 font-bold text-white rounded shadow-md"
      >
      Login
      </button>
    
    }
      {/* console.log(user.name); */}
      <Home headp={isAuthenticated} naming={isAuthenticated ? user.name : ""} />

    </>

  );
}

export default App;
