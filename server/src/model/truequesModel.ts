import { connection } from "../services/database.service";
import { Pool } from "pg";
import iTrueque from "./interfaces/iTrueque";
import { validateLocaleAndSetLanguage } from "typescript";

class Trueques {
    client: Pool;
    constructor(client: any) {
        this.client = client;
    }
    // obtener todos los trueques de la base de datos
    async getTrueques() {
        try {
            const queryStr = "SELECT * FROM trueques";
            const resultado: any = await this.client.query(queryStr, []);
            return resultado.rows;
        } catch (error) {
            console.log(error);
        }
    }

    // cuando usuario A inicia sesión se le muestra el total de peticiones de trueques pendientes a aceptar o rechazar
    async getPendingTrueques(usuario:number) {
        try {
            const queryStr =
            `SELECT t.id_trueque, c1.titulo pedido, c2.id_conocimientos_usuario ofrecido_id, c2.titulo ofrecido, c2.usuario_id, u2.nombre from "trueques" t 
            JOIN conocimientos_usuario c1 ON t.conocimiento1_usuario_id = c1.id_conocimientos_usuario 
            JOIN conocimientos_usuario c2 ON t.conocimiento2_usuario_id = c2.id_conocimientos_usuario 
            JOIN usuarios u2 ON c2.usuario_id = u2.id_usuario 
            WHERE c1.usuario_id = $1 AND t.estado = 'pendiente'`

            const resultado = await this.client.query(queryStr,[usuario]);
            return resultado.rows;
        } catch (error) {
            console.log(error);
        }
    }
    // //crear el trueque
    async createTrueque(trueque: iTrueque) {
        try {
            const queryStr =
                "INSERT INTO trueques(conocimiento1_usuario_id, conocimiento2_usuario_id, estado) VALUES ($1, $2, $3) returning *";

            const values = [
                trueque.conocimiento1_usuario_id,
                trueque.conocimiento2_usuario_id,
                "pendiente",
            ];

            const resultado: any = await this.client.query(queryStr, values);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    // //cambiar estado de pendiente a aceptado o rechazado
    async updateTrueque(trueque: iTrueque) {
        try {
            const queryStr =
                'UPDATE trueques SET estado = $1 WHERE id_trueque = $2 returning *';
            const values = [
                trueque.id_trueque,
                trueque.estado
            ];
            const resultado = await this.client.query(queryStr, values);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Trueques(connection());
