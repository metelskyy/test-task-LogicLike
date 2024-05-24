import { MouseEvent, useState } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  onOptionClick?: (e: MouseEvent, value: string) => void;
};

export const Sidebar = ({ options, onOptionClick }: Props) => {
  const [activeValue, setActiveValue] = useState(options[0].value);

  const onClick = (e: MouseEvent, value: string) => {
    setActiveValue(value);
    onOptionClick?.(e, value);
  };

  const optionClassName = (optionValue: string) =>
    clsx(styles.option, optionValue === activeValue ? styles.active : '');

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <div
          onClick={(e) => onClick(e, option.value)}
          className={optionClassName(option.value)}
          key={option.value}
        >
          <Typography color={'inherit'}>{option.label}</Typography>
        </div>
      ))}
    </div>
  );
};
