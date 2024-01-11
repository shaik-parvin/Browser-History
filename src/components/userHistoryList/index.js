import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListDetails
  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="list">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <div className="history-container">
          <div className="card">
            <img src={logoUrl} alt="domain logo" className="logo-image" />
            <p className="title">{title}</p>
            <p className="history-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryList
