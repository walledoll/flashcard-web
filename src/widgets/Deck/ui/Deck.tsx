import styles from "@pages/main/Home.module.scss";
import {ChevronDown, ChevronUp, Edit, Eye, List} from "lucide-react";
import {useState} from "react";

interface IInfo {
    newCards: number;
    toLearnCards: number;
    StudiedCards: number;
}

interface IDeck {
    info: IInfo;
    title: string;
}

export const Deck = ({title, info}: IDeck) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <div className={styles.Deck}>
                <h3>{title}</h3>
                <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? <ChevronUp/> : <ChevronDown/>}</button>
            </div>
            <div>
                <div className={styles.Badge}></div>
            </div>
            <div>
                {collapsed &&
                    <div className={styles.actions}>
                        <Eye/>
                        <Edit/>
                        <List/>
                    </div>
                }
            </div>

        </div>
    )
}