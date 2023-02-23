
import Input from './components/Input'
import Button from './components/Button';

import { Container, Content, Row  } from './styles';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handle = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+');
     
    }else{
      const sum =  Number(firstNumber)  +  Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('');
    }
  }

const handleMinusNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-');
   
  }else{
    const sub =  Number(firstNumber)  -  Number(currentNumber);
    setCurrentNumber(String(sub))
    setOperation('');
  }
}

const handleMultiplyNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('x');
   
  }else{
    const multi =  Number(firstNumber)  *  Number(currentNumber);
    setCurrentNumber(String(multi))
    setOperation('');
  }
}

const handleDivideNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/');
   
  }else{
    const div =  Number(firstNumber)  /  Number(currentNumber);
    setCurrentNumber(String(div))
    setOperation('');
  }
}

const handleEquals = () => {
  if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
     switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'x':
          handleMultiplyNumber();
          break;
        case '/':
          handleDivideNumber();
          break;
     }
}
}

const handleClear = (number) => {
  setCurrentNumber('0')
  setFirstNumber('0')
  setOperation('')
}

const handleAdd0 = (number) => {
    const num = currentNumber + 0;
    setCurrentNumber(num)
 
}

  return (
    <Container>
      <Content>
         <Input value={currentNumber}/>
         <Row>
           <Button label="x" onClick={handleMultiplyNumber } />
           <Button label="/" onClick={handleDivideNumber}/>
           <Button label="C" onClick={handleClear}/>
           <Button label="0" onClick={handleAdd0}/>
         </Row>
         <Row>
           <Button label="7" onClick={() => handle('7')}/>
           <Button label="8" onClick={() => handle('8')}/>
           <Button label="9" onClick={() => handle('9')}/>
           <Button label="-" onClick={handleMinusNumber}/>
         </Row>
         <Row>
           <Button label="4" onClick={() => handle('4')} />
           <Button label="5" onClick={() => handle('5')}/>
           <Button label="6" onClick={() => handle('6')}/>
           <Button label="+" onClick={handleSumNumber}/>
         </Row>
         <Row>
           <Button label="1" onClick={() => handle('1')}/>
           <Button label="2" onClick={() => handle('2')}/>
           <Button label="3" onClick={() => handle('3')}/>
           <Button label="=" onClick={handleEquals}/>
         </Row>
         
          
         
      </Content>
   
    </Container>
  );
}

export default App;
