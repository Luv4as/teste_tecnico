export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail:{
        path: string,
        extension: string
    };
    comics:{
        available: number
    }
    stories:{
        available: number
    }
    events:{
        available: number
    }
}

export interface CharacterDataWrapper {
    results: Character[]
}