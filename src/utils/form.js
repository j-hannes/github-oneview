// TODO test!
export const withTargetValue = action => ({ target }) => action(target.value)

// TODO test!
export const preventDefault = action => e => {
  e.preventDefault()
  action()
}
