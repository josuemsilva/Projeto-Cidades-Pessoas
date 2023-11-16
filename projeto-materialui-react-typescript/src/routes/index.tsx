import {Routes,Route,Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import { useDrawerContext } from '../shared/contexts'
import { Dashboard, ListagemDePessoas } from '../pages'

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
        icon: 'people',
        label: 'Pessoas',
        path: '/pessoas'
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard/>}/>
      <Route path='/pessoas' element={<ListagemDePessoas/>}/>
      <Route path='/pessoas/detalhe/:id' element={<p>Detalhe</p>}/>
      <Route path='*' element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  )
}