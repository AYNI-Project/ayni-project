import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { View, Subtitle } from "../styles/auth/index";
import Appbar from "../components/appbar";

export default function Trades() {

    const id = localStorage.getItem('id')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(process.env.REACT_APP_BACKEND_URL + `trades/pending/${id}`)
            .then(res => {
                console.log("probando", res.data)
                setData(res.data);
                setLoading(false)
            })
    }, [id])

    const getTrades = data;

    if (loading) return <section>Cargando...</section>

    return (
        <View>
            <Appbar />
            <Box>
                <Subtitle>
                    Mis trueques
                </Subtitle>
                <Typography> ¡Tienes trueques pendientes que aceptar! </Typography>
            </Box>
            {getTrades.map((trade, index) => (
                <div key={index} className="main-trades">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {trade.pedido}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lo que lo que te interesa: <Link className="link" to="/knowledge/detail/:id">{trade.pedido}</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lo que ofreces: {trade.ofrecido}
                            </Typography>
                            <Typography>
                                Ver el perfil  de {trade.nombre}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                            <Link className="link" to="/"><Button size="small">Ver el perfil de {trade.nombre}</Button></Link>
                            <div className="actions">
                                <Button size="small" color="success">Aceptar</Button>
                                <Button size="small" color="success">Rechazar</Button>
                            </div>
                        </CardActions>
                    </Card>
                </div>))}
        </View>
    )
}