import './index.css'

const GameItem = props => {
  const {thumbNail, matchThumbNail} = props
  const {thumbnailUrl, id} = thumbNail
  const thumbNailMatch = () => {
    matchThumbNail(id)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={thumbNailMatch}>
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default GameItem
