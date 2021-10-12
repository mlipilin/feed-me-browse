import PropTypes from 'prop-types'
import { Router, Link } from 'react-router-dom'
import { createHashHistory } from 'history'

import styles from './App.module.scss'

const defaultHistory = createHashHistory()

function App({ history }) {
  return (
    <Router history={history || defaultHistory}>
      <div className={styles.App}>
        <h1>Browse Restaurants</h1>
        <ul className={styles.Restaurants}>
          <li className={styles.Restaurants__Item}>
            <Link to="/restaurant/1">Restaurant 1</Link>
          </li>
          <li className={styles.Restaurants__Item}>
            <Link to="/restaurant/2">Restaurant 2</Link>
          </li>
          <li className={styles.Restaurants__Item}>
            <Link to="/restaurant/3">Restaurant 3</Link>
          </li>
          <li className={styles.Restaurants__Item}>
            <Link to="/restaurant/4">Restaurant 4</Link>
          </li>
          <li className={styles.Restaurants__Item}>
            <Link to="/restaurant/5">Restaurant 5</Link>
          </li>
        </ul>
      </div>
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
