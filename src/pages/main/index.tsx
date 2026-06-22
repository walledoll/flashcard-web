import styles from './Home.module.scss'
import {Card} from "@/widgets/Card";
import {Deck} from "@/widgets/Deck/ui/Deck.tsx";
import {Badge, BadgeType} from "@shared/ui/Badge";


export const Home = () => {
    return (
        <section className={styles.container}>
            <h3>Overview</h3>
            <div className={styles.cardContainer}>
                <Card isStudied subtext={''} count={134}/>
                <Card subtext={''} count={134}/>
            </div>
            <h3>Your Decks</h3>
            <div>
                <Deck info={{
                    newCards: 5,
                    toLearnCards: 6,
                    StudiedCards: 8
                }}/>
            </div>
            <div>
                <Badge count={9} type={BadgeType.NEW} />
                <Badge count={2} type={BadgeType.LEARNING}/>
                <Badge count={1} type={BadgeType.REVIEW} />
            </div>
        </section>
    )
}