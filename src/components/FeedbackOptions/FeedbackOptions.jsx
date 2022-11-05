import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={s.btn_container}>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={s.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;