import { api } from '@/services/api';
import styles from './page.module.scss';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Page() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email");
    const password = formData.get("password");

    
    
    if(email === "" || password === "") {
      return;
    }
    
    try {
      
      const response = await api.post("/session", {
        email,
        password
      });
      if(!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      const cookieStore =  await cookies();

      cookieStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      });

    }catch(err) {
      console.log(err);
      return;
    }

    redirect("/dashboard");


    
  }
  return (
    <div className={styles.containerCenter}>
      <h1 className={styles.title}>Pizzaria</h1>

      <section className={styles.login}>
        <form action={handleLogin}>
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
            Acessar
          </button>
        </form>

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>
      </section>
    </div>
  );
}
