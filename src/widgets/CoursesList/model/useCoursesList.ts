import { useSearchParams } from 'react-router-dom';
import { useCourses } from '../../../shared/api/courses/hooks';
import { MouseEvent } from 'react';

export const useCoursesList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    tag: '',
  });
  const tagSearchParam = searchParams.get('tag');

  const { data, loading, error } = useCourses();

  const onSidebarOptionClick = (_e: MouseEvent, value: string) => {
    setSearchParams({ tag: value });
  };

  return {
    data: tagSearchParam ? data.filter((course) => course.tags.includes(tagSearchParam)) : data,
    loading,
    error,
    onSidebarOptionClick,
  };
};
