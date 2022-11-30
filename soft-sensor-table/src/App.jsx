import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Tab } from '@material-tailwind/react'
import Table from './Component/Table/Table'

function App() {


  return (
    <div className="App">
      <Table />
      <Table
        exceptName={'show'}
        exceptCity={'show'}
        exceptEmail={'show'}
        exceptJoin={'show'}
        exceptRole={'show'}
      />
      <Table
        exceptName={'show'}
        exceptCity={'hidden'}
        exceptEmail={'show'}
        exceptJoin={'hidden'}
        exceptRole={'show'}
      />
      <Table
        exceptName={'hidden'}
        exceptCity={'hidden'}
        exceptEmail={'show'}
        exceptJoin={'show'}
        exceptRole={'show'}
      />
      <Table
        exceptName={'show'}
        exceptCity={'show'}
        exceptEmail={'hidden'}
        exceptJoin={'show'}
        exceptRole={'show'}
      />
      
      <Table />

    </div>
  )
}

export default App
