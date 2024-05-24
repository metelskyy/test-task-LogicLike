import { useEffect, useState } from 'react';
import { getCourses } from './api';
import { Course } from '../../types/courses';
import { AxiosError } from 'axios';

export const useCourses = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | Error | undefined>(undefined);
  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCourses();

        setData(data.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        } else {
          setError(error as Error);
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data, loading, error };
};
