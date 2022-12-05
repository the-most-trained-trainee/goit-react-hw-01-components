import PropTypes from 'prop-types';
import { StatisticsSection, StatisticsContainer } from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsContainer key={id} backgroundColor={getRandomHexColor()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatisticsContainer>
        ))}
      </ul>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
