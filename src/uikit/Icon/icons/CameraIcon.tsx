import * as React from 'react';
import { Ref, forwardRef } from 'react';

import { getAttributesByProps } from '../utils/getAttributesByProps';
import { IconProps } from '../interfaces';

const CameraIcon = (props: IconProps, ref: Ref<SVGSVGElement>) => (
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
        d='M16 14.6815C15.22 14.6815 14.488 14.9811 13.924 15.5445C13.372 16.0959 13.072 16.8271 13.084 17.5822V17.5942C13.084 18.3734 13.384 19.1045 13.936 19.6559C14.488 20.2073 15.22 20.507 16 20.507C17.608 20.507 18.904 19.2004 18.916 17.5942C18.916 16.8151 18.616 16.0839 18.064 15.5325C17.512 14.9811 16.78 14.6815 16 14.6815Z'
        fill='currentColor'
      />
    </g>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.408 8.81999L22.528 9.0837C22.576 9.1676 22.66 9.22754 22.768 9.22754C25.648 9.22754 28 11.5769 28 14.4537V21.5738C28 24.4506 25.648 26.8 22.768 26.8H9.232C6.34 26.8 4 24.4506 4 21.5738V14.4537C4 11.5769 6.34 9.22754 9.232 9.22754C9.328 9.22754 9.424 9.17959 9.46 9.0837L9.532 8.93986C9.57337 8.85279 9.61583 8.76336 9.65893 8.67257C9.96592 8.02595 10.3055 7.31057 10.516 6.89013C11.068 5.81133 12.004 5.212 13.168 5.20001H18.82C19.984 5.212 20.932 5.81133 21.484 6.89013C21.673 7.26774 21.961 7.87601 22.2385 8.46226C22.2958 8.58318 22.3526 8.70316 22.408 8.81999ZM22.732 14.7654C22.132 14.7654 21.652 14.2859 21.652 13.6866C21.652 13.0872 22.132 12.5958 22.732 12.5958C23.332 12.5958 23.824 13.0872 23.824 13.6866C23.824 14.2859 23.332 14.7654 22.732 14.7654ZM19.324 20.9265C18.472 21.7776 17.296 22.305 16 22.305C14.74 22.305 13.564 21.8135 12.664 20.9265C11.776 20.0275 11.284 18.8528 11.284 17.5942C11.272 16.3476 11.764 15.1729 12.652 14.2739C13.552 13.3749 14.74 12.8835 16 12.8835C17.26 12.8835 18.448 13.3749 19.336 14.2619C20.224 15.1609 20.716 16.3476 20.716 17.5942C20.704 18.9008 20.176 20.0755 19.324 20.9265Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CameraIcon);
export default ForwardRef;
