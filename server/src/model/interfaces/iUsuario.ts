export interface iUsuariologin {
    email: string;
    password: string;
}

export interface iUsuario {
    id_usuario?: number;
    foto: string;
    nombre: string;
    apellidos: string;
    ciudad: string;
    sobre_mi?: string;
    email: string;
    password?: string;
    telefono?: number;
    opiniones: string;
}