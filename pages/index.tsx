import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'test@test.com' && password === 'asdasd123') {
            router.push('/form');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-300">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-6 rounded shadow-md"
            >
                <div className='flex flex-col'>
                    <h1 className="text-xl font-bold mb-4 text-center">
                        Iniciar sesión
                    </h1>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
}
