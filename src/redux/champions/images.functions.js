import axios from 'axios';

export const getImages = () => async (dispatch) => {
    dispatch({type: 'gettingImages'})

    try {
        const result = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.21.1/data/es_ES/champion.json')
        dispatch({type: 'getImages', payload: result.data.data})
        console.log(result.data.data);
    } catch (error) {
        dispatch({type: 'errorImages', payload: error.message})
    }
}