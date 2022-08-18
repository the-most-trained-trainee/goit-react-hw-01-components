import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {props.stats.map(statsItem => (
          <li className="item" key={statsItem.id}>
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};

export default Statistics;
