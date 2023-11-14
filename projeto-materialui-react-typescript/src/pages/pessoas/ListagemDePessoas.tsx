import {useEffect, useMemo, useState} from 'react'
import { useSearchParams } from "react-router-dom";
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';

import { IListagemPessoa, PessoasService } from '../../shared/services/pessoas/PessoasService';
import { FerramentasDeListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { useDebounce } from '../../shared/hooks';
import { Environment } from '../../shared/environment';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {debounce} = useDebounce();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(()=> {
    PessoasService.getAll(1, busca)
    .then((result)=> {
      setIsLoading(false);

      if(result instanceof Error) {
        alert(result.message);
        return;
      } else {
        console.log(result);
        setRows(result.data);
        setTotalCount(result.totalCount);
      }
    });
  });
}, [busca, debounce]);

  return(
      <LayoutBase
      title="Listagem de pessoas"
      BarraDeFerramentas={<FerramentasDeListagem
        mostrarInputBusca
        textoBotaoNovo="Nova"
        textoDaBusca={busca}
        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
      />
    }
  >
    <TableContainer component={Paper} variant='outlined' sx={{m:1, width:'auto'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ações</TableCell>
            <TableCell>Nome Completo</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Ações</TableCell>
              <TableCell>{row.nomeCompleto}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        {totalCount===0 && !isLoading && (
          <caption>{Environment.LISTAGEM_VAZIA}</caption>
        )}

        <TableFooter>
            {isLoading && (
        <TableRow>
          <TableCell colSpan={3}>
            <LinearProgress variant='indeterminate'/>
          </TableCell>
          </TableRow>
            )}
        </TableFooter>
      </Table>
    </TableContainer>
      </LayoutBase>
  );
};