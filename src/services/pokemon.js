import axios from 'axios'

const baseUrl = 'https://raw.githubusercontent.com/justinkhado/pokedex-data/master/data'

const getAll = async () => {
  try {
    const request = await axios.get(`${baseUrl}/pokemons.json`)
    return request.data
  } catch(e) {}
}

const getPokemon = async (id, controller) => {
  try {
    const request = await axios.get(`${baseUrl}/pokemon/${id}.json`, {
      signal: controller.signal
    })
    return request.data 
  } catch(e) {}
}

const getEvoChain = async (id, controller) => {
  try {
    const request = await axios.get(`${baseUrl}/evolution_chains/${id}.json`, {
      signal: controller.signal
    })
    return request.data
  } catch(e) {}
}

const getMoveset = async (id, controller) => {
  try {
    const request = await axios.get(`${baseUrl}/movesets/${id}.json`, {
      signal: controller.signal
    })
    return request.data
  } catch(e) {}
}


const pokemonService = {
  getAll,
  getPokemon,
  getEvoChain,
  getMoveset
}

export default pokemonService