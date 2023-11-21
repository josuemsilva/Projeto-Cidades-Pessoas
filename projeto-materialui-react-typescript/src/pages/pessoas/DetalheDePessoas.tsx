import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { VTextField } from '../../shared/forms';
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/pessoas/PessoasService";

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState();

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);

      PessoasService.getById(Number(id))
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate('/pessoas');
          } else {
            setNome(result.nomeCompleto);

            formRef.current?.setData(result);
          }
        });
    }
  }, [id, navigate]);

  const handleSave = (dados: IFormData) => {
    setIsLoading(true);

    if (id === 'nova') {
      PessoasService.create(dados)
        .then((result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message);
          } else {
            navigate(`/pessoas/detalhe/${result}`);
          }
        });
    } else {
      setIsLoading(true);

      PessoasService.updateById(Number(id), { id: Number(id), ...dados })
        .then((result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message);
          } else {
            navigate(`/pessoas/detalhe/${result}`);
          }
        });
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Realmente deseja apagar?')) {
      PessoasService.deleteById(id)
        .then(result => {
          if (result instanceof Error) {
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
      title={id === 'nova' ? 'Nova pessoa' : nome}
      BarraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
        />
      }
    >

      <Form ref={formRef} onSubmit={handleSave}>
        <VTextField placeholder='Nome completo' name='nomeCompleto' />
        <VTextField placeholder='Email' name='email' />
        <VTextField placeholder='ID da cidade' name='cidadeId' />
        {/* {[1, 2, 3, 4].map((_, index)=> (
          <Scope key="" path={`endereco[${index}].rua`}>
            <VTextField name="rua" />
            <VTextField name="numero" />
            <VTextField name="estado" />
            <VTextField name="cidade" />
            <VTextField name="pais" />
          </Scope>
        ))} */}
      </Form>

    </LayoutBase>
  );
};
