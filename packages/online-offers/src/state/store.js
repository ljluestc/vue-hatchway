import Vue from 'vue'
import Vuex from 'vuex'
import categories from './categories'
import feedMerchants from './feed-merchants'
import feeds from './feeds'
import merchants from './merchants'
import offers from './offers'
import ui from './ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    feedMerchants,
    feeds,
    merchants,
    offers,
    ui,
  },
})
