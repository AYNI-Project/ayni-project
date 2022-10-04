import { connection } from "../services/database.service";
import { Pool } from "pg";
import iCategoria from "./interfaces/iCategoria";

class Categoria {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    async getCategorias() {
        const queryStr = "SELECT * FROM categorias";
        const resultado = await this.client.query(queryStr);
        return resultado.rows;
    }
    async getUnaCategoria(id_categoria: any) {
        const queryStr = "SELECT * FROM categorias WHERE id_categoria=$1";
        const resultado = await this.client.query(queryStr, [id_categoria]);
        return resultado.rows[0];
    }
    // añadir categoria
    async addCategoria(id_categoria: iCategoria) {
        const queryStr =
            "INSERT INTO categorias (nombre, imagen) VALUES ($1, $2) returning *";

        const resultado: any = await this.client.query(queryStr, [
            id_categoria.nombre,
            id_categoria.imagen,
        ] as string[]);

        return resultado.rows[0];
    }
    //editar Categoria
    async editCategoria(id_categoria: any, body: iCategoria) {
        const {
            nombre,
            imagen,
        }: iCategoria = body;

        const queryStr =
            "UPDATE categorias SET (nombre, imagen)=($1, $2) WHERE id_categoria =$5  returning *";

        const resultado = await this.client.query(queryStr, [
            nombre,
            imagen,
            id_categoria,
        ]);

        return resultado.rows[0];
    }

    //eliminar categoria
    async deleteCategoria(id_categoria: any) {
        const queryStr =
            "DELETE FROM categorias WHERE id_categoria = $1 returning *";

        const resultado: any = await this.client.query(queryStr, [id_categoria]);

        return resultado.rows[0];
    }
}

export default new Categoria(connection());
