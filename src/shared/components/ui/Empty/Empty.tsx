import styles from './style.module.scss';
import emptyIcon from '../../../assets/images/empty.svg';
import { Typography } from '../Typography/Typography';

export const Empty = () => {
  return (
    <div className={styles.container}>
      <img width={150} height={150} src={emptyIcon} alt="empty" className={styles.icon} />
      <Typography color="inherit">Данные не найдены</Typography>
    </div>
  );
};
