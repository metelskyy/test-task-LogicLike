import { memo } from 'react';
import { Typography } from '../../../shared/components';
import { Course } from '../../../shared/types/courses';
import styles from './style.module.scss';

interface Props {
  course: Course;
}

export const CourseCard = memo(({ course }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} style={{ backgroundColor: course.bgColor }}>
        <img
          width={144}
          height={144}
          className={styles.image}
          src={course.image}
          alt={course.name}
        />
      </div>

      <div className={styles.titleContainer}>
        <Typography className={styles.title}>{course.name}</Typography>
      </div>
    </div>
  );
});
