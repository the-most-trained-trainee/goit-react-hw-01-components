import PropTypes from 'prop-types';
import { StatisticsContainer } from './Statistics.styled';

const statisticsItemPropTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const StatisticsItem = props => {
  const { label, percentage } = props;
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <StatisticsContainer backgroundColor={getRandomHexColor()}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsContainer>
  );
};

StatisticsItem.propTypes = statisticsItemPropTypes;

export default StatisticsItem;
export { statisticsItemPropTypes };
