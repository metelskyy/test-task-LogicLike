import clsx from 'clsx';
import styles from './style.module.scss';

interface Props {
  width?: number;
  height?: number;
  className?: string;
  spinerClassName?: string;
}
export const Loader = ({ width, height, className, spinerClassName }: Props) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div style={{ width, height }} className={clsx(styles.loader, spinerClassName)} />
    </div>
  );
};
