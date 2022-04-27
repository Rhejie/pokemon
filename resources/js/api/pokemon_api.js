import axios from 'axios';

export default {
    getPokemons() {
        return axios.get('/pokemon-api/get')
    }
}
