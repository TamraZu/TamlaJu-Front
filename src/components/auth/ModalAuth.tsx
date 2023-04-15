import styled from "@emotion/styled"

const Overlay = styled.div`
    width:100%;
    heigth:100vh;
    background-color:rgba(0,0,0,0.5);

`

type ModalType = {
    isOpen: boolean;
}

const ModalAuth = ({ isOpen }: ModalType) => {
    return isOpen
        ? <Overlay id='overlay'>
            test
        </Overlay>
        : null
}

export default ModalAuth;