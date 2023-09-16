import React, { useState } from 'react';
import NumberButton from './Numbuttom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Definir un tipo para las operaciones
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

// Definir un tipo para los inputs activos
type ActiveInput = 'input1' | 'input2';

const Calculator: React.FC = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [result, setResult] = useState<number | string | null>(null);
  const [activeInput, setActiveInput] = useState<ActiveInput>('input1');

  const handleNumberClick = (value: number): void => {
    if (activeInput === 'input1') {
      setInput1(input1 + value.toString());
    } else {
      setInput2(input2 + value.toString());
    }
  };

  const handleClear = (): void => {
    setInput1('');
    setInput2('');
    setResult(null);
  };

  const handleMemory = (): void => {
    if (result !== null) {
      setInput1(result.toString());
      setInput2('');
      setResult(null);
    }
  };

  const handleOperation = (operation: Operation): void => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Entradas no válidas');
      return;
    }

    let res: number | string;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('División por cero');
          return;
        }
        res = num1 / num2;
        break;
      default:
        res = 'Operación no válida';
    }

    setResult(res);
  };

  const handleFocus = (e:any) => {
    setActiveInput(e.target.name as ActiveInput);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Número 1"
            value={input1}
            name="input1"
            onFocus={handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Número 2"
            value={input2}
            name="input2"
            onFocus={handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <Grid item xs={3} key={num}>
                <NumberButton value={num} onClick={handleNumberClick} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => handleOperation('add')}>
            Sumar
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleOperation('subtract')}>
            Restar
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleOperation('multiply')}>
            Multiplicar
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleOperation('divide')}>
            Dividir
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            Borrar
          </Button>
          <Button variant="contained" color="secondary" onClick={handleMemory}>
            Guardar en Memoria
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div>Resultado: {result}</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;