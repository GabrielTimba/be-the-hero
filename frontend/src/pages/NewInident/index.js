import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../Services/api';

import logoImg from '../../assets/logo.svg'
import './style.css';

export default function NewIncident(){
    const [title,setTitle]=useState('');
    const [decription,setDecription]=useState('');
    const [value,setValue]=useState('');
    const history=useHistory();

    const ongId=localStorage.getItem('OngId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data={title,decription,value}
        

        try {
            await api.post('/incidents',data,{
                headers:{
                    Authorization:ongId,
                }
            });

            history.push('/profile')
            
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return(
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro novo Caso</h1>
                    <p>Descreva o seu caso detalhamete para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso" 
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="descricao" 
                        value={decription}
                        onChange={e=>setDecription(e.target.value)}
                    />
                    <input 
                        placeholder="valor em Meticais" 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}