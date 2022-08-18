import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';


import { StatisticsSection } from './Statistics.styled';

const Statistics = props => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <StatisticsSection>
      {props.title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {props.stats.map(statsItem => (
          <StatisticsItem
            backgroundRandomColor={getRandomHexColor()}
            key={statsItem.id}
            label={statsItem.label}
            percentage={statsItem.percentage}
          />
        ))}
      </ul>
    </StatisticsSection>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string
};

export default Statistics;
