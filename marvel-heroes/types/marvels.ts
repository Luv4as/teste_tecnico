export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail:{
        path: string,
        extension: string
    };
    comics:{
        available: number,
    }
}

// export interface Comic {
//     id: number,
//     title: string,
//     thumbnail:{
//         path: string,
//         extension: string
//     };

// }

export interface CharacterDataWrapper {
    results: Character[]
}

// export interface ComicDataWrapper {
//     results: Comic[]
// }