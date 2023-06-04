import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const EyeOffIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
        d='M18.9154 16.0049C18.9154 17.6234 17.6042 18.9466 16.0003 18.9466C15.5086 18.9466 15.0403 18.8285 14.6423 18.6158L18.5876 14.6345C18.7984 15.0361 18.9154 15.5087 18.9154 16.0049Z'
        fill='currentColor'
      />
      <path
        d='M25.8461 7.30924L7.38363 25.9413C7.20802 26.1173 6.98559 26.2 6.76315 26.2C6.54071 26.2 6.30656 26.1173 6.14266 25.9413C5.84998 25.6459 5.80315 25.1722 6.03729 24.8296L6.07241 24.7823L23.3875 7.30924C23.411 7.28561 23.4344 7.26198 23.4461 7.23835C23.4695 7.21473 23.4929 7.1911 23.5046 7.16747L24.6051 6.05694C24.9563 5.71434 25.5066 5.71434 25.8461 6.05694C26.1973 6.39955 26.1973 6.96663 25.8461 7.30924Z'
        fill='currentColor'
      />
    </g>
    <path
      d='M16 6.25824H15.9883C11.0361 6.25824 6.57561 9.76703 4.07024 15.6505C3.97659 15.8749 3.97659 16.1348 4.07024 16.3475C4.87805 18.2484 5.89659 19.9035 7.06732 21.274L11.399 16.9027C11.3522 16.6192 11.3171 16.312 11.3171 16.0049C11.3171 13.394 13.4127 11.2792 16 11.2792C16.3044 11.2792 16.6088 11.3147 16.8898 11.3619L20.8 7.41484C19.3015 6.65992 17.6741 6.25824 16 6.25824Z'
      fill='currentColor'
    />
    <path
      d='M27.9297 15.6505C26.8527 13.1222 25.4127 11.0193 23.7151 9.45986L19.8634 13.3467C20.3668 14.1028 20.6712 15.0243 20.6712 16.0049C20.6712 18.604 18.5756 20.7187 16 20.7187C15.0283 20.7187 14.1151 20.4104 13.3658 19.9035L9.65461 23.6486C11.5629 25.0072 13.7288 25.7515 15.9883 25.7515H16C20.9639 25.7515 25.4244 22.2309 27.9297 16.3475C28.0234 16.1348 28.0234 15.8749 27.9297 15.6505Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeOffIcon);
export default ForwardRef;
