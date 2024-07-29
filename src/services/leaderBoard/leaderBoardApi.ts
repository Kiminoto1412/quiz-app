import api from '../api';

export const fetchLeaderboard = () => {
  return api.get(`/leaderboard`);
};
