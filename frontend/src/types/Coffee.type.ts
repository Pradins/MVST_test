export enum CoffeeVariety {
    ARABIC = 'arabic',
    ROBUSTA = 'robusta',
}

export type CoffeeItem = {
    id: string,
    title: string,
    image: string,
    variety: CoffeeVariety
};
