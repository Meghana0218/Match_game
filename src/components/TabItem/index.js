import './index.css'

const TabItem = props => {
  const {tabItem, isActive, clickTabItem} = props
  const {displayText, tabId} = tabItem
  const tabIdItems = () => {
    clickTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'tab-active' : ''
  return (
    <li>
      <button
        type="button"
        className={`btn ${activeTabClassName}`}
        onClick={tabIdItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
