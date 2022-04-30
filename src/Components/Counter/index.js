import { Box, HStack, IconButton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function Counter () {


  const [count, setCount] = useState(0)

  useEffect(() => {
    // 相当于 ComponentDidMount + ComponentDidUpdate
    console.log('useEffect!!!')
    document.title = `当前的数量为${count}`
  })

  return (
    <HStack>
      <IconButton onClick={()=>{setCount(count-1)}} icon={<FaMinus />} />
      <Box width={100}>{count}</Box>
      <IconButton onClick={()=>{setCount(count+1)}} icon={<FaPlus />} />
    </HStack>
  );
  
}

export default Counter;
