import React, { SyntheticEvent, FC } from 'react';

export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export type Icons = 'string';

export interface IconProps {
  /** уникальный id элемента */
  id?: string;
  /** обработчик для иконки */
  onClick?: (e: SyntheticEvent<HTMLImageElement | SVGElement>) => void;
  /** размер иконки, по дефолту "m" */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  /** классы для иконки */
  className?: string;
}

export type IconComponent = FC<IconProps>;
