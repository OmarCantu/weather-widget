import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './Widget.scss';

const Widget = props => {
  const { className } = props;
  const cn = classNames(styles.widget, className);

  return (
    <div className={cn}>
      hey
    </div>
  )
}

Widget.propTypes = {
  className: PropTypes.string
};

Widget.defaultProps = {
  className: undefined
};

export default Widget;