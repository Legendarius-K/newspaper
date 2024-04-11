import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import TopPage from './components/TopPage'
import Footer from './components/Footer'
import CurrentArticle from './components/CurrentArticle'
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
  const [currentArticle, setCurrentArticle] = useState(null)
  console.log('currentArticle: ', currentArticle);


  
  console.log(selectedCategory);

  return (
    <>
    <Header title="The Newspaper" />
    <Nav setSelectedCategory={setSelectedCategory} updateFunction={setCurrentArticle}/>

    {
      currentArticle ? <CurrentArticle article={currentArticle}/>
      : selectedCategory ? <SelectedCategory updateFunction={setCurrentArticle} category={ArticleArrays[selectedCategory]}/>
      : <FrontPage updateFunction={setCurrentArticle} />
    }
    <Footer />
    </>
  )
}

export default App
  