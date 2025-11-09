import './index.css'

const ScoreCard = props => {
  const {score, reset} = props
  return (
    <div className="score-container">
      <div className="details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          alt="trophy"
          className="trophy"
        />
        <p className="score-title ">YOUR SCORE</p>
        <p className="score-value">{score}</p>
        <button type="button" className="play-again-button" onClick={reset}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
