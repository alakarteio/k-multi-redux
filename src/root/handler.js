export default (store) => {
  const stores = {}

  document.addEventListener('@@alakarte/children-event', (e) => {
    const screen = e.detail
    const { action, name } = screen

    // register children store (so root can communicate with all if necessary)
    stores[name] = screen.store

    // dispatch the action, adding current screen and all stores
    store.dispatch({ ...action, screen, stores })
  })
}
