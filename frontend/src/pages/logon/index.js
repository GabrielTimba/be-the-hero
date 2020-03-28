import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import api from '../../Services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from  '../../assets/heroes.png';
import './style.css'

export default function Logon(){
    const [id, setID]=useState();
    const history=useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response= await api.post('session',{ id}); 
            localStorage.setItem('OngId',id);
            localStorage.setItem('OngName',response.data.name);
            history.push('/profile');
        } catch(err){
            alert('Falha no login, Tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/> 
                <form onSubmit={handleLogin}>
                    <h1>Faca seu Logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange= {e=>setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}