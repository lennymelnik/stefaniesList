
import { PostRequest } from './postReq';
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks';

function App() {
  const hello = "Hes"
  return (
    <div className="App">
      <Header title="yes"/>
    <Tasks></Tasks>
      <h1> Hello my name is leonard</h1>
      <h>Must be in here { "hello" }</h>
      <Footer />

    
    </div>
  );
}

export default App;
