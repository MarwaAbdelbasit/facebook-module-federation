import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as feThumbsUp } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faThumbsUp, feThumbsUp)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
