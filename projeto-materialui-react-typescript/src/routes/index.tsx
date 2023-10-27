import {Routes,Route,Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import { useDrawerContext } from '../shared/contexts'
import { Dashboard, ListagemDeCidade } from '../pages'

export const AppRoutes = () => {
  const {setDrawerOptions} = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página inicial',
        path: '/pagina-inicial'
      },
      {
        icon: 'location_city',
        label: 'Cidades',
        path: '/cidades'
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard/>}/>
      <Route path='/cidades' element={<ListagemDeCidade/>}/>
      <Route path='/cidades/detalhe/:id' element={<Dashboard/>}/>
      <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  )
}