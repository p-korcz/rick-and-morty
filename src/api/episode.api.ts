import axios from 'axios';
type CharacterEpisode = { name: string };

class EpisodeApi {
    constructor(private readonly axiosClient = axios) {}

    async getEpisodeName(rawLocationEndpoint: string): Promise<string> {
        try {
            const location = (await this.axiosClient({
                baseURL: rawLocationEndpoint,
            })) as { data: CharacterEpisode };

            return location.data.name;
        } catch {
            return '';
        }
    }
}

export default new EpisodeApi();
