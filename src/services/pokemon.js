import axios from 'axios'

const baseUrl = 'https://raw.githubusercontent.com/justinkhado/pokedex-data/master'

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/pokemons.json`)
  return request.data
}

const getPokemon = async (id) => {
  const request = await axios.get(`${baseUrl}/pokemon/${id}.json`)
  return request.data 
}

const pokemonService = {
  getAll,
  getPokemon
}

export default pokemonService