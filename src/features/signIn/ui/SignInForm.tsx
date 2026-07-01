import cls from './SignInForm.module.scss'
import classNames from "classnames";
interface SignInFormProps {
    className?: string,
}

export const SignInForm = ({className}: SignInFormProps) => {
    return (
        <form className={classNames(cls.SignInForm, {}, [className])}>
        </form>
    )
}