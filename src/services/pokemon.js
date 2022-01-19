import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const maxPokemonCount = 10//1118

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/?limit=${maxPokemonCount}`)
  return request.data.results
}

const pokemonService = {
  getAll
}

export default pokemonService