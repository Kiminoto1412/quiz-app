import {create} from 'zustand';

interface LeaderboardEntry {
  name: string;
  score: number;
}

interface QuizStore {
  leaderboard: LeaderboardEntry[];
  addEntry: (entry: LeaderboardEntry) => void;
}

export const useQuizStore = create<QuizStore>(set => ({
  leaderboard: [],
  addEntry: (entry: LeaderboardEntry) =>
    set(state => {
      const updatedLeaderboard = [...state.leaderboard, entry].sort(
        (a, b) => b.score - a.score,
      );
      return {leaderboard: updatedLeaderboard};
    }),
}));
