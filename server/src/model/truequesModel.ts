import { connection } from "../services/database.service";
import { Pool } from "pg";

class Trueques {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }

    async getTrueques() {
        try {
            const queryStr = "SELECT * FROM trueques";
            const resultado: any = await this.client.query(queryStr, []);
            return resultado.rows;
        } catch (error) {
            console.log(error);
        }
    }

    // async getUnUsuario(usuarios: iUsuariologin) {
    //     try {
    //         const queryStr = "SELECT * FROM usuarios WHERE email = $1";
    //         const values = [usuarios.email];
    //         const resultado = await this.client.query(queryStr, values);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async addUsuario(usuarios: iUsuario) {
    //     try {
    //         const queryStr =
    //             'INSERT INTO "usuarios"(email, password, nombre, apellidos) VALUES($1,$2, $3, $4) RETURNING *';
    //         const values = [
    //             usuarios.email,
    //             usuarios.password,
    //             usuarios.nombre,
    //             usuarios.apellidos || null,
    //         ];
    //         const resultado = await this.client.query(queryStr, values);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async loginUsuario(usuarios: iUsuariologin) {
    //     try {
    //         const queryStr = "SELECT * FROM usuarios WHERE email = $1";
    //         const resultado = await this.client.query(queryStr, [
    //             usuarios.email,
    //             usuarios.password,
    //         ]);
    //         console.log(resultado.rows);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // async editUsuario(usuarios: iUsuario, id_usuario: any) {
    //     try {
    //         const queryStr =
    //             "UPDATE usuarios SET (foto, nombre, apellidos, ciudad, sobre_mi, email, password, telefono, opiniones) =($1,$2,$3,$4,$5,$6,$7,$8,$9) WHERE id_usuario=$10 returning *";
    //         const resultado = await this.client.query(queryStr, [
    //             usuarios.foto,
    //             usuarios.nombre,
    //             usuarios.apellidos,
    //             usuarios.ciudad,
    //             usuarios.sobre_mi,
    //             usuarios.email,
    //             usuarios.password,
    //             usuarios.telefono,
    //             usuarios.opiniones,
    //             id_usuario,
    //         ]);
    //         console.log(resultado.rows);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // //eliminar usuario
    // async deleteUsuario(id_usuario: number) {
    //     const queryStr =
    //         "DELETE FROM usuarios WHERE id_usuario = $1 returning *";

    //     const resultado: any = await this.client.query(queryStr, [id_usuario]);

    //     return resultado.rows[0];
    // }
}
export default new Trueques(connection());
