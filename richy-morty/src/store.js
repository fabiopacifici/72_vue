import {
  reactive
} from 'vue'

export const store = reactive({
  API_URL: 'https://rickandmortyapi.com/api/character',
  characters: null,
  info: null,
  error: null,
    searchText: ''
})