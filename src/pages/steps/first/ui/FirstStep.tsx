import cls from './FirstStep.module.scss'
import classNames from "classnames";
import {ProgressBar} from "@shared/ui/ProgressBar/ProgressBar.tsx";
interface FirstStepProps {
    className?: string,
}

export const FirstStep = ({className}: FirstStepProps) => {
    return (
        <div className={classNames(cls.FirstStep, {}, [className])}>
            <ProgressBar total={10} current={12}/>
        </div>
    )
}