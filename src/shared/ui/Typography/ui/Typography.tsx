import type { ElementType, ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
import cls from './Typography.module.scss';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface ITypography extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    variant?: TypographyVariant;
    size?: TypographySize;
    as?: ElementType;
    className?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white' | 'gray';
    weight?: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    align?: 'left' | 'center' | 'right' | 'justify';
}

export const Typography = ({
                               variant = 'p',
                               size = 'md',
                               as,
                               children,
                               className,
                               color = 'white',
                               weight = 'regular',
                               align = 'left',
                               ...props
                           }: ITypography) => {
    const Component = as ?? variant;

    return (
        <Component
            className={classNames(
                cls.typography,
                cls[`variant-${variant}`],
                cls[`size-${size}`],
                cls[`color-${color}`],
                cls[`weight-${weight}`],
                cls[`align-${align}`],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};