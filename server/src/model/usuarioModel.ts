import { connection } from "../services/database.service";
import { iUsuario, iUsuariologin } from "./interfaces/iUsuario";
import { Pool } from "pg";

class Usuario {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }

    async getUsuarios() {
        try {
            const queryStr = "SELECT * FROM usuario";
            const resultado: any = await this.client.query(queryStr, []);
            return resultado.rows;
        } catch (error) {
            console.log(error);
        }
    }

    async getUnUsuario(usuario: iUsuariologin) {
        try {
            const queryStr = "SELECT * FROM usuario WHERE email = $1";
            const values = [usuario.email];
            const resultado = await this.client.query(queryStr, values);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async addUsuario(usuario: iUsuario) {
        try {
            const queryStr =
                'INSERT INTO "usuario"(email, password, nombre, apellido) VALUES($1,$2, $3, $4) RETURNING *';
            const values = [
                usuario.email,
                usuario.password,
                usuario.nombre,
                usuario.apellidos || null,
            ];
            const resultado = await this.client.query(queryStr, values);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async loginUsuario(usuario: iUsuariologin) {
        try {
            const queryStr = "SELECT * FROM usuarios WHERE email = $1";
            const resultado = await this.client.query(queryStr, [
                usuario.email,
                usuario.password,
            ]);
            console.log(resultado.rows);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    async editUsuario(usuario: iUsuario, id_usuario: any) {
        try {
            const queryStr =
                "UPDATE usuarios SET (foto, nombre, apellidos, ciudad, sobre_mi, email, password, telefono, opiniones) =($1,$2,$3,$4,$5,$6,$7,$8,$9) WHERE id_usuario=$10 returning *";
            const resultado = await this.client.query(queryStr, [
                usuario.foto,
                usuario.nombre,
                usuario.apellidos,
                usuario.ciudad,
                usuario.sobre_mi,
                usuario.email,
                usuario.password,
                usuario.telefono,
                usuario.opiniones,
                id_usuario,
            ]);
            console.log(resultado.rows);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}
export default new Usuario(connection());
