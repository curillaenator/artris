import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const CalendarIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
      d='M5.20007 21.844V12.7084H26.8001V21.9172C26.8001 25.684 24.4291 28 20.6354 28H11.3529C7.59481 28 5.20007 25.636 5.20007 21.844ZM11.1514 18.892C10.606 18.9172 10.1555 18.484 10.1318 17.9332C10.1318 17.3812 10.5586 16.9252 11.104 16.9C11.6374 16.9 12.0761 17.3212 12.0879 17.86C12.1116 18.4132 11.6849 18.8692 11.1514 18.892ZM16.0238 18.892C15.4785 18.9172 15.028 18.484 15.0043 17.9332C15.0043 17.3812 15.4311 16.9252 15.9764 16.9C16.5099 16.9 16.9485 17.3212 16.9604 17.86C16.9841 18.4132 16.5573 18.8692 16.0238 18.892ZM20.8607 23.308C20.3154 23.296 19.8767 22.84 19.8767 22.288C19.8649 21.736 20.3035 21.2812 20.8488 21.2692H20.8607C21.4179 21.2692 21.8684 21.7252 21.8684 22.288C21.8684 22.852 21.4179 23.308 20.8607 23.308ZM15.0043 22.288C15.028 22.84 15.4785 23.2732 16.0238 23.248C16.5573 23.2252 16.9841 22.7692 16.9604 22.2172C16.9485 21.6772 16.5099 21.256 15.9764 21.256C15.4311 21.2812 15.0043 21.736 15.0043 22.288ZM10.12 22.288C10.1437 22.84 10.5942 23.2732 11.1395 23.248C11.673 23.2252 12.0998 22.7692 12.0761 22.2172C12.0642 21.6772 11.6256 21.256 11.0921 21.256C10.5468 21.2812 10.12 21.736 10.12 22.288ZM19.8886 17.9212C19.8886 17.3692 20.3154 16.9252 20.8607 16.9132C21.3942 16.9132 21.821 17.344 21.8447 17.8732C21.8565 18.4252 21.4297 18.8812 20.8963 18.892C20.3509 18.904 19.9004 18.484 19.8886 17.9332V17.9212Z'
      fill='currentColor'
    />
    <path
      d='M11.5658 9.508C12.0875 9.508 12.4787 9.1132 12.4787 8.584V4.9252C12.4787 4.396 12.0875 4 11.5658 4C11.0442 4 10.653 4.396 10.653 4.9252V8.584C10.653 9.1132 11.0442 9.508 11.5658 9.508Z'
      fill='currentColor'
    />
    <path
      d='M20.434 9.508C20.9438 9.508 21.3468 9.1132 21.3468 8.584V4.9252C21.3468 4.396 20.9438 4 20.434 4C19.9124 4 19.5211 4.396 19.5211 4.9252V8.584C19.5211 9.1132 19.9124 9.508 20.434 9.508Z'
      fill='currentColor'
    />
    <path
      opacity={0.4}
      d='M12.4786 8.58397C12.4786 9.11317 12.0874 9.50797 11.5658 9.50797C11.0442 9.50797 10.653 9.11317 10.653 8.58397V5.78792C7.89122 6.01741 5.95921 7.62533 5.39023 10.1558C5.27879 10.6058 5.21951 12.0038 5.2041 12.7082H26.7958C26.7804 12.0026 26.7211 10.5938 26.6109 10.1558C26.0418 7.64784 24.0857 6.02904 21.3472 5.78784L21.3468 8.58397C21.3468 9.11317 20.9437 9.50797 20.434 9.50797C19.9123 9.50797 19.5211 9.11317 19.5211 8.58397V5.78784H12.4786V8.58397Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CalendarIcon);
export default ForwardRef;
