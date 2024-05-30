import React, { useState } from "react";

const Tareas = () => {
    const [todos, setTodos] = useState([]);
    const [tareasValue, setTareasValue] = useState("");

    const CreateAlert = () => {
        alert('siguiente tarea')
    }
    const agregarNuevaAlerta = () => {
        setTodos(todos.concat([tareasValue]))
        setTareasValue("")
        alert ("tarea guardada")
        
    }
    const handleDelete = () => {
        setTareasValue((prevState) =>{ 
            tareasValue.filter(todo => todo != item)
        })
        
    }

    console.log(todos);
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
                                    
                                    <i onClick={() => handleDelete(index)} className="fa-solid fa-x"></i>
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