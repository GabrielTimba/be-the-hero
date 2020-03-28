import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi'

import api from '../../Services/api'
import logoImg from '../../assets/logo.svg';
import  './style.css';

export default function Profile(){
    const ongName= localStorage.getItem('OngName');
    const ongId= localStorage.getItem('OngId');
    const [incidents,setIncidents]=useState([]);
    const history= useHistory();

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: ongId
            }
        }).then(response=>{
            setIncidents(response.data);
        })
    },[ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident=>incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar caso,tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="be the hero"/>
                <span>Bem vinda,{ongName}</span>

                <Link className="button" to="incident/new">Cadastrar novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident=>(
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descricao:</strong>
                        <p>{incident.decription}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-pt',{style:'currency', currency:'MZN'}).format(incident.value)}</p>

                        <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}