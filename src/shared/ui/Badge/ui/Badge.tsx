import cls from "classnames";
import styles from './Badge.module.scss';
import {BadgeType, type IBadge} from "../types/index.ts";

const typeMap = {
    [BadgeType.NEW]: {
        text: 'New',
        className: styles.Badge_new
    },
    [BadgeType.LEARNING]: {
        text: 'Learning',
        className: styles.Badge_learning
    },
    [BadgeType.REVIEW]: {
        text: 'Review',
        className: styles.Badge_review
    }
}

export const Badge = ({count, type}: IBadge) => {
    return (
        <div className={cls(styles.Badge, typeMap[type].className)}>
            <span>{count}</span>
            <span>{typeMap[type].text}</span>
        </div>
    )
}