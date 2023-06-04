import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const GearIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M26.0828 17.896C26.512 18.124 26.8431 18.484 27.0761 18.844C27.5299 19.588 27.4931 20.5 27.0516 21.304L26.1932 22.744C25.7394 23.512 24.8932 23.992 24.0225 23.992C23.5933 23.992 23.115 23.872 22.7226 23.632C22.4037 23.428 22.0358 23.356 21.6434 23.356C20.4293 23.356 19.4115 24.352 19.3747 25.54C19.3747 26.92 18.2464 28 16.8361 28H15.1683C13.7457 28 12.6175 26.92 12.6175 25.54C12.593 24.352 11.5751 23.356 10.361 23.356C9.9563 23.356 9.5884 23.428 9.28181 23.632C8.88938 23.872 8.39884 23.992 7.98188 23.992C7.09891 23.992 6.25273 23.512 5.79898 22.744L4.9528 21.304C4.49905 20.524 4.47452 19.588 4.92827 18.844C5.12449 18.484 5.49239 18.124 5.90935 17.896C6.25273 17.728 6.47347 17.452 6.68195 17.128C7.29513 16.096 6.92722 14.74 5.88482 14.128C4.67074 13.444 4.27831 11.92 4.97733 10.732L5.79898 9.316C6.51026 8.128 8.03094 7.708 9.25728 8.404C10.3242 8.98 11.71 8.596 12.3354 7.576C12.5316 7.24 12.642 6.88 12.6175 6.52C12.593 6.052 12.7279 5.608 12.9609 5.248C13.4146 4.504 14.2363 4.024 15.1315 4H16.8606C17.7681 4 18.5898 4.504 19.0435 5.248C19.2643 5.608 19.4115 6.052 19.3747 6.52C19.3501 6.88 19.4605 7.24 19.6567 7.576C20.2822 8.596 21.6679 8.98 22.7471 8.404C23.9612 7.708 25.4941 8.128 26.1932 9.316L27.0148 10.732C27.7261 11.92 27.3337 13.444 26.1073 14.128C25.0649 14.74 24.697 16.096 25.3225 17.128C25.5187 17.452 25.7394 17.728 26.0828 17.896ZM12.5316 16.012C12.5316 17.896 14.0891 19.396 16.0145 19.396C17.9398 19.396 19.4605 17.896 19.4605 16.012C19.4605 14.128 17.9398 12.616 16.0145 12.616C14.0891 12.616 12.5316 14.128 12.5316 16.012Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(GearIcon);
export default ForwardRef;
