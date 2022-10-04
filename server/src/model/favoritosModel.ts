import { connection } from "../services/database.service";
import { Pool } from "pg";
import iFavorito from "./interfaces/iFavorito";

class Favorito {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    //obtener todos mis favoritos
    async getMyFavoritos(usuario:number){
        const queryStr = "SELECT * FROM favoritos WHERE usuario_id = $1";
        const resultado = await this.client.query(queryStr,[usuario]);
        return resultado.rows;
    }
    //obtener un favorito en concreto
    async getUnFavorito(id_favorito: number) {
        const queryStr = "SELECT * FROM favoritos WHERE id_favoritos=$1";
        const resultado = await this.client.query(queryStr, [id_favorito]);
        return resultado.rows[0];
    }
    // añadir favorito
    async addFavorito(favorito: iFavorito) {
        const queryStr =
        "INSERT INTO favoritos(conocimiento_usuario_id, usuario_id) VALUES ($1, $2) returning *";
        const resultado: any = await this.client.query(queryStr, [favorito.conocimientos_usuario_id, favorito.usuario_id]);
        return resultado.rows[0];
    }
    //eliminar favorito
    async deleteFavorito(id_favorito: number) {
        const queryStr =
            "DELETE FROM favoritos WHERE id_favorito = $1 returning *";

        const resultado: any = await this.client.query(queryStr, [id_favorito]);

        return resultado.rows[0];
    }
}

export default new Favorito(connection());
