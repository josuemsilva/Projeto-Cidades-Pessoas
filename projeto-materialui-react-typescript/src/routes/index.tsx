import {Button} from '@mui/material'
import {Routes,Route,Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import { useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
  const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página inicial',
        path: '/pagina-inicial'
      },
      {
        icon: 'star',
        label: 'Cidades',
        path: '/cidades'
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>}/>
      <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  )
}