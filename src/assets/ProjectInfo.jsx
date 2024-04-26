import Input from "./Input";

export default function ProjectInfo({ tasks, Key ,headp }) {
    console.log(Key);
    return (

      <div className="flex justify-center items-center bg-gray-100 w-3/4">
        {headp && <h2 className="text-4xl mb-4 mt-8 text-start">Hello {headp && namig} </h2>}
    <ul className="text-center w-1/2">
        {tasks.filter(obj => obj.name === Key).map((obj, index) => (
            
            <li key={index} className="mb-8 pb-20 pt-5 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-2">Name : {obj.name}</h1>
                <h2 className="text-sm text-gray-600 font-semibold mb-2">Deadline : {obj.date}</h2>
                <h2 className=" text-lg font-semibold mb-2">Description of the Project : </h2> 
                <p className="text-base text-gray-800">{obj.desc}</p>
            </li>
        ))}
    </ul>
</div>

  
    );
}
