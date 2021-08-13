import React from 'react';
import { Grid } from '@chakra-ui/react';
import MathProblem from './MathProblem';
import { getAllMultiplicationMathProblems } from '../utils';

function renderProblemset() {
  return (
    <Grid
      autoFlow="row dense"
      templateColumns="repeat(4, 1fr)"
      mt={10}
      ml={10}
      mr={10}
      mb={10}
      width={1000}
      sx={{
        '@page': { margin: 0 },
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
    <Grid autoFlow="row dense" gap={100}>
      {renderProblemset()}
      {renderProblemset()}
    </Grid>
  );
};
