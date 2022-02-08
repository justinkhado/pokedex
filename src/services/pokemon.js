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

const getEvoChain = async (id) => {
  const request = await axios.get(`${baseUrl}/evolution_chains/${id}.json`)
  return request.data
}

const getMoveset = async (id) => {
  const request = await axios.get(`${baseUrl}/movesets/${id}.json`)
  return request.data
}


const pokemonService = {
  getAll,
  getPokemon,
  getEvoChain,
  getMoveset
}

export default pokemonService