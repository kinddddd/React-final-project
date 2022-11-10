import axios from 'axios';
import "./ChampionDetails.scss"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ChampionDetails = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    const [champion, setChampion] = useState({});
    const [spellDescription, setSpellDescription] = useState();
    
    useEffect(() => {
        const getChampion = async () => {
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${name}.json`)
            setChampion(res.data.data[name]);
        }
        getChampion();
    },[])

  return (
    <div className='champContainer'>
        <div className='champBox'>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`} alt={champion.name} className="champImg"/>
            <div className='champ'>
                <div className='lore'>
                    <p className='loreTitle'>{champion.name}</p>
                    <p className='loreText'>{champion.lore}</p>
                </div>
                <div className='spells'>
                    <p className='spellsTitle'>Abilities</p>
                    <div className='spellsCell'>
                        <div>
                            {/* {champion?.spells?.map((spell) => {
                                return (
                                    <div className='spell' key={spell.id}>
                                        <p className='spellTitle'>{spell.name}</p>
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${spell.image.full}`} alt={spell.name}/>
                                        <p className='spellDescription'>{spell.description}</p>
                                    </div>
                                )
                            })} back up si lo otro no funciona */}
                            <div onClick={setSpellDescription(champion.spells?.[0].description)}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[0].image.full}`} alt={champion.spells?.[0].name}/>
                            </div>
                            <p>{champion.spells?.[0].name}</p>
                        </div>
                        <div>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[1].image.full}`} alt={champion.spells?.[1].name}/>
                            <p>{champion.spells?.[1].name}</p>
                        </div>
                        <div>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[2].image.full}`} alt={champion.spells?.[2].name}/>
                            <p>{champion.spells?.[2].name}</p>
                        </div>
                        <div>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[3].image.full}`} alt={champion.spells?.[3].name}/>
                            <p>{champion.spells?.[3].name}</p>
                        </div>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChampionDetails