// ProgressBar.tsx
import cls from './ProgressBar.module.scss'
import classNames from "classnames";

interface ProgressBarProps {
    className?: string,
    current?: number,
    total?: number,
    max?: number,
}

export const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
    const STEPS = total  ?? 5;
    const value = current ?? 1;
    return (
        <div className={classNames(cls.ProgressBar, [className])}>
            {Array.from({ length: STEPS }, (_, index) => {
                const isFilled = index < value;
                return (
                    <div
                        key={index}
                        className={classNames(cls.Step, {
                            [cls.Filled]: isFilled
                        })}
                    />
                );
            })}
        </div>
    );
};