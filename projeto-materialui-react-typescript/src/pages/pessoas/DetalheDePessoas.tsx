import { Form } from '@unform/web';
import {useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { VTextField } from '../../shared/forms';
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/pessoas/PessoasService";

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState();

  useEffect(() => {
    if(id !== 'nova') {
      setIsLoading(true);

      PessoasService.getById(Number(id))
      .then((result) => {
        setIsLoading(false);

        if(result instanceof Error) {
            alert(result.message);
            navigate('/pessoas');
        } else {
            setNome(result.nomeCompleto);
            console.log(result);
        }
      });
    }
  }, [id, navigate]);

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = (id:number) => {
    if(confirm('Realmente deseja apagar?')) {
        PessoasService.deleteById(id)
        .then(result => {
          if(result instanceof Error) {
            alert(result.message)
          } else {
            alert('Registro apagado com sucesso!');
            navigate('/pessoas');
          }
        });
    }
  };


  return (
    <LayoutBase
    title= {id === 'nova' ? 'Nova pessoa' : nome}
    BarraDeFerramentas={
      <FerramentasDeDetalhe
      mostrarBotaoApagar={id !== 'nova'}
      mostrarBotaoNovo={id !== 'nova'}
      mostrarBotaoSalvarEFechar
      textoBotaoNovo="Nova"

      aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
      aoClicarEmApagar={() => handleDelete(Number(id))}
      aoClicarEmVoltar={() => navigate('/pessoas')}
      aoClicarEmSalvarEFechar={handleSave}
      aoClicarEmSalvar={handleSave}
      />
    }
  >

      <Form onSubmit={(dados) => console.log(dados)}>

        <VTextField
          name='nomeCompleto'

        />

        <button type='submit'>Submit</button>
      </Form>

    </LayoutBase>

  )
};