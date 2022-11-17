import {
  reactive
} from 'vue'
import axios from 'axios'

export const store = reactive({
  actors: null,
  loading: true,
  errorMessage: null,
  API_url: 'https://www.breakingbadapi.com/api/characters',
  selectCategory: '',
  categoryParameter: 'category',
    callApi(url) {
      console.log(this.selectCategory);
      if (this.selectCategory !== '') {
        //?category=Better+Call+Saul
        url += `?${this.categoryParameter}=${this.selectCategory}`
      }
      console.log(url);

      axios
        .get(url)
        .then(response => {
          //console.log(response.data);
          this.actors = response.data
          this.loading = false
        })
        .catch(err => {
          console.error(err.message);
          this.errorMessage = err.message
          this.loading = false
        })
    }
})