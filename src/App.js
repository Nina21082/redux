import './App.css';
import {UserPage} from './UserPage'
// import {UserTodo} from './UserTodo'
import { Routes, Route,useRoutes} from "react-router-dom";
import {UserPost} from './UserPost'
import { Provider } from 'react-redux';
import { store } from './store/store';




function App() {
   return(
     <div className='app'>
       <Provider store={store}>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path='user-posts/:id' element={<UserPost />}/>
          </Routes>
        </Provider>
     </div>
   )
  
}

export default App;
