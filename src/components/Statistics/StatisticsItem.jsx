import PropTypes from 'prop-types';
import { StatisticsContainer } from './Statistics.styled';

const statisticsItemPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const StatisticsItem = props => {
  return (
    <StatisticsContainer backgroundRandomColor={props.backgroundRandomColor}>
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}%</span>
    </StatisticsContainer>
  );
};

StatisticsItem.protoTypes = statisticsItemPropTypes;

export default StatisticsItem;
export { statisticsItemPropTypes };
