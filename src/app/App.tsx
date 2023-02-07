import { classNames } from 'shared/libs/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/SIdebar'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <div className="wrapper-page">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App