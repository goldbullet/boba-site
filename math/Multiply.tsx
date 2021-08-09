import React from 'react';
import {
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  Stack
} from '@chakra-ui/react';
import { getAllMultiplicationMathProblems } from '../utils';

export default () => {
  const problems = getAllMultiplicationMathProblems();
  return (
    <FormControl>
      <Box p={10}>
        {problems.map(({ first, second, operator }, i) => (
          <Stack key={`math-${i}`} p={1} direction="row">
            <FormLabel fontSize="2xl" width={100}>
              {first} {operator} {second} =
            </FormLabel>
            <Input variant="filled" width={20} />
          </Stack>
        ))}
      </Box>
    </FormControl>
  );
};
