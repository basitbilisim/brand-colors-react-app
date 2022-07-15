import './App.css';
import MainContext from './MainContext';
import Sidebar from './components/Sidebar';
import Copied from './components/Copied';
import Content from './components/Content';
import BrandsData from './brands.json';
import { useEffect, useState } from 'react';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Collection from './components/Collection';

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrand] = useState(brandsArray)
  const [copied, setCopied] = useState(false)
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

  }, [selected])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 500)
    }
  })

  useEffect(() => {
    setBrand(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])
  const data = { brands, setSelected, selected, setCopied, search, setSearch }

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element={<Content />}>
            </Route>
            <Route path='/collection/:slugs' element={<Collection />}>
            </Route>
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
