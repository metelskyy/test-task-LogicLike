import { CourseCard } from '../../../entities/Course/CourseCard/CourseCard';
import { EmptyDataProvider, Sidebar } from '../../../shared/components';
import { LoadingProvider } from '../../../shared/components';
import { SIDEBAR_OPTIONS } from '../../../shared/constants/common';
import { useCoursesList } from '../model/useCoursesList';
import styles from './courses-list.module.scss';

export const CoursesList = () => {
  const { data, loading, onSidebarOptionClick } = useCoursesList();

  return (
    <div className={styles.container}>
      <Sidebar options={SIDEBAR_OPTIONS} onOptionClick={onSidebarOptionClick} />
      <LoadingProvider loading={loading}>
        <EmptyDataProvider loading={loading} dataLength={data.length}>
          <div className={styles.listContainer}>
            {data.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </EmptyDataProvider>
      </LoadingProvider>
    </div>
  );
};
