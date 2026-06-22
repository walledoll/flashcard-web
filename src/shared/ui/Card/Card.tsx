import type {ReactNode} from "react";
import {ChevronDown} from "lucide-react";

interface ICard extends HTMLDivElement {
    isCollapsed?: boolean;
    onCollapse?: () => void;
    children: ReactNode;
    className?: string;
}

export const Card = ({isCollapsed, onCollapse, children, className}: ICard) => {
    return (
        <div>
            <div>
                <button onClick={onCollapse}><ChevronDown/></button>
            </div>

        </div>
    )
}