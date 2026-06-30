import styled from "@emotion/styled";
import type {ReactNode} from "react";

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const ModalWrapper = styled.div({
    height: '100vh',
    width: '100%',
    zIndex: -1,
    position: 'fixed',
    background: 'black',
    opacity: 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ModalContent = styled.div({

})

export const Modal = ({isOpen, onClose, children}: IModal) => {
    return(
        <ModalWrapper onClick={onClose}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    )
}