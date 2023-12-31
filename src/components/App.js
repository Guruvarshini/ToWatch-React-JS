import React,{useState} from "react";

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
  return (
    <div className="container">
      <div className="heading">
        <h1>To_Watch List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={inputed} name="drma" value={drama}/>
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {kdrama.map((dr)=>(<li>{dr}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
