import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const ArrowUpArrowDownIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
        d='M22.3537 14.9315C22.973 14.9315 23.4744 14.4227 23.4744 13.7941L23.7819 8.29952C23.7819 7.49849 23.1429 6.84998 22.3537 6.84998C21.5644 6.84998 20.924 7.49849 20.924 8.29952L21.2329 13.7941C21.2329 14.4227 21.7343 14.9315 22.3537 14.9315Z'
        fill='currentColor'
      />
      <path
        d='M9.64665 17.0686C9.02731 17.0686 8.52595 17.5774 8.52595 18.206L8.21698 23.7005C8.21698 24.5015 8.85738 25.15 9.64665 25.15C10.4359 25.15 11.0749 24.5015 11.0749 23.7005L10.7674 18.206C10.7674 17.5774 10.266 17.0686 9.64665 17.0686Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M27.795 18.2624C27.6026 17.9146 27.3006 17.6367 26.9439 17.4827C26.6967 17.3844 25.9552 17.2319 25.9426 17.2319C25.1322 17.0779 23.8149 16.9953 22.36 16.9953C20.9738 16.9953 19.7113 17.0779 18.8883 17.2034C18.8743 17.2176 17.9558 17.3715 17.6398 17.5383C17.0626 17.8448 16.7059 18.4434 16.7059 19.0848V19.1404C16.7199 19.558 17.0766 20.4346 17.0907 20.4346C17.6946 21.9112 19.5737 24.8231 20.8236 25.9919C20.8236 25.9919 21.1452 26.3225 21.3446 26.4651C21.6325 26.6888 21.9892 26.8 22.3473 26.8C22.7448 26.8 23.1141 26.6746 23.4175 26.438C23.4722 26.3824 23.7054 26.1729 23.8978 25.979C25.1041 24.8359 27.0815 21.8556 27.684 20.2963C27.7809 20.0597 27.9874 19.4596 28 19.1404C28 18.8339 27.9326 18.5403 27.795 18.2624Z'
      fill='currentColor'
    />
    <path
      d='M11.1764 6.00815C11.1764 6.00815 10.8548 5.67748 10.6554 5.53353C10.3661 5.31118 10.0094 5.20001 9.65408 5.20001C9.25523 5.20001 8.88447 5.32544 8.58253 5.56203C8.52776 5.61762 8.29463 5.82714 8.10223 6.0224C6.89445 7.16406 4.91847 10.1443 4.31458 11.705C4.21909 11.9416 4.01264 12.5402 4 12.8609C4 13.1659 4.06741 13.4595 4.20504 13.7375C4.39744 14.0852 4.69939 14.3646 5.0561 14.5171C5.30328 14.6154 6.04339 14.768 6.05743 14.768C6.86777 14.9219 8.18509 15.0045 9.64004 15.0045C11.0262 15.0045 12.2887 14.9219 13.1117 14.7965C13.1257 14.7822 14.0442 14.6297 14.3602 14.4615C14.936 14.1551 15.2941 13.5565 15.2941 12.9165V12.8609C15.2801 12.4433 14.922 11.5653 14.9093 11.5653C14.3054 10.0887 12.4249 7.17831 11.1764 6.00815Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowUpArrowDownIcon);
export default ForwardRef;
