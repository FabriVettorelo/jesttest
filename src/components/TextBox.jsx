import { useState } from "react";

const TextBox = () =>{

    const [bgColor, setBgColor] = useState('cyan');



return(
    <div>
        <article title="párrafo principal" style={{backgroundColor:bgColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magni reiciendis harum incidunt quidem repudiandae. Fugiat in qui hic cumque minus. Vero facere ut hic, provident fugiat dignissimos repellendus ab!</article>

        <button onClick={()=>setBgColor(bgColor==="cyan"?"blue":"cyan")}>pulsa para modificar</button>
    </div>
)
}

export default TextBox;