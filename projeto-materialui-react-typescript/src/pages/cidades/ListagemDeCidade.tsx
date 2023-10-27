import {useMemo} from 'react'
import { useSearchParams } from "react-router-dom";

import { FerramentasDeListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams])

  return(
      <LayoutBase
      title="Listagem de cidades"
      BarraDeFerramentas={<FerramentasDeListagem
        mostrarInputBusca
        textoBotaoNovo="Nova"
        textoDaBusca={busca}
        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}

      />}>
      </LayoutBase>
  );
};