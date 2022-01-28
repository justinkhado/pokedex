import axios from 'axios'

const baseUrl = 'https://raw.githubusercontent.com/justinkhado/pokedex-data/master/data'

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/pokemons.json`)
  return request.data
}

const getPokemon = async (id) => {
  const request = await axios.get(`${baseUrl}/pokemon/${id}.json`)
  return request.data 
}

const getPokemonImage = async (id) => {
  const request = await axios.get(`${baseUrl}/images/original/${id}.png`)
  return request.data 
}

const pokemonService = {
  getAll,
  getPokemon,
  getPokemonImage
}

export default pokemonService