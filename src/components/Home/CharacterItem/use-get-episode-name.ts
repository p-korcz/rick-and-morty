import { useEffect, useState } from 'react';

import episodeApi from '../../../api/episode.api';
import { Character } from '../../../data-model/character.interface';

export const useGetEpisodeName = ({
    episode,
}: {
    episode: Character['episode'];
}): string => {
    const [episodeName, setEpisodeName] = useState<string>('');

    const getEpisodeName = async (episode: string[]): Promise<void> => {
        const [seenIn] = episode;
        const seenInName = await episodeApi.getEpisodeName(seenIn);
        setEpisodeName(seenInName);
    };

    useEffect(() => {
        if (episode.length) {
            getEpisodeName(episode);
        }
    }, [episode]);

    return episodeName;
};
