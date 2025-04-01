import { useAuthContext } from "../context/auth/AuthContext";

export const DashBoard = () => {
    const { user } = useAuthContext(); 
    console.log(user); // Verifica si el usuario está correctamente recuperado

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-96">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                {user ? (
                    <>
                        <p className="text-xl mt-4 text-gray-600">Bienvenido, <span className="text-blue-600 font-semibold">{user.name}</span></p>
                        <span className="text-gray-500 text-sm block mt-2">{user.email}</span>
                    </>
                ) : (
                    <p className="text-lg text-gray-500 mt-4">Cargando...</p>
                )}
            </div>
        </div>
    );
};