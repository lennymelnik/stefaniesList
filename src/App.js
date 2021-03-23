
import { PostRequest } from './postReq';
import Header from './components/Header'
import Footer from './components/Footer'
import TasksHome from './components/TasksHome';

function App() {
  return (
    <div className="container" >
      <Header />
    <TasksHome></TasksHome>
        <Footer />

    
    </div>
  );
}

export default App;
