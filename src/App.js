import './App.css';
import { Button } from './stories/Button.jsx';
import { Text } from './stories/Text.jsx';

function App() {
  const maintitle = 'Fight pollution with a better understanding of its effects on your health.';
  const baseline = 'NatureWise lets you learn about pollution and its various effects on you and your surroundings.'
  return (
    <div className="App">
      <div className='logo'>
        <img src={require("../src/img/black.png")} alt='NatureWise Logo'></img>
        <Text type='h1' label= {maintitle}></Text>
        <p className='baseline'>{baseline}</p>
      </div>
      <div className='buttons'>
        <Button primary='true' label='Log in'></Button>
        <Button primary='' label='Sign up'></Button>
      </div>
    </div>
  );
}

export default App;
