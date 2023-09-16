import { FC } from 'react';
import Button from '@mui/material/Button';

interface NumberButtonProps {
  value: number;
  onClick: (value: number) => void;
}

const NumberButton: FC<NumberButtonProps> = ({ value, onClick }) => {
  return (
    <Button variant="contained" onClick={() => onClick(value)}>
      {value}
    </Button>
  );
};

export default NumberButton;