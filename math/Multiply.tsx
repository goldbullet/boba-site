import React from 'react';
import { Grid } from '@chakra-ui/react';
import MathProblem from './MathProblem';
import { getAllMultiplicationMathProblems } from '../utils';

export default () => {
  const problems = getAllMultiplicationMathProblems();
  return (
    <Grid
      autoFlow="row dense"
      templateColumns="repeat(3, 1fr)"
      gap={0.1}
      p={10}
      width={800}
    >
      {problems.map((math, i) => (
        <MathProblem key={`math-${i}`} {...math} />
      ))}
    </Grid>
  );
};
