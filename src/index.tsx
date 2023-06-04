import React from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from '@src/application';

import './index.scss';

const root = document.querySelector('#root') as Element;

ReactDOM.createRoot(root).render(<Application />);
