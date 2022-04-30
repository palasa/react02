import { CounterConsumer } from './counterStore';
import { Box } from '@chakra-ui/react';

const CounterBox = () => {
  return (
    <CounterConsumer>
      {({ count }) => {
        return <Box width={100}>{count}</Box>;
      }}
    </CounterConsumer>
  );
};

export default CounterBox;
