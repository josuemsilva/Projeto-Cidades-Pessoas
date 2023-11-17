import { useNavigate, useParams } from "react-router-dom"

import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = () => {
    console.log('delete');
  };


  return (
    <LayoutBase
    title="Detalhes"
    BarraDeFerramentas={
      <FerramentasDeDetalhe
      mostrarBotaoApagar={id !== 'nova'}
      mostrarBotaoNovo={id !== 'nova'}
      mostrarBotaoSalvarEFechar
      textoBotaoNovo="Nova"

      aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
      aoClicarEmVoltar={() => navigate('/pessoas')}
      aoClicarEmApagar={() => {}}
      aoClicarEmSalvar={handleSave}
      aoClicarEmSalvarEFechar={handleSave}
      />
    }
    >
      <p>Detalhes {id}</p>
    </LayoutBase>

  )
};