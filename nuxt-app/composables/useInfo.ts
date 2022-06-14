
const {log} = console

export const useInfo = () => {
  return useState('foo', () => {return 'Nicola'})
}

export const useA = () => {
  return useState('bar', () => {return 'Ciao da'})
}

export const mergeData = (a, b) => {
  log(a)
  log(b)
  return (typeof a === 'object' ?  a._object[a._key] : a)  + ' ' + (typeof b === 'object' ?  b._object[b._key] : b) 
}
