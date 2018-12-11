export class Category {
    id: number;
    name: string;
}


export class Movie {
    id: number;
    title: string;
    description: string;
    categoryId: Category;
}

