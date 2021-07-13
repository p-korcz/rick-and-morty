import React from 'react';

import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { HttpStatusCode } from '../data-model/http-status-code.enum';

export const handleNoFoundOrConnected = (
    error: AxiosError,
): React.ReactText | void => {
    if (error.response?.status === HttpStatusCode.NOT_FOUND) {
        return toast.info('No characters found');
    }
    if (error.message) {
        return toast.error(error.message);
    }
};
