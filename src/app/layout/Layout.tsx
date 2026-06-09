import {Outlet} from "react-router-dom";
import {TabBar} from "@components/TabBar/TabBar.tsx";
import styles from './Layout.module.scss'

export const Layout = () => {
    return (
        <div className={styles.container}>
            <main className={styles.mainContainer}>
                <Outlet />
            </main>
            <TabBar/>
        </div>
    )
}