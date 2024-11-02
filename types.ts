export interface Card {
  question: string,
  answer: string,
  category: string,
  compartment: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  nextTest: Date | null,
}