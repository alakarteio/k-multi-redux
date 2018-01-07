export default name => store => next => (action) => {
  // dispatch event to the document
  // - the root redux can catch it
  if (!/@@from-root\/.*/.test(action.type)) {
    document.dispatchEvent(new CustomEvent('@@alakarte/children-event', { detail: { name, store, action } }))
  }

  // dispatch event to the local redux
  return next(action)
}
