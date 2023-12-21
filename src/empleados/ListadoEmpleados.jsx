import  axios  from 'axios';
import React, {useState,useEffect} from 'react';

const ListadoEmpleados = () => {
    const URL = "http://localhost:8080/rh-app/empleados";
    const [empleados, setEmpleados] = useState([]);
 
    const cargarEmpleados= async ()=>{
        await fetch("http://localhost:8080/rh-app/empleados",{
            method: 'GET',
            mode: 'no-cors',
            headers:{
                // "Content-Type": "application/json",
                // 'Content-Type': 'text/plain',
                // 'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Origin': 'http://localhost:5173'
                // "Access-Control-Allow-Credentials" : true,
                // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                // 'Accept': '*/*'
            } 
            // Access-Control-Allow-Origin: '*'
        })
        .then(data=>data.text())
        .then(d=>{
            console.log("Cargado");
            console.log(d)
        })
        .catch(err=>{
            console.warn("ERROR")
            console.log(err)
        })
        // const result = await axios.get(URL)
        // console.log("Cargado");
        // console.log(result.data);
    }

    useEffect(() => {
        cargarEmpleados();
    },[])

    return (
        <div className="container">
            <div className='container text-center mt-5'>
                <h1>Listado de Empleados</h1>
            </div>
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListadoEmpleados;
