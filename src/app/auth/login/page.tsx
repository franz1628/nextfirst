'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import InputField from '@/components/forms/InputField';
import { AuthService } from '@/services/auth';
import { DepartamentoModel } from '@/types/departamentoModel';
import Button from '@/components/common/Button';
import { BiLogIn } from 'react-icons/bi';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await AuthService.login({...new DepartamentoModel(),email,password})
      if(response){
        router.push('/dashboard/provincia'); 
      }
    } catch (error) {
      Swal.fire({
        title : 'Advertencia',
        text : 'Credenciales incorrectaas',
        icon : 'warning'
      })
    }
   
    
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Iniciar sesión</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <InputField
          name="email"
          type="email"
          label="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          value={email}
        />
      </div>
      <div className="mb-4">
        <InputField
          name="contrasenia"
          label="Contraseña"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">
          {error}
        </p>
      )}
      <Button
        type="submit"
        color="success"
        icon={<BiLogIn />}
      >
        Iniciar sesión
      </Button>
    </form>
  </div>
</div>

  );
};

export default LoginPage;
