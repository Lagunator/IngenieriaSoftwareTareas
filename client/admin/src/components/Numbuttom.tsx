import { FunctionComponent as FC } from 'react';
import Button from '@mui/material/Button';

type NumButtonProps = {
  value: number;
  onClick: (num: number) => void;
};

const NumberButton: FC<NumButtonProps> = ({ value, onClick }) => {
  const handleClick = () => onClick(value);

  return (
    <Button variant="contained" onClick={handleClick}>
      {value}
    </Button>
  );
};

export default NumberButton;
