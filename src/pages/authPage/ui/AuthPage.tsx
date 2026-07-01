import cls from './AuthPage.module.scss'
import {SignInForm} from "@features/signIn";
import classNames from "classnames";
interface AuthPageProps {
    className?: string,
}

export const AuthPage = ({className}: AuthPageProps) => {
    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <SignInForm/>
        </div>
    )
}