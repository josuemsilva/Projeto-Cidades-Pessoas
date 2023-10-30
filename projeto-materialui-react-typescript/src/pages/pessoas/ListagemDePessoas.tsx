import {useEffect, useMemo} from 'react'
import { useSearchParams } from "react-router-dom";

import { FerramentasDeListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { PessoasService } from '../../shared/services/pessoas/PessoasService';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    PessoasService.getAll(1, busca)
    .then((result)=> {
      if(result instanceof Error) {
        alert(result.message);
        return;
      } else {
        console.log(result);
      }
    })
  }, [busca]);

  return(
      <LayoutBase
      title="Listagem de pessoas"
      BarraDeFerramentas={<FerramentasDeListagem
        mostrarInputBusca
        textoBotaoNovo="Nova"
        textoDaBusca={busca}
        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}

      />}>
      </LayoutBase>
  );
};