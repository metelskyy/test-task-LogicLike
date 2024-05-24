import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
