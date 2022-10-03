import { connection } from "../services/database.service";
import { Pool } from "pg";
import iConocimiento from "./interfaces/iConocimiento";

class Conocimiento {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    async getConocimientos() {
        const queryStr = "SELECT * FROM conocimientos_usuario";
        const resultado = await this.client.query(queryStr);
        return resultado.rows;
    }
    async getUnConocimiento(id_conocimientos_usuario: any) {
        const queryStr = "SELECT * FROM conocimientos_usuario WHERE id_conocimientos_iusuario=$1";
        const resultado = await this.client.query(queryStr, [id_conocimientos_usuario]);
        return resultado.rows[0];
    }
    // añadir experiencia
    async addConocimiento(id_conocimientos_usuario: iConocimiento) {
        const queryStr =
            "INSERT INTO conocimientos_usuario (titulo, descripcion, imagen, estado) VALUES ($1, $2, $3, $4) returning *";

        const resultado: any = await this.client.query(queryStr, [
            id_conocimientos_usuario.titulo,
            id_conocimientos_usuario.descripcion,
            id_conocimientos_usuario.imagen,
            id_conocimientos_usuario.estado,
        ] as string[]);

        return resultado.rows[0];
    }
    //editar Conocimiento
    async editConocimiento(id_conocimientos_usuario: any, body: iConocimiento) {
        const {
            titulo,
            descripcion,
            imagen,
            estado,
        }: iConocimiento = body;

        const queryStr =
            "UPDATE conocimientos_usuario SET (titulo, descripcion, imagen, estado)=($1, $2, $3, $4) WHERE id_conocimientos_usuario =$5  returning *";

        const resultado = await this.client.query(queryStr, [
            titulo,
            descripcion,
            imagen,
            estado,
            id_conocimientos_usuario,
        ]);

        return resultado.rows[0];
    }

    //eliminar conocimiento_usuario
    async deleteConocimiento(id_conocimientos_usuario: any) {
        const queryStr =
            "DELETE FROM conocimientos_usuario WHERE id_conocimientos_usuario = $1 returning *";

        const resultado: any = await this.client.query(queryStr, [id_conocimientos_usuario]);

        return resultado.rows[0];
    }
}

export default new Conocimiento(connection());