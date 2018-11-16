import React, { Suspense, lazy, useState } from 'react';
import Poke from './Components/Poke'
import './App.css';
import ErrorBoundary from './Components/Error'
// const LazySwapi = lazy(() => import("./Components/Poke"))

function App() {
  const [values, setValue] = useState(
    {
      input: '',
      search: ''
    }
  )

  return (
    <div className="App">
      <input 
        type='text' 
        placeholder='Pokemon Name' 
        value={values.input} 
        onChange={e => setValue({...values, input: e.target.value})} 
      />
      <button onClick={() => setValue({search: values.input, input: '' })}>Click to Search Pokemon Cards</button>
      <ErrorBoundary>
          <Poke search={values.search}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
