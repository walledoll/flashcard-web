import cls from './Button.module.scss'
import classNames from "classnames";
import type {ButtonHTMLAttributes, ReactNode} from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: 'outline' | 'primary',
    children: ReactNode;
}

export const Button = ({className, variant, children, ...props}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {[cls.primary]: variant === 'primary', [cls.outline]: variant === 'outline',}, [className])} {...props}>
            {children}
        </button>
    )
}