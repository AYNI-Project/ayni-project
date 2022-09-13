import { useAuth } from "../context/useAuth";

export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div>
      <div>
        <h1>
          Hola, {user.displayName || user.email}{" "}
        </h1>
        <button
          onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
