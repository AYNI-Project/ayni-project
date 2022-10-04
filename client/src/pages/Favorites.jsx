import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import { View, Subtitle } from '../styles/auth';
import { knowledge } from '../data/conocimientos';
import Appbar from "../components/appbar/index";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Favorites() {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "users/myfavorites/")
      .get(process.env.REACT_APP_BACKEND_URL + "knowledge/")
      .then(res => {
        console.log("probando", res.data)
        setData(res.data);
        setLoading(false)
      })
  }, [])

  const getMyFavorites = data.map(fav => fav.id === id);
  console.log("probando faves", getMyFavorites)

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    setFavorites(newFavorites);
  }

  useEffect(() => {
    setFavorites(knowledge);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  if (loading) return <section>Cargando...</section>

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