import axios from 'axios';
import "./ChampionDetails.scss"
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
    <div className='champContainer'>
        <div className='champ'>
            <p className='title'>{champion.name}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`} alt={champion.name} className="champImg"/>
            <div className='lore'>
                <p className='loreTitle'>Lore</p>
                <p className='loreText'>{champion.lore}</p>
            </div>
            <div className='spells'>
                <p className='spellsTitle'>Spells</p>
                <div>
                    {champion.spells.map((spell) => {
                        return (
                            <div className='spell'>
                                <p>{spell.name}</p>
                                <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${spell.image.full}`} alt={spell.name}/>
                                <p className='spellDescription'>{spell.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChampionDetails