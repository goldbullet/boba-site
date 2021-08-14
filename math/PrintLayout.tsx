import React from 'react';
import { Grid } from '@chakra-ui/react';
import MathProblem from './MathProblem';
import { Math } from '../utils';

function renderProblemset(getProblems: () => Math[]) {
  return (
    <Grid
      autoFlow="row dense"
      templateColumns="repeat(4, 1fr)"
      m={10}
      width={1000}
      sx={{
        '@page': { margin: 0 },
        '@media print': {
          'page-break-after': 'always'
        }
      }}
    >
      {getProblems().map((math, i) => (
        <MathProblem key={`math-${i}`} {...math} />
      ))}
    </Grid>
  );
}

export default ({ getProblems }: { getProblems: () => Math[] }) => {
  return (
    <Grid autoFlow="row dense" gap={100}>
      {renderProblemset(getProblems)}
      {renderProblemset(getProblems)}
    </Grid>
  );
};
