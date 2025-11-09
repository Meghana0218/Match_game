import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import GameItem from '../GameItem'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    time: 60,
    activeTabId: '',
    shuffledImage: '',
    isGameInProgress: true,
  }

  componentDidMount() {
    const {tabsList, imagesList} = this.props
    this.setState({
      activeTabId: tabsList[0].tabId,
      shuffledImage: imagesList[0].imageUrl,
    })
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.intervalId = setInterval(this.timer, 1000)
  }

  timer = () => {
    this.setState(prevState => {
      if (prevState.time > 0) {
        return {time: prevState.time - 1}
      }
      clearInterval(this.intervalId)
      return {time: 0, isGameInProgress: false}
    })
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  matchThumbNail = matchId => {
    const {imagesList} = this.props
    const {shuffledImage} = this.state
    const matchedImage = imagesList.find(
      each => each.imageUrl === shuffledImage,
    )
    if (matchedImage && matchedImage.id === matchId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        shuffledImage:
          imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
      }))
    } else {
      clearInterval(this.intervalId)
      this.setState({isGameInProgress: false})
    }
  }

  reset = () => {
    clearInterval(this.intervalId)

    const {tabsList, imagesList} = this.props

    this.setState(
      {
        activeTabId: tabsList[0].tabId,
        score: 0,
        time: 60,
        shuffledImage: imagesList[0].imageUrl,
        isGameInProgress: true,
      },
      this.startTimer,
    )
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {
      activeTabId,
      time,
      score,
      shuffledImage,
      isGameInProgress,
    } = this.state
    const filteredResults = imagesList.filter(
      eachItem => eachItem.category === activeTabId,
    )
    return (
      <div className="app-container">
        <NavBar time={time} score={score} />
        {isGameInProgress ? (
          <div className="game">
            <img src={shuffledImage} className="image" alt="match" />
            <ul className="container" type="none">
              {tabsList.map(eachTabItem => (
                <TabItem
                  tabItem={eachTabItem}
                  key={eachTabItem.tabId}
                  clickTabItem={this.clickTabItem}
                  isActive={eachTabItem.tabId === activeTabId}
                />
              ))}
            </ul>

            <ul type="none" className="container">
              {filteredResults.map(eachThumbNail => (
                <GameItem
                  thumbNail={eachThumbNail}
                  key={eachThumbNail.id}
                  matchThumbNail={this.matchThumbNail}
                />
              ))}
            </ul>
          </div>
        ) : (
          <ScoreCard score={score} reset={this.reset} />
        )}
      </div>
    )
  }
}
export default MatchGame
