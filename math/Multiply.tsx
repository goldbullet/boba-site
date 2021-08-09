import React from 'react';
import { Text, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { getAllMultiplicationMathProblems } from '../utils';

export default () => {
  const problems = getAllMultiplicationMathProblems();
  return (
    <FormControl>
      <Box p={10}>
        {problems.map(({ first, second, operator }, i) => (
          <Text key={`math-${i}`} p={1} fontSize="2xl">
            <FormLabel>
              {first} {operator} {second} =
            </FormLabel>
            <Input variant="filled" />
          </Text>
        ))}
      </Box>
    </FormControl>
  );
};
