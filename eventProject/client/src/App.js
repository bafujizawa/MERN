import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllEvents from './components/AllEvents'
import AddEvent from './components/AddEvent'
import ViewEvent from './components/ViewEvent'
import EventCalendar from './components/EventCalendar'
import ViewByDate from './components/ViewByDate'


function App() {
  return (
    <div className="App">


      <Routes>
        <Route exact path='/' element={<AllEvents />}></Route>
        <Route exact path='/event/add' element={<AddEvent />}></Route>
        <Route exact path='/event/view/:id' element={<ViewEvent />}></Route>
        <Route exact path='/event/calendar_view' element={<EventCalendar />}></Route>
        <Route exact path='/event/date/:date' element={<ViewByDate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
