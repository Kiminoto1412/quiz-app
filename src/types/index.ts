export interface Question {
    id: string;
    question: string;
    answers: string[];
    correctAnswer: string;
  }
  
  export interface LeaderboardEntry {
    name: string;
    score: number;
  }
  