import axios from '../utils/axios';

import {IAuthorAction, IAuthorActionSuccess, IGetAuthorsSuccess} from '../models/author';

export const getAuthors = async () => {
    try {
        const {data} = await axios.get<IGetAuthorsSuccess>('/authors/all');

        return data.result;

    } catch (error: any) {
        return error.response.data.result ?? 'Could not get authors';
    }
}

export const addAuthor = async (author: IAuthorAction) => {
    try {
        const { data } = await axios.post<IAuthorActionSuccess>(`/authors/add`, author);

        return data.result;

    } catch (error: any) {
        return error.response.data.result ?? 'Could not create author';
    }
}
