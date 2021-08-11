import React from 'react';
import { Grid } from '@chakra-ui/react';
import MathProblem from './MathProblem';
import { getAllMultiplicationMathProblems } from '../utils';

export default () => {
  const problems = getAllMultiplicationMathProblems();
  return (
    <Grid
      autoFlow="row dense"
      templateColumns="repeat(4, 1fr)"
      p={10}
      width={1000}
    >
      {problems.map((math, i) => (
        <MathProblem key={`math-${i}`} {...math} />
      ))}
    </Grid>
  );
};
