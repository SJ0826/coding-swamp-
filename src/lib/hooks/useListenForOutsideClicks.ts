import { RefObject } from 'react'
import { setUserMenuVisibility } from '../store/userMenuSlice'
import { useAppDispatch } from './useAppDispatch'

interface Props {
  userRef: RefObject<HTMLDivElement>
}

export default function useListenForOutsideClicks({ userRef }: Props) {
  const dispatch = useAppDispatch()

  return () => {
    if (!userRef.current) return

    document.addEventListener(`click`, (evt: MouseEvent): void => {
      if (userRef.current && userRef.current.contains(evt.target as Node)) return
      dispatch(setUserMenuVisibility('hidden'))
    })
  }
}
