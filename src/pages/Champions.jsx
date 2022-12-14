import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChampions } from '../redux/champions/champions.functions';
import "./Champions.scss"
import { Link } from 'react-router-dom';

const Champions = () => {

    const dispatch = useDispatch();
    const {champions, isLoading, error} = useSelector(state => state.champions);

    useEffect(() => {
        
        dispatch(getChampions())

    },[])

    

  return (
    <div>
        <div className='cardContainer'>
            {Object.keys(champions).map((value, index) => {
                return (
                    <div key={champions[value].key} className="card"> 
                        <Link to={`/champions/${champions[value].name}`} className="moreInfo">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champions[value].image.full}`} alt={champions[value].name} />
                            <p>{champions[value].name}, {champions[value].title}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default Champions