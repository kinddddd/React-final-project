import axios from 'axios';

export const getChampions = () => async (dispatch) => {
    dispatch({type: 'gettingChampions'})

    try {
        const result = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json')
        dispatch({type: 'getChampions', payload: result.data.data})
        console.log(result.data.data);
    } catch (error) {
        dispatch({type: 'errorChampions', payload: error.message})
    }
}

