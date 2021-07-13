import axios from 'axios';

import { SearchState } from '../data-model/search.type';
import { Endpoint } from '../data-model/endpoint.enum';
import { handleNoFoundOrConnected } from './toast-error-handler';

class CharacterQueryParams {
    id?: string;
    params?: SearchState;
}

class CharacterApi {
    constructor(
        private readonly axiosClient = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}${Endpoint.CHARACTER}`,
        }),
    ) {}

    async getCharacters(
        characterQueryParams: CharacterQueryParams = {},
    ): Promise<{ [key: string]: any }> {
        const { id, params } = characterQueryParams;
        try {
            const characters = await this.axiosClient.get(id!, {
                params: { ...params },
            });
            return characters;
        } catch (error) {
            handleNoFoundOrConnected(error);
            return { data: { results: [] } };
        }
    }
}

export default new CharacterApi();
