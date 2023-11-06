import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://izuwtwjojmuvomlduwsi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXd0d2pvam11dm9tbGR1d3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI1NTEsImV4cCI6MjAxNDQ2ODU1MX0.HJSrxTZLKvBsgxxVTK2vDdEKdOw3_PNp61f9xI_-7pE');

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            async function signOut() {
                const { error } = await supabase.auth.signOut()
            }

            const { user, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: senha,
            });

            if (error) {
                setError(error.message);
            } else {
                // Redirecione o usuário para a página após o login bem-sucedido
                window.location.href = '/conexao';
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
