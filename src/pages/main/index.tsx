import styles from './Home.module.scss'
import {Card} from "@components/Card";

export const Home = () => {
    return (
        <section className={styles.container}>
            <h3>Overview</h3>
            <div className={styles.cardContainer}>
                <Card isStudied subtext={''} count={134}/>
                <Card subtext={''} count={134}/>
            </div>
            <h3>Your Decks</h3>
            <div></div>
        </section>
    )
}