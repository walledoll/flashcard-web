import cls from './Step.module.scss'
import classNames from "classnames";
import type {ReactNode} from "react";
import {Typography} from "@shared/ui/Typography";
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
                <Typography as="h1">{h1}</Typography>
                <Typography>{p}</Typography>
            </div>
        </div>
    )
}