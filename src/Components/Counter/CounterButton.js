import { IconButton } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CounterConsumer } from './counterStore';

export const CounterButton = (props) => {
  const { type } = props;

  return (
    <CounterConsumer>
      {({ onIncreaseCount, onDecreaseCount }) => {
        return (
          <IconButton
            onClick={type === 'decrement' ? onDecreaseCount : onIncreaseCount}
            icon={type === 'decrement' ? <FaMinus /> : <FaPlus />}
          />
        );
      }}
    </CounterConsumer>
  );
};
