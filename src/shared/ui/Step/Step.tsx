import cls from './Step.module.scss'
import classNames from "classnames";
import type {ReactNode} from "react";
interface StepProps {
    className?: string,
    sticker: ReactNode;
    h1: string,
    p: string,
}

export const Step = ({sticker, h1, p, className}: StepProps) => {
    return (
        <div className={classNames(cls.Step, {}, [className])}>
            <div className={cls.stickerContainer}>{sticker}</div>
            <div className={cls.textContainer}>
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    )
}