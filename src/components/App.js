import React,{useState} from "react";
import ToWatch from "./ToWatchItem";
import InputArea from "./InputArea";
function App() {
  const [kdrama,setKdrama]=useState(["My Demon"]);
  const [drama,setDrama]=useState("");
  function inputed(e){
    setDrama(e.target.value);
  }
  function clicked(){
      setKdrama((prev)=>[
        ...prev,
        drama
      ]);
      setDrama("");
  }
  function del(ind){
    setKdrama((prev)=>{
      return prev.filter((name,index)=>{
        return ind!==index;
      });
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To_Watch List</h1>
      </div>
      <InputArea item={drama} inputed={inputed} added={clicked}></InputArea>
      <div>
        <ul>
          {kdrama.map((dr,index)=>(<ToWatch name={dr} key={index} id={index} act={del} />))}
        </ul>
      </div>
    </div>
  );
}

export default App;
