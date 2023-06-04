import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const ArrowLeftIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <g opacity={0.4}>
      <path
        d='M21.0634 14.4129L25.9957 13.9767C27.1026 13.9767 28 14.8829 28 16.0006C28 17.1182 27.1026 18.0244 25.9957 18.0244L21.0634 17.5882C20.195 17.5882 19.491 16.8774 19.491 16.0006C19.491 15.1223 20.195 14.4129 21.0634 14.4129Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M4.50036 14.4931C4.57745 14.4153 4.86544 14.0863 5.13599 13.8131C6.71415 12.1021 10.8348 9.3042 12.9904 8.44795C13.3177 8.31136 14.1453 8.02056 14.589 8C15.0122 8 15.4166 8.0984 15.802 8.29227C16.2835 8.56398 16.6675 8.99284 16.8798 9.49807C17.0151 9.84762 17.2275 10.8977 17.2275 10.9168C17.4384 12.0639 17.5533 13.9291 17.5533 15.9912C17.5533 17.9534 17.4384 19.7422 17.2653 20.9084C17.2464 20.929 17.034 22.2317 16.8028 22.6782C16.3795 23.4948 15.5519 24 14.6661 24H14.589C14.0115 23.9809 12.7984 23.4742 12.7984 23.4566C10.7577 22.6003 6.73451 19.9376 5.11708 18.1678C5.11708 18.1678 4.66036 17.7125 4.46254 17.429C4.15418 17.0207 4 16.5155 4 16.0103C4 15.4463 4.17309 14.922 4.50036 14.4931Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowLeftIcon);
export default ForwardRef;
