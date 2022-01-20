import axios from 'axios'

const baseUrl = 'https://raw.githubusercontent.com/justinkhado/pokedex-data/master'

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/pokemons.json`)
  return request.data
}

const pokemonService = {
  getAll
}

export default pokemonService