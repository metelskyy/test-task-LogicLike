import { Loader } from '../../ui/Loader/Loader';
import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
  loading: boolean;
}

export const LoadingProvider = ({ children, loading }: Props) => {
  return loading ? (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  ) : (
    children
  );
};
