import React, { useState } from "react";

const Tareas = () => {
    const [todos, setTodos] = useState([]);
    const [tareasValue, setTareasValue] = useState("");

   
    
    const agregarNuevaAlerta = () => {
        setTodos(todos.concat([tareasValue]))
        setTareasValue("")
        alert ("tarea guardada")
        
    }
    const handleDelete = (index) => {
        const newArray = [...todos]
        newArray.splice(index,1)
        setTodos(newArray)
        }
        
        return (

        <div className="container">
            <h1>Todos</h1>
            
                <ul>
                    <li>
                        <input
                            type="text"
                            onChange={(e) => setTareasValue(e.target.value)}
                            value={tareasValue} 
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    agregarNuevaAlerta()
                                }
                            }}
                            placeholder="What do I need to do?"></input>
                    </li>
                    {
                        todos.map((todo, index) => {
                            return (
                                <li key={index}>{todo}
                                 
                                    <i onClick={() => handleDelete()} className="fa-solid fa-x mt-2 me-1"></i>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            
            <button onClick={agregarNuevaAlerta}>click me </button>
        </div>
    );
};

export default Tareas;