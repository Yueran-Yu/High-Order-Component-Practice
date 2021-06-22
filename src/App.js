import React from 'react';
import UserProfile from './components/user-profile/user-profile.component';
import './App.scss'

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <UserProfile
        name='Yihua'
        email='yihuazhang@gmail.com'
      />
    </div>
  );
}
// update
// Components are just functions and classes that receives some props
// In a same manner, a higher-component is just function that gets a component and returns us a enhanced component
export default App;
