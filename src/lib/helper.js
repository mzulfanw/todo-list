/**
 * Format Date
 * 
 * @param {*} payload
 * @returns 
 */
export const formatDate = (payload) => {
  const d = new Date(payload)
  const day = d.getDate()
  const month = d.toLocaleString('id-ID', { month: 'long' })
  const year = d.getFullYear()
  const formated = `${day} ${month} ${year}`
  return formated
}