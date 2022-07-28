import {useState} from 'react'
import './App.css';
import axios from 'axios'


import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';

function App() {

  axios.get('http://www.example.com').then(response=>{
    console.log(response);
})

  // const [currentMsg, setCurrentMsg] = useState("There are no mesages");

  // const youveGotMail = ( newMessage ) => {
  //   setCurrentMsg( newMessage);
  // }

  // return (
  //   <>
  //     <MessageForm onNewMessage={ youveGotMail} />
  //     <MessageDisplay message={ currentMsg } />
  //   </>
  // )
//   const [users, setUsers] = useState(null);
//   const [errors, setErrors] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);

// const handleFetchClick = (_evt) => {
//   setErrors(null);
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//     if(!res.ok) {
//       throw Error(res.statusText)
//     }
//     return res.json();
//   })
//   .then((users) => {
//     setUsers(users);
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     setIsLoading(false);
//   })
// };

//   return (
//     <div className="App">
//       <button onClick={handleFetchClick}>
//         {users === null ? 'Fetch Users' : 'Refresh Users'}
//       </button>
    
//     <hr />
//     <div>
//       {users && users.map((user, i) => <p key={i}>{user.name}</p>)}
//     </div>

//     </div>
  // );

}

export default App;
