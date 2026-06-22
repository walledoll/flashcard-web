import styled from '@emotion/styled'
import type {ReactNode} from "react";

const Header = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

})

export const CardHeader = ({children}: {children: ReactNode}) => {
    return(
        <Header>
            {children}
        </Header>
    )
}