import { Link } from 'react-router-dom'
import { classNames } from 'shared/libs/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'
import { AppRouter } from './providers/router'


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'} >Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
      <button
        onClick={toggleTheme}
      >Сменить тему
      </button>
    </div>
  )
}

export default App