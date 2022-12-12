/**
 * Read Log From API Fetch
 * 
 * @param {String} label 
 * @param {*} logs
 * @returns
 */
export const Logger = (label, logs) => {
  if (import.meta.env.NODE_ENV === 'production') return
  console.group(label)
  console.table(logs)
  console.groupEnd()
}