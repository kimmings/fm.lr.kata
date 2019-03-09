export function addFilter(filter) {
    return {
        type: 'TOGGLE_FILTER',
        payload: filter
      }
}

export function orderBy(order) {
  return { 
    type: 'ORDER_HOTELS',
    payload: order
  }
}