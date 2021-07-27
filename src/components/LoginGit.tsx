import { render } from 'react-dom';
import styles from '../styles/components/LoginGit.module.css'
import index from '../pages/indexRestrita';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function LoginGit(){
    const router = useRouter();
    const [login, setLogin] = useState('');

    console.log(login);
    
    return(
        

        
        <div className={styles.loginGitContainer}>

            <div className={styles.loginSimbolo} >

                
            <img className={styles.simbolo1}  src="icons/Vector.png" alt="Logo"/>
            <img className={styles.simbolo2}  src="icons/Vector2.png" alt="Logo"/>
            <img className={styles.simbolo3}  src="icons/Vector3.png" alt="Logo"/>


            </div>


           
            <img className={styles.logo} src="icons/Logo.png" alt="Logo"/>
            <strong> Bem Vindo </strong>
           
            <img className={styles.p} src="icons/Git.png" alt="Logo"/>
            

       
            <input 
            value ={login}
            onChange={e=>setLogin(e.target.value)} 
            
            name="login" placeholder="Digite seu Username" type="text" >
            </input>

          

            <button
                type="button"
                onClick= {() => router.push('/indexRestrita')} > OK
            </button>

        </div>
    );
}