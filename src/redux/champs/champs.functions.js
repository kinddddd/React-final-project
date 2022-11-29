import axios from 'axios';

export const getChamps = () => async (dispatch) => {
    dispatch({type: 'gettingChamps'})

    try {
        const result = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json')
        dispatch({type: 'getChamps', payload: result.data.data})
        console.log(result.data.data);
    } catch (error) {
        dispatch({type: 'errorChamps', payload: error.message})
    }
}
