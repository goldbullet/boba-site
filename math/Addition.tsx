import React from 'react';
import { getAllAdditionMathProblems } from '../utils';
import PrintLayout from './PrintLayout';

export default () => {
  return <PrintLayout getProblems={getAllAdditionMathProblems} />;
};
