import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const EyeOnIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
  <svg
    {...getAttributesByProps(props)}
    width={32}
    height={32}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <path
      opacity={0.4}
      d='M18.9171 15.9962C18.9171 17.5904 17.6059 18.8937 16.002 18.8937C14.3864 18.8937 13.0751 17.5904 13.0751 15.9962C13.0751 15.7984 13.0985 15.6134 13.1337 15.4272H13.1922C14.4917 15.4272 15.5454 14.4032 15.5922 13.1221C15.721 13.1 15.8615 13.0872 16.002 13.0872C17.6059 13.0872 18.9171 14.3904 18.9171 15.9962Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.8839 8.8553C24.9327 10.4367 26.6771 12.7535 27.9298 15.6509C28.0234 15.8709 28.0234 16.128 27.9298 16.3375C25.4244 22.1324 20.9639 25.6 16 25.6H15.9883C11.0361 25.6 6.57561 22.1324 4.07024 16.3375C3.97659 16.128 3.97659 15.8709 4.07024 15.6509C6.57561 9.85486 11.0361 6.40002 15.9883 6.40002H16C18.482 6.40002 20.8351 7.26112 22.8839 8.8553ZM11.3171 16C11.3171 18.56 13.4127 20.6429 16 20.6429C18.5756 20.6429 20.6712 18.56 20.6712 16C20.6712 13.4284 18.5756 11.3455 16 11.3455C13.4127 11.3455 11.3171 13.4284 11.3171 16Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeOnIcon);
export default ForwardRef;
