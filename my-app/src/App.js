import logo from './logo.svg';
import './App.css';
import data from ./test.json'

function App() {
  const[res, setRes] = useState(data);
  return (

    <Typography variant="h1" component="h2">
  building: {data.Building}
</Typography>;
  );
}

export default App;
