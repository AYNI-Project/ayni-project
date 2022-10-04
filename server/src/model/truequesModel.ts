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
    // cuando usuario A envia petición de trueque al usuario B
    async sendInterest(trueque: iTrueque) {
        try {
            const queryStr =
                'INSERT INTO "trueques" (conocimiento1_usuario_id, conocimiento2_usuario_id, estado) VALUES($1,$2,$3) RETURNING *';
            const values = [
                trueque.conocimiento1_usuario_id,
                trueque.conocimiento2_usuario_id,
                "pendiente"
            ];
            const resultado = await this.client.query(queryStr, values);
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    // cuando usuario A inicia sesión se le muestra el total de peticiones de trueques pendientes a aceptar o rechazar
    async getPendingTrueques(trueque: iTrueque) {
        try {
            const queryStr =
                'SELECT * from "trueques" WHERE conocimiento1_usuario_id IN (SELECT id_conocimientos_usuario from "conocimientos_usuario" where usuario_id = 1)';

            const resultado = await this.client.query(queryStr);
            console.log(resultado)
            return resultado.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    // //crear el trueque
    // async createTrueque(trueque: iTrueque) {
    //     try {
    //         const queryStr =
    //             "INSERT INTO trueques (conocimiento1_usuario_id, conocimiento2_usuario_id,estado) VALUES ($1, $2, $3) returning *";

    //         const values = [
    //             trueque.conocimiento1_usuario_id,
    //             trueque.conocimiento2_usuario_id,
    //             trueque.estado || null,
    //         ];

    //         const resultado: any = await this.client.query(queryStr, values);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // //cambiar estado de pendiente a aceptado o rechazado
    // async updateTrueque(trueque: iTrueque) {
    //     try {
    //         const queryStr =
    //             'UPDATE trueques SET estado = $1 WHERE id_trueque =1 returning *';
    //         const values = [
    //             trueque.conocimiento1_usuario_id,
    //             trueque.conocimiento2_usuario_id,
    //             "aceptado" || "rechazado"
    //         ];
    //         const resultado = await this.client.query(queryStr, values);
    //         return resultado.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default new Trueques(connection());
