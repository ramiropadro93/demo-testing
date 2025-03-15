import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        edad: '',
        email: '',
        telefono: '',
        provincia: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.provincia != '') {
            setTimeout(() => {
                router.push('/success');
            }, 1000);
        } else {
            alert('Seleccione una provincia');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded shadow-md"
            >
                <h1 className="text-xl font-bold mb-4 text-center">
                    Formulario
                </h1>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Apellido
                    </label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Edad
                    </label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        DNI
                    </label>
                    <input
                        type="text"
                        name="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Provincia
                    </label>
                    <select
                        name="provincia"
                        value={formData.provincia}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handleChange(e as any)}
                    >
                        <option value="">Seleccione una provincia</option>
                        <option value="1">Córdoba</option>
                        <option value="2">Buenos Aires</option>
                        <option value="3">Catamarca</option>
                        <option value="4">Entre Ríos</option>
                        <option value="5">Santa Fé</option>
                        <option value="6">La Pampa</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
