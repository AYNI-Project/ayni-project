import { Router } from "express";
import favoritosController from "../controller/favoritosController";

const favRoute = Router();

//obtener todos los favoritos
favRoute.get("/user/myfavorites", favoritosController.getMyFavoritos);
//obtener el detalle de un favorito en concreto
favRoute.get("/user/myfavorites/:id", favoritosController.getUnFavorito);
//añadir un favorito
favRoute.post("/user/myfavorites/", favoritosController.addFavorito);
//eliminar un favorito
favRoute.delete("/user/myfavorites/:id", favoritosController.deleteFavorito);

export default favRoute;