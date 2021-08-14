import React from 'react';
import { getAllDivisionMathProblems } from '../utils';
import PrintLayout from './PrintLayout';

export default () => {
  return <PrintLayout getProblems={getAllDivisionMathProblems} />;
};
