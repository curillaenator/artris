import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const MessageIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M4 16.018C4 9.706 9.052 4.01801 16.024 4.01801C22.84 4.01801 28 9.59801 28 15.982C28 23.386 21.952 27.982 16 27.982C14.032 27.982 11.8492 27.454 10.0972 26.422C9.484 26.05 8.968 25.774 8.308 25.99L5.884 26.71C5.272 26.902 4.72 26.422 4.9 25.774L5.704 23.086C5.836 22.714 5.812 22.318 5.62 22.006C4.588 20.11 4 18.034 4 16.018ZM15.9766 17.5661C15.1246 17.5541 14.4406 16.8701 14.4406 16.0181C14.4406 15.1781 15.1366 14.4821 15.9766 14.4941C16.8286 14.4941 17.5126 15.1781 17.5126 16.0301C17.5126 16.8701 16.8286 17.5661 15.9766 17.5661ZM10.4441 17.5661C9.60409 17.5661 8.90809 16.8701 8.90809 16.0301C8.90809 15.1781 9.59209 14.4941 10.4441 14.4941C11.2961 14.4941 11.9801 15.1781 11.9801 16.0301C11.9801 16.8701 11.2961 17.5541 10.4441 17.5661ZM19.9723 16.0301C19.9723 16.8701 20.6563 17.5661 21.5083 17.5661C22.3603 17.5661 23.0443 16.8701 23.0443 16.0301C23.0443 15.1781 22.3603 14.4941 21.5083 14.4941C20.6563 14.4941 19.9723 15.1781 19.9723 16.0301Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MessageIcon);
export default ForwardRef;