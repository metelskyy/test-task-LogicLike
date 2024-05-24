import { ENDPOINTS } from '../../constants/endpoints';
import { Course } from '../../types/courses';
import { request } from '../request';

export const getCourses = async () => {
  return await request<Course[]>({
    url: ENDPOINTS.GET_COURSES,
    method: 'GET',
  });
};
