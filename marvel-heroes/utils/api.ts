import { CharacterDataWrapper } from '@/types/marvels';
import md5 from 'md5';

const API_BASE_URL='https://gateway.marvel.com/v1/public';
const API_PUBLIC_KEY='4e5d0e3a8fc733bcf69c092b9db919a4';
const API_PRIVATE_KEY='c712c54e445b757566045f053bee935134c8725d';

const getTimeStamp = () => Date.now().toString();
console.log(getTimeStamp());
const getHash = (timeStamp: string) => md5(timeStamp+API_PRIVATE_KEY+API_PUBLIC_KEY)

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText)
    }
    const data = await response.json();
    return data.data as T;
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters?${query}`;
    const response = await fetch(url);
    return handleResponse<CharacterDataWrapper>(response);
}

export const searchCharacters = async (querySearch: string | null): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`;
    const response = await fetch(url);
    return handleResponse<CharacterDataWrapper>(response);
}