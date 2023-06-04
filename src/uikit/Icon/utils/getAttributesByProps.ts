import cn from 'classnames';

import { IconProps } from '../interfaces';
import styles from '../icon.module.scss';

export const getAttributesByProps = (props: IconProps) => {
  const { size = 'm', className, ...rest } = props;

  return {
    ...rest,
    className: cn(styles.icon, styles[`_size_${size}`], className),
  };
};
