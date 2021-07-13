export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    episode: string[];
    status: Status;
    gender: Gender;
    location: { name: string; url: string };
}
