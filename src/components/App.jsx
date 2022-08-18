
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import styled from 'styled-components';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* Task 1
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}/>

      Task 2 

      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} /> */}

      {/* Task 3 */}
      <FriendList friends={friends} />
      {/* Task 4 */}
      {/* <TransactionHistory items={transactions} /> */}
      
    </div>
  );
};
