import React, { Suspense, lazy, useState } from 'react';
import LazySwapi from './Components/Poke'
import './App.css';
import ErrorBoundary from './Components/Error'
// const LazySwapi = lazy(() => import("./Components/Poke"))

function App() {
  const [values, setValue] = useState(
    {
      input: '',
      search: 'pika'
    }
  )

  return (
    <div className="App">
      <input 
        type='text' 
        placeholder='Search for your favorite Star Wars Character' 
        value={values.input} 
        onChange={e => setValue({...values, input: e.target.value})} 
      />
      <button onClick={() => setValue({search: values.input, input: '' })}>Click to Search SWAPI</button>
      <ErrorBoundary>
          <LazySwapi search={values.search}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
