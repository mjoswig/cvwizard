import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: (state) => ({
      cvData: state.cvData
    })
  }).plugin(store)
}