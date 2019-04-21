import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './TextInput.scss';

class TextInput extends Component {
  
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    className: undefined,
    label: undefined,
    name: undefined,
    onChange: undefined,
    placeholder: undefined
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  blurTextInput = () => {
    this.textInput.current.blur();
  }

  render () {
    const { className, label, name, onChange, placeholder } = this.props;

    const componentClassName = classNames(styles.component, className);

    return (
      <div className={componentClassName}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}

        <input
          ref={this.textInput}
          className={styles.input}
          id={name}
          maxLength="30"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
        />
      </div>
    );
  }
};

export default TextInput;


// import PropTypes from 'prop-types';
// import React from 'react';
// import classNames from 'classnames';

// import styles from './TextInput.scss';

// const TextInput = props => {
//   const { className, label, name, onChange, placeholder } = props;

// 	const componentClassName = classNames(styles.component, className);

// 	return (
//     <div className={componentClassName}>
//       {label && (
//         <label className={styles.label} htmlFor={name}>
//           {label}
//         </label>
//       )}

//       <input
//         className={styles.input}
//         id={name}
//         maxLength="30"
//         name={name}
//         onChange={onChange}
//         placeholder={placeholder}
//         type="text"
//       />
//     </div>
//   );
// };

// TextInput.propTypes = {
// 	className: PropTypes.string,
// 	label: PropTypes.string,
// 	name: PropTypes.string,
// 	onChange: PropTypes.func,
// 	placeholder: PropTypes.string
// };

// TextInput.defaultProps = {
// 	className: undefined,
// 	label: undefined,
// 	name: undefined,
// 	onChange: undefined,
// 	placeholder: undefined
// };

// export default TextInput;
