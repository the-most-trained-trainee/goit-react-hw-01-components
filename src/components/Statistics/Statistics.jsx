import PropTypes from 'prop-types';
import StatisticsItem, { statisticsItemPropTypes } from './StatisticsItem';
import { StatisticsSection } from './Statistics.styled';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <StatisticsSection>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(statsItem => (
          <StatisticsItem
            key={statsItem.id}
            label={statsItem.label}
            percentage={statsItem.percentage}
          />
        ))}
      </ul>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(statisticsItemPropTypes)).isRequired,
};

export default Statistics;
