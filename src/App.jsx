import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import TopPage from './components/TopPage'
import Footer from './components/Footer'
import SelectedCategory from './components/SelectedCategory'
import { swedenArticlesAll, sportsArticlesAll, crimeArticlesAll, worldArticlesAll, entertainmentArticlesAll } from './data/data'

const ArticleArrays = {
    sweden: swedenArticlesAll,
    sports: sportsArticlesAll,
    crime: crimeArticlesAll,
    world: worldArticlesAll,
    entertainment: entertainmentArticlesAll
}

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
console.log(selectedCategory);
  return (
    <>
    <Header title="News For Today" />
    <Nav setSelectedCategory={setSelectedCategory}/>
    {!selectedCategory && <FrontPage /> }
    {selectedCategory && <SelectedCategory category={ArticleArrays[selectedCategory]}/>}
    <Footer />
    </>
  )
}

export default App
 