import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch
export const useAppSelector = useSelector

export const useOutsideClick = (callback) => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}