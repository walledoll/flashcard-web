import cn from "classnames";
import styles from './Card.module.scss';

interface ICard {
    isStudied?: boolean;
    subtext: string;
    count: number;
}

export const Card = ({isStudied, subtext, count}: ICard) => {
    return(
        <div className={cn(styles.card, isStudied ? styles.studied : styles.toStudy)}>
            <h3 className={styles.title}>{isStudied ? "Studied" : "Due"}</h3>
            <div className={styles.count}>{count}</div>
            <p className={styles.subtext}>
                {subtext}
            </p>
        </div>
    )
}