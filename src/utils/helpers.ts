import moment from 'moment'

export const formatAge = (utc: number) => {
  const age = moment.unix(utc).fromNow()
  return age.charAt(0).toUpperCase() + age.slice(1)
}
