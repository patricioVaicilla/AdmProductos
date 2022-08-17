import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/:id/edit" element={<Update />} />
          <Route exact path="/:id" element={<Detail />} />
          <Route path="/" element={<Main />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
