import cls from './WelcomePage.module.scss'
import classNames from "classnames";
import {FirstStep} from "@pages/steps/first/ui/FirstStep.tsx";
interface WelcomePageProps {
    className?: string,
}

export const WelcomePage = ({className}: WelcomePageProps) => {
    return (
        <div className={classNames(cls.WelcomePage, {}, [className])}>
            <FirstStep/>
        </div>
    )
}