import { toastState } from "components/atoms/atoms";
import { ToastInterface } from "types/ToastInterface";
import { useRecoilState } from "recoil";
import { getNewUID } from "util/getUID";

export function useToast() {

    const [toasts, setToasts] = useRecoilState(toastState);

    const removeToast = (toastID: ToastInterface['id']) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== toastID))
    }

    const fireToast = (toast: ToastInterface) => {
        setToasts((prev) => [...prev, { ...toast, id: getNewUID() }]);
        console.log(toasts);
        setTimeout(() => { 
            removeToast(toast.id)
            console.log(toast.id, 'has been deleted')
         }, 500 + (toast.duration ?? 1000))
    }

    return { toasts, fireToast };
}