export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getAllMultiplicationMathProblems(): MultiplicationMath[] {
  const results = [];
  for (let i = 1; i++; i < 10) {
    for (let j = 1; j++; j < 10) {
      results.push({
        first: i,
        second: j,
        operator: '×'
      });
    }
  }
  shuffleArray(results);
  return results;
}

export type MathOperator = '×' | '÷' | '+' | '-';

export interface Math {
  first: number;
  second: number;
  operator: MathOperator;
}

export interface MultiplicationMath extends Math {
  operator: '×';
}

export interface DivisionMath extends Math {
  operator: '÷';
}
