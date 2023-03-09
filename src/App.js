import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider 
      value={'kiranmai'}>
      <ChannelContext.Provider value={'pasupuleti'}>
      <ComponentC/>
      </ChannelContext.Provider>

      </UserContext.Provider>
        
    </div>
  );
}

export default App;
