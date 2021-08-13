import React from 'react';
import { Grid } from '@chakra-ui/react';
import MathProblem from './MathProblem';
import { getAllMultiplicationMathProblems } from '../utils';

function renderProblemset() {
  return (
    <Grid
      autoFlow="row dense"
      templateColumns="repeat(4, 1fr)"
      p={10}
      width={1000}
      sx={{
        '@media print': {
          'page-break-after': 'always'
        }
      }}
    >
      {getAllMultiplicationMathProblems().map((math, i) => (
        <MathProblem key={`math-${i}`} {...math} />
      ))}
    </Grid>
  );
}

export default () => {
  return (
    <Grid autoFlow="column dense">
      {renderProblemset()}
      {renderProblemset()}
    </Grid>
  );
};
