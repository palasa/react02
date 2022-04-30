import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    ></IconButton>
  );
}
