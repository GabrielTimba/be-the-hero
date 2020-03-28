import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import './style.css';
import api from '../../Services/api';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const[name,setName]=useState('');
    const[emaily,setEmaily]=useState('');
    const[whatsapp,setWhatsapp]=useState('');
    const[city,setCity]=useState('');
    const[uf,setUf]=useState('');

    const history=useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const date = {name,emaily,whatsapp,city,uf};

        try{
            const response= await api.post('ongs',date);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }
        catch(err) {
            alert('Erro no cadastro, tente novamente')
        }
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faca o seu Cadastro, entre na plataforma e ajude pessoas  encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Nao tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <input 
                        placeholder="email" type="email"
                        value={emaily}
                        onChange={e=>setEmaily(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input p
                            laceholder="Cidade" 
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                        />
                        <input 
                            placeholder="Uf" style={{width:80}} 
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}