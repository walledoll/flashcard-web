import {NavLink} from "react-router-dom";
import {House, Plus, Settings} from "lucide-react";
import styles from './TabBar.module.scss'

export const TabBar = () => {
    return (
        <div className={styles.container}>
            <NavLink to={'/'}>
                <House />
            </NavLink>
            <NavLink to={'/new'}>
                <Plus />
            </NavLink>
            <NavLink to={'/settings'}>
                <Settings />
            </NavLink>
        </div>
    )
}