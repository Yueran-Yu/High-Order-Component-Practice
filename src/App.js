import React from 'react';
import EnhancedUserProfile from './components/user-profile/user-profile.component';
import EnhancedUserList from "./components/user-list/user-list.component";
import './App.scss'

function App() {
  return (
    <div className='App'>
      <EnhancedUserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <EnhancedUserProfile
        name='Yihua'
        email='yihuazhang@gmail.com'
        dataSource ='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}
// update
// Components are just functions and classes that receives some props
// In a same manner, a higher-component is just function that gets a component and returns us a enhanced component
export default App;
