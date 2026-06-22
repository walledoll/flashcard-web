export enum BadgeType {
    NEW = 'new',
    LEARNING = 'learning',
    REVIEW = 'review'
}

export interface IBadge {
    count: number;
    type: BadgeType;
}
