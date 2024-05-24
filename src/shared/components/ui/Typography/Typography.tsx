import clsx from 'clsx';
import { CSSProperties, ReactNode } from 'react';
import styles from './style.module.scss';

type TypographyVariant = 'subtitle-1';
type ComponentVariant = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Color = 'dark-gray' | 'black' | 'white' | 'inherit';

type Props = {
  variant?: TypographyVariant;
  children: ReactNode | string | number;
  component?: ComponentVariant;
  className?: string;
  style?: CSSProperties;
  color?: Color;
};

export const Typography = ({
  variant = 'subtitle-1',
  children,
  component = 'span',
  className,
  style,
  color = 'dark-gray',
}: Props) => {
  const mergedClassName = clsx(styles[variant], styles[color], className);

  switch (component) {
    case 'h1':
      return (
        <h1 className={mergedClassName} style={style}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={mergedClassName} style={style}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={mergedClassName} style={style}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={mergedClassName} style={style}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={mergedClassName} style={style}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={mergedClassName} style={style}>
          {children}
        </h6>
      );
    case 'span':
      return (
        <span className={mergedClassName} style={style}>
          {children}
        </span>
      );
    case 'p':
      return (
        <p className={mergedClassName} style={style}>
          {children}
        </p>
      );

    default:
      return (
        <span className={mergedClassName} style={style}>
          {children}
        </span>
      );
  }
};
