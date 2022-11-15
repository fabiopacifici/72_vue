import {
  reactive
} from 'vue'

export const store = reactive({
  actors: null,
  loading: true,
  errorMessage: null,
  API_url: 'https://www.breakingbadapi.com/api/characters'
})