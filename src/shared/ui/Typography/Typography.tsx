import type {ElementType, ReactNode} from "react";

interface ITypography {
    children?: ReactNode,
    variant?: string,
    size?: string,
    as?: ElementType,
    className?: string,
}

export const Typography = ({variant = 'default', size = 'default', as, children, className}: ITypography) => {
    const Component = as ?? variant.startsWith('h') ? variant : "p";
    return(
        <Component className={}>
            {children}
        </Component>
    )
}