import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import { View, Subtitle } from '../styles/auth';
import { knowledge } from '../data/conocimientos';
import Appbar from "../components/appbar/index"

export default function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id_conocimientos_usuario) {
    const newFavorites = favorites.map(item => {
      return item.id_conocimientos_usuario === id_conocimientos_usuario ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <>
      <Appbar />
      <View sx={{ flexDirection: "column" }}>
        <ul>
          {favorites.map((item, i) => (
            <li key={i}>
              {item.titulo}{" "}
              <button
                onClick={() => {
                  handleFavorite(item.id_conocimientos_usuario);
                }}
              >
                {item.favorite === true ? "Remove" : "Add"}
              </button>
            </li>
          ))}
        </ul>
        <Subtitle>
          Mis favoritos
        </Subtitle>
        <ul>
          {favorites.map(item =>
            item.favorite === true ? <li key={item.id_conocimientos_usuario}>{item.titulo}</li> : null
          )}
        </ul>
      </View>
      <Footer />
    </>
  );
}