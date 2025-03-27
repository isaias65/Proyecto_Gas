import { useAuthContext } from "../context/auth/AuthContext";

export const DashBoard = () => {
    const { user } = useAuthContext(); 

    return (
        <div>
            <h1>Dashboard</h1>
            {user ? <p>Bienvenido, {user.name}</p> : <p>Cargando...</p>}
        </div>
    );
};
