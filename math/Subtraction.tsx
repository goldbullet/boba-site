import React from 'react';
import { getAllSubtractionMathProblems } from '../utils';
import PrintLayout from './PrintLayout';

export default () => {
  return <PrintLayout getProblems={getAllSubtractionMathProblems} />;
};
