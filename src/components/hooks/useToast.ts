import { useCallback } from 'react'
import { toastState } from 'components/atoms/atoms'
import { ToastInterface } from 'types/ToastInterface'
import { useRecoilState } from 'recoil'
import { getNewUID } from 'util/getUID'

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState)

  const removeToast = useCallback(
    (toastID: ToastInterface['id']) => {
      setToasts(prev => prev.filter(toast => toast.id !== toastID))
    },
    [setToasts],
  )

  const newId = getNewUID()

  const fireToast = (toast: ToastInterface) => {
    setToasts(prev => [...prev, { ...toast, id: newId }])
    // console.log(toasts)
    setTimeout(() => {
      removeToast(newId)
      // console.log(toast.id, 'has been deleted')
    }, 300 + (toast.duration ?? 1000))
  }

  return { toasts, fireToast }
}
