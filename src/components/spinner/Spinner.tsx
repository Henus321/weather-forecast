import { ReactComponent as LoaderSpinner } from '../../assets/spinner.svg';
import React from 'react';

import './spinner.scss';

const Spinner: React.FC = () => {
  return <LoaderSpinner className="spinner" />;
};

export default Spinner;
