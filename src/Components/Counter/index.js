import { HStack } from '@chakra-ui/react';
import CounterBox from './CounterBox';
import { CounterButton } from './CounterButton';
import { CounterProvider } from './counterStore';

function Counter() {
  return (
    <CounterProvider>
      <HStack>
        <CounterButton type="decrement" />
        <CounterBox />
        <CounterButton type="increment" />
      </HStack>
    </CounterProvider>
  );
}

export default Counter;
