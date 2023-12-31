import React from "react";

function ToWatch(drama){
    return <li onClick={()=>{drama.act(drama.id)}} >{drama.name}</li>;
}
export default ToWatch;