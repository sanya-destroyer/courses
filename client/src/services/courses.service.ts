import axios from '../utils/axios';

import {ICourseAction, ICourseActionSuccess, IGetCoursesSuccess} from '../models/course';

import sleep from "../utils/sleep";

export const getCourses = async () => {
    try {
        const {data} = await axios.get<IGetCoursesSuccess>('/courses/all');

        await sleep(250);

        return data.result;

    } catch (error: any) {
        // throw error;
        throw error?.response?.data?.result ?? "Could not get courses";
    }
}

export const addCourse = async (course: ICourseAction) => {
    try {
        const { data } = await axios.post<ICourseActionSuccess>('/courses/add', course);

        return data.result;

    } catch (error: any) {
        return error?.response?.data?.result ?? 'Could not create new course';
    }
}

export const updateCourse = async (id: string, course: ICourseAction) => {
    try {
        const { data } = await axios.put<ICourseActionSuccess>(`/courses/${id}`, course);

        return data.result;

    } catch (error: any) {
        const errors = error?.response?.data?.errors && [...error?.response?.data?.errors];

        if ( !errors ) {
            throw error?.response?.data?.result ?? 'Could not update this course';
        }

        throw errors;
    }
}

export const deleteCourse = async (id: string) => {
    try {
        const { data } = await axios.delete(`/courses/${id}`);

        return id;

    } catch(error: any) {
        throw error?.response?.data?.result ?? 'Could not delete course';
    }
}
