import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const ArrowUpIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
        d='M17.5871 21.0634L18.0233 25.9957C18.0233 27.1026 17.1171 28 15.9994 28C14.8817 28 13.9756 27.1026 13.9756 25.9957L14.4118 21.0634C14.4118 20.195 15.1226 19.491 15.9994 19.491C16.8777 19.491 17.5871 20.195 17.5871 21.0634Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M17.5069 4.50036C17.5847 4.57745 17.9137 4.86544 18.1869 5.13599C19.8979 6.71415 22.6958 10.8348 23.552 12.9904C23.6886 13.3177 23.9794 14.1453 24 14.589C24 15.0122 23.9016 15.4166 23.7077 15.802C23.436 16.2835 23.0072 16.6675 22.5019 16.8798C22.1524 17.0151 21.1023 17.2275 21.0832 17.2275C19.9361 17.4384 18.0709 17.5533 16.0088 17.5533C14.0466 17.5533 12.2578 17.4384 11.0916 17.2653C11.071 17.2464 9.76831 17.034 9.32183 16.8028C8.50523 16.3795 8 15.5519 8 14.6661V14.589C8.01909 14.0115 8.52579 12.7984 8.54342 12.7984C9.39967 10.7577 12.0624 6.73451 13.8322 5.11708C13.8322 5.11708 14.2875 4.66036 14.571 4.46254C14.9793 4.15418 15.4845 4 15.9897 4C16.5537 4 17.078 4.17309 17.5069 4.50036Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowUpIcon);
export default ForwardRef;
