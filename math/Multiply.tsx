import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { getAllMultiplicationMathProblems } from '../utils';

export default () => {
  const problems = getAllMultiplicationMathProblems();
  return (
    <Box>
      <Text>Multiplication</Text>
      {problems.map(({ first, second, operator }, i) => (
        <Text key={`math-${i}`}>
          {first} {operator} {second} =
        </Text>
      ))}
    </Box>
  );
};
