import { compose, flatten, reduce } from 'ramda'

// TODO test!
export const partition = criteria =>
  reduce(([a, b], item) => {
    if (criteria(item)) {
      return [[...a, item], b]
    } else {
      return [a, [...b, item]]
    }
  }, [[], []])

// TODO test!
export const sortFirst = criteria => compose(flatten, partition(criteria))
