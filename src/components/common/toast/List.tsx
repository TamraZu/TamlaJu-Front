import { toastState } from "components/atoms/atoms";
import { useRecoilValue } from "recoil";
import Toast from './Toast'
import styled from "@emotion/styled";

const StyledToastList = styled.div`
    top:0;
    left:0;
    position:fixed;
    z-index:1000;
`

export default function ToastList() {
    const toasts = useRecoilValue(toastState);
    return (
        <StyledToastList>
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} />
            ))
        }
        </StyledToastList>
    )
}