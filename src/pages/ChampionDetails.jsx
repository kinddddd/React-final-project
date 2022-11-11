import axios from 'axios';
import "./ChampionDetails.scss"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ChampionDetails = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    const [champion, setChampion] = useState({});
    const [spellDescription, setSpellDescription] = useState();
    const [spellStyle, setSpellStyle] = useState('Q');
    
    useEffect(() => {
        const getChampion = async () => {
            const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${name}.json`)
            setChampion(res.data.data[name]);
            setSpellDescription(res.data.data[name].spells?.[0].description);
        }
        getChampion();
    },[])

  return (
    <div className='champContainer'>
        <div className='champBox'>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`} alt={champion.name} className="champImg"/>
            <div className='champ'>
                <div className='lore'>
                    <div className='loreHeaders'>
                        <img className='champIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champion.image?.full}`} alt={champion.name} />
                        <p className='loreName'>{champion.name?.toUpperCase()}</p>
                        <p className='loreTitle'>{champion.title?.toUpperCase()}</p>
                        <p className='loreText'>{champion.lore}</p>
                    </div>
                </div>
                <div className='spells'>
                    <div className='spellsHeader'>
                        <p className='spellsTitle'>Abilities</p>
                    </div>
                    <div className='spellsCell'>
                        <div>
                            {spellStyle === 'Q'
                            ? <img className='spellsImg selectedSpell' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[0].image.full}`} alt={champion.spells?.[0].name}
                                onClick={() => {setSpellDescription(champion.spells?.[0].description); setSpellStyle('Q')}}
                            />
                            :<img className='spellsImg' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[0].image.full}`} alt={champion.spells?.[0].name}
                                onClick={() => {setSpellDescription(champion.spells?.[0].description); setSpellStyle('Q')}}
                            />
                            }
                            <p>{champion.spells?.[0].name}</p>
                        </div>
                        <div>
                            {spellStyle === 'W'
                            ? <img className='spellsImg selectedSpell' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[1].image.full}`} alt={champion.spells?.[1].name}
                                onClick={() => {setSpellDescription(champion.spells?.[1].description); setSpellStyle('W')}}
                            />
                            : <img className='spellsImg' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[1].image.full}`} alt={champion.spells?.[1].name}
                                onClick={() => {setSpellDescription(champion.spells?.[1].description); setSpellStyle('W')}}
                            />
                            }
                            <p>{champion.spells?.[1].name}</p>
                        </div>
                        <div>
                            {spellStyle === 'E'
                            ? <img className='spellsImg selectedSpell' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[2].image.full}`} alt={champion.spells?.[2].name}
                                onClick={() => {setSpellDescription(champion.spells?.[2].description); setSpellStyle('E')}}
                            />
                            : <img className='spellsImg' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[2].image.full}`} alt={champion.spells?.[2].name}
                                onClick={() => {setSpellDescription(champion.spells?.[2].description); setSpellStyle('E')}}
                            />
                            }
                            <p>{champion.spells?.[2].name}</p>
                        </div>
                        <div>
                            {spellStyle === 'R'
                            ? <img className='spellsImg selectedSpell' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[3].image.full}`} alt={champion.spells?.[3].name}
                                onClick={() => {setSpellDescription(champion.spells?.[3].description); setSpellStyle('R')}}
                            />
                            : <img className='spellsImg' src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${champion.spells?.[3].image.full}`} alt={champion.spells?.[3].name}
                                onClick={() => {setSpellDescription(champion.spells?.[3].description); setSpellStyle('R')}}
                            />
                            }
                            <p>{champion.spells?.[3].name}</p>
                        </div>
                    </div>
                    <p className='spellDescription'>{spellDescription}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChampionDetails