import cls from './WelcomePage.module.scss'
import classNames from "classnames";
import {useState, useMemo} from "react";
import { Button } from '@/shared/ui/Button';
import {ProgressBar} from "@shared/ui/ProgressBar";
import {Step} from "@shared/ui/Step";
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";
import { Input } from '@/shared/ui/Input/ui/Input';

interface WelcomePageProps {
    className?: string,
}

export const WelcomePage = ({className}: WelcomePageProps) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const stepKeys = [
        { id: 1, h1Key: 'pages.welcome.step1.h1', pKey: 'pages.welcome.step1.p' },
        { id: 2, h1Key: 'pages.welcome.step2.h1', pKey: 'pages.welcome.step2.p' },
        { id: 3, h1Key: 'pages.welcome.step3.h1', pKey: 'pages.welcome.step3.p' },
    ];

    const steps = useMemo(() =>
            stepKeys.map(step => ({
                id: step.id,
                h1: t(step.h1Key),
                p: t(step.pKey)
            })),
        [t]
    );

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };


    const handleNext = () => {
        if (current < steps.length - 1) {
            setCurrent(current + 1);
        }
        if (current === steps.length - 1) {
            navigate('/home');
        }
    };

    return (
        <div className={classNames(cls.WelcomePage, {}, [className])}>
            <ProgressBar current={current + 1} total={steps.length} />
            <Step
                sticker={<div>hui</div>}
                h1={steps[current].h1}
                p={steps[current].p}
            />
            <ProgressBar className={cls.barContainer} variant='dots' onStepClick={(stepIndex) => setCurrent(stepIndex)} current={current + 1} total={steps.length} />
            <div className={cls.buttonsContainer}>
                <Button variant='primary' onClick={handleNext}>{t('pages.welcome.BtnNext')}</Button>
                <Button variant='outline'>{t('pages.welcome.BtnHasAcc')}</Button>
            </div>
            <Input>hui</Input>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
    )
}