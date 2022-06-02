import './App.css';
import {UserPage} from './UserPage'
// import {UserTodo} from './UserTodo'
import { Routes, Route} from "react-router-dom";
import {UserPost} from './UserPost'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { UserTodo } from './UserTodo';




function App() {
   return(
     <div className='app'>
       <Provider store={store}>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path='user-posts/:id' element={<UserPost />}/>
            <Route path='user-todo/:id' element={<UserTodo />}/>
          </Routes>
        </Provider>
     </div>
   )
  
}

export default App;
