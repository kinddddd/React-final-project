import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ChampionDetails = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    const [champion, setChampion] = useState({});
    
    useEffect(() => {
        const getChampion = async () => {
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${name}.json`)
            setChampion(res.data.data[name]);
            console.log(res.data.data[name]);
        }
        getChampion();
    },[])


  return (
    <div>
        <p>{champion.name}</p>
    </div>
  )
}

export default ChampionDetails