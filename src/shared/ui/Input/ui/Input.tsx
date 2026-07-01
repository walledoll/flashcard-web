import cls from './Input.module.scss'
import classNames from "classnames";
import type {InputHTMLAttributes} from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    variant?: 'primary'
}

export const Input = ({className}: InputProps) => {
    return (
        <input className={classNames(cls.Input, {}, [className])}>
        </input>
    )
}