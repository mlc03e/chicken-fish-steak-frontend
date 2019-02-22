const defaultState= {

  beef: 'matt'

}
export default function reducer(state= defaultState, action) {
  switch (action.type) {
    case "MAKE_JI":
      return {...state, beef: action.payload}
    default:
      return {...state}
    // case "INVITE_GUESTS":
    //   return
  }
}
