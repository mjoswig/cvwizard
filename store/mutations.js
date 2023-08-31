import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_CV_DATA: (state, cvData) => {
    state.cvData = cvData
  }
}