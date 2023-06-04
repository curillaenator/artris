import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const ArrowRightIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      d='M27.4996 17.5069C27.4226 17.5847 27.1346 17.9137 26.864 18.1869C25.2859 19.8979 21.1652 22.6958 19.0096 23.552C18.6823 23.6886 17.8547 23.9794 17.411 24C16.9878 24 16.5834 23.9016 16.198 23.7077C15.7165 23.436 15.3325 23.0072 15.1202 22.5019C14.9849 22.1524 14.7725 21.1023 14.7725 21.0832C14.5616 19.9361 14.4467 18.0709 14.4467 16.0088C14.4467 14.0466 14.5616 12.2578 14.7347 11.0916C14.7536 11.071 14.966 9.76831 15.1973 9.32183C15.6205 8.50523 16.4481 8 17.334 8H17.411C17.9885 8.01909 19.2016 8.52579 19.2016 8.54342C21.2423 9.39967 25.2655 12.0624 26.8829 13.8322C26.8829 13.8322 27.3397 14.2875 27.5375 14.571C27.8458 14.9793 28 15.4845 28 15.9897C28 16.5537 27.8269 17.078 27.4996 17.5069Z'
      fill='currentColor'
    />
    <g opacity={0.4}>
      <path
        d='M10.9366 17.5871L6.00434 18.0233C4.89744 18.0233 4 17.1171 4 15.9994C4 14.8817 4.89744 13.9755 6.00434 13.9755L10.9366 14.4117C11.805 14.4117 12.509 15.1226 12.509 15.9994C12.509 16.8777 11.805 17.5871 10.9366 17.5871Z'
        fill='currentColor'
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ArrowRightIcon);
export default ForwardRef;
