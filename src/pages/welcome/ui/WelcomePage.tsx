import cls from './WelcomePage.module.scss'
import classNames from "classnames";
import {useState} from "react";
import { Button } from '@/shared/ui/Button';
import {ProgressBar} from "@shared/ui/ProgressBar";
import {Step} from "@shared/ui/Step";

interface WelcomePageProps {
    className?: string,
}

const steps = [
    {
        id: 1,
        h1: "Hear it. Write it. Learn it.",
        p: "Spotted a word you don't know? Write it down instantly and get a translation in seconds."
    },
    {
        id: 2,
        h1: "Build Your Vocabulary",
        p: "Save words you discover and review them anytime to build your personal dictionary."
    },
    {
        id: 3,
        h1: "Track Your Progress",
        p: "See how your vocabulary grows over time with personalized stats and insights."
    },
]

export const WelcomePage = ({className}: WelcomePageProps) => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        if (current < steps.length - 1) {
            setCurrent(current + 1);
        }
    };

    return (
        <div className={classNames(cls.WelcomePage, {}, [className])}>
            <ProgressBar current={current + 1} total={steps.length} />
            <Step
                sticker={<div>hui</div>}
                key={steps[current].id}
                h1={steps[current].h1}
                p={steps[current].p}
            />
            <ProgressBar className={cls.barContainer} variant='dots' onStepClick={(stepIndex) => setCurrent(stepIndex)} current={current + 1} total={steps.length} />
            <div className={cls.buttonsContainer}>
                <Button variant='primary' onClick={handleNext}>Next</Button>
                <Button variant='outline'>I already have an account</Button>
            </div>
        </div>
    )
}