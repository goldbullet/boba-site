import React from 'react';
import { getAllMultiplicationMathProblems } from '../utils';
import PrintLayout from './PrintLayout';

export default () => {
  return <PrintLayout getProblems={getAllMultiplicationMathProblems} />;
};
