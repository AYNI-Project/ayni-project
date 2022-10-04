import { connection } from "../services/database.service";
import { Pool } from "pg";
import iFavorito from "./interfaces/iFavorito";

class Favorito {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    //obtener todos mis favoritos
    async getMyFavoritos() {
        const queryStr = "SELECT * FROM favoritos WHERE id = $1";
        const resultado = await this.client.query(queryStr);
        return resultado.rows;
    }
    //obtener un favorito en concreto
    async getUnFavorito(id_favorito: iFavorito) {
        const queryStr = "SELECT * FROM favoritos WHERE id_favorito=$1";
        const resultado = await this.client.query(queryStr, [id_favorito]);
        return resultado.rows[0];
    }
    // añadir favorito
    async addFavorito(id_favorito: iFavorito) {
        const queryStr =
            "INSERT INTO favoritos FROM (SELECT usuario_id from usuarios) returning * favoritos";
        const resultado: any = await this.client.query(queryStr, [id_favorito]);
        return resultado.rows[0];
    }
    //eliminar favorito
    async deleteFavorito(id_favorito: iFavorito) {
        const queryStr =
            "DELETE FROM favoritos WHERE id_favorito = $1 returning *";

        const resultado: any = await this.client.query(queryStr, [id_favorito]);

        return resultado.rows[0];
    }
}

export default new Favorito(connection());
