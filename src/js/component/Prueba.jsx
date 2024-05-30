import React, {useState} from "react";

const Prueba = () => {
    const [todo, setTodo] = useState ([]);
    const [tareasValue, setTareasValue] = useState ("");

const accionCambio = (event) => {
    alert("probar")
}


    return (
        
        <div className="container">
            <h1>Todos</h1>
            <ul>
                <li>
                    <input
                    type="text" 
                    onChange={(accionCambio)=>setTareasValue(target.value)}
                    value={tareasValue}
                    placeholder="What do I need to do?"></input>
                    
                </li>
                <li>how is?</li>
                <li>how is?</li>
                <li>how is?</li>
            </ul>
        </div>
    );
};
export default Prueba;