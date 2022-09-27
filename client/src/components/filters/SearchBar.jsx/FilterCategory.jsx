import React from 'react';
import { useEffect, useState } from 'react';
import { knowledge } from "../../components/test/mock/conocimientos.jsx";
// import axios from 'axios';

export default function FilterCategory() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch({ knowledge })
            .then(res => {
                console.log(res.data)
                setData(res.data);
                setLoading(false)
            })
    }, [])
    console.log(data)

    const filterProgramacion = data.filter(knowledge => knowledge.categoria_id);

    if (loading) return <section>Cargando...</section>;

    return (
        <div>FilterCategory</div>
    )
}
