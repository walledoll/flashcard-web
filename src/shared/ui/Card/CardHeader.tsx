import type {ReactNode} from "react";
import * as classNames from "classnames";

interface ICardHeader {
    children: ReactNode,
    className?: string,
}

export const CardHeader = ({children, className}: ICardHeader) => {
    return(
        <div className={classNames(styles.CardHeader, className)}>
            {children}
        </div>
    )
}