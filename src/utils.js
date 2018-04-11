export const mapToArray = obj => {
  return Object.keys(obj).map(i => ({
    ...obj[i],
    id: i
  }))
}

export const mapToArrayIng = obj => {
  return Object.keys(obj).map(i => ({
    name: i,
    amount: obj[i]
  }))
}
