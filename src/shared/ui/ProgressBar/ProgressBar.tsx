// ProgressBar.tsx
import cls from './ProgressBar.module.scss'
import classNames from "classnames";

interface ProgressBarProps {
    className?: string,
    variant?: 'dots' | 'rects';
    current?: number,
    total?: number,
    onStepClick?: (stepIndex: number) => void,
}

export const ProgressBar = ({ current, total, className, onStepClick, variant = 'rects' }: ProgressBarProps) => {
    const STEPS = total  ?? 5;
    const value = current ?? 0;
    console.log('ProgressBar:', { current, total, value });
    return (
        <div className={classNames(cls.ProgressBar, [className])}>
            {Array.from({ length: STEPS }, (_, index) => {
                const isFilled = index < value;
                const isCurrent = index === value - 1;
                return (
                    <div
                        onClick={() => onStepClick?.(index)}
                        key={index}
                        className={classNames(cls.Step, {
                            [cls.Filled]: isFilled,
                            [cls.current]: isCurrent
                        }, variant === 'dots' ? cls.dots : cls.rects )}
                    />
                );
            })}
        </div>
    );
};