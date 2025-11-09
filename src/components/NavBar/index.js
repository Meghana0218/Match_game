import './index.css'

const NavBar = props => {
  const {time, score} = props
  return (
    <nav>
      <li className="navContainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <div className="scoreDetails">
          <p>
            Score: <span className="score">{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="score">{time} sec</p>
        </div>
      </li>
    </nav>
  )
}

export default NavBar
