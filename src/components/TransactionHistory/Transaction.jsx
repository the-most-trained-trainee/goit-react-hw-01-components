import PropTypes from 'prop-types';

const transactionPropTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const Transaction = props => {
  const { type, amount, currency } = props;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = transactionPropTypes;

export default Transaction;
export { transactionPropTypes };
