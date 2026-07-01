import cls from './SignUpForm.module.scss'
import classNames from "classnames";
interface SignUpFormProps {
    className?: string,
}

export const SignUpForm = ({className}: SignUpFormProps) => {
    return (
        <form className={classNames(cls.SignUpForm, {}, [className])}>

        </form>
    )
}