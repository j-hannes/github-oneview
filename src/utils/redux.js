// TODO test!
export const structureProps = (stateProps, dispatchProps, ownProps) => ({
  passed: ownProps,
  store: stateProps,
  actions: dispatchProps
})
