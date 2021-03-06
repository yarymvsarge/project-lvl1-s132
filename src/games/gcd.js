import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 100;

const gcd = (num1, num2) => {
  const bigger = Math.max(num1, num2);
  const smaller = Math.min(num1, num2);
  const remainder = bigger % smaller;
  return (remainder === 0) ? smaller : gcd(smaller, remainder);
};

const getAnswer = (num1, num2) => gcd(num1, num2);

const generateQuestionAndAnswer = () => {
  const number1 = generateRandom(maxNumber);
  const number2 = generateRandom(maxNumber);
  const question = `${number1} ${number2}`;
  const answer = String(getAnswer(number1, number2));
  return cons(question, answer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => play(description, generateQuestionAndAnswer);
