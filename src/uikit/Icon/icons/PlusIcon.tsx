import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const PlusIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 4C16.5523 4 17 4.44772 17 5V15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H17V27C17 27.5523 16.5523 28 16 28C15.4477 28 15 27.5523 15 27V17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H15V5C15 4.44772 15.4477 4 16 4Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlusIcon);
export default ForwardRef;
