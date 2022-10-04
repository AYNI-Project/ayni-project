import { connection } from "../services/database.service";
import { Pool } from "pg";
import iConocimiento from "./interfaces/iConocimiento";

class Conocimiento {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    //obtener toda lista de conocimientos
    async getConocimientos() {
        const queryStr = "SELECT * FROM conocimientos_usuario";
        const resultado = await this.client.query(queryStr);
        return resultado.rows;
    }
    //obtener un conocimiento
    async getUnConocimiento(id_conocimientos_usuario: iConocimiento) {
        const queryStr = "SELECT * FROM conocimientos_usuario WHERE id_conocimientos_iusuario=$1";
        const resultado = await this.client.query(queryStr, [id_conocimientos_usuario]);
        return resultado.rows[0];
    
    }
    //obtener todos los conocimientos de un usuario
    async getConocimientosByCategoryId(category_id: any) {
        const queryStr = "SELECT * FROM conocimientos_usuario WHERE category_id=$1";
        const resultado = await this.client.query(queryStr, [category_id]);
        return resultado.rows[0];
    }
    // añadir conocimiento nuevo
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
    //editar un conocimiento
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

    //eliminar conocimiento
    async deleteConocimiento(id_conocimientos_usuario: any) {
        const queryStr =
            "DELETE FROM conocimientos_usuario WHERE id_conocimientos_usuario = $1 returning *";

        const resultado: any = await this.client.query(queryStr, [id_conocimientos_usuario]);

        return resultado.rows[0];
    }
}

export default new Conocimiento(connection());