export default screenName => action => {
  // Where can I have acces to stores variable ?
  // Maybe we need to do a root middleware that filter action with a specific field
  // like if(action.toScreen) => stores[action.toScreen].dispatch(action)
  // action.stores.cities.dispatch({ type: 'ROOT_FROM_CONTACTS_TO_CITIES' })
}
