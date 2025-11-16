import Link from "next/link";
import styles from '../page.module.scss';
import { api } from "@/services/api";
import { redirect } from "next/navigation";


export default function Signup() {
    
    async function handleRegister(formData: FormData) {
        "use server"

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        
        if (name === "" || email === "" || password ==="") {
            console.log("Preencha os campos!");
        }
        
        try {
            await api.post("/users", {
                name,
                email,
                password
            })
            
        }catch(err) {
            console.log("error");
            console.log(err);
        }   
        
        redirect("/");
    }
    

    return(
        <>
            <div className={styles.containerCenter}>
            <h1 className={styles.title}>Pizzaria</h1>

            <section className={styles.login}>
                <h2>Criando a sua conta</h2>
                <form action={handleRegister}>
                    <input
                        className={styles.input}
                        required
                        name='name'
                        placeholder='Digite seu nome' 
                        type="text" 
                    />
                    <input
                        className={styles.input}
                        required
                        name='email'
                        placeholder='Digite seu email' 
                        type="email" 
                    />
                    <input
                        className={styles.input}
                        required
                        name='password'
                        placeholder='*********' 
                        type="password" 
                    />
                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>

                <Link href="/" className={styles.text}>
                Já possui uma conta? Faça o login
                </Link>
            </section>
    </div>
        </>
    );
}