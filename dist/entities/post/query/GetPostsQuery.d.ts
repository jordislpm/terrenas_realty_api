export type GetPostsQuery = {
    type: 'buy' | 'rent';
    city?: string;
    property: 'apartment' | 'house' | 'condo' | 'land';
    minPrice: string;
    maxPrice: string;
    bedroom: string;
};
//# sourceMappingURL=GetPostsQuery.d.ts.map