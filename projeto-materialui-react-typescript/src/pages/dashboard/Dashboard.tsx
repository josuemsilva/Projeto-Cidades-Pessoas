import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const Dashboard = () => {
  return(
    <LayoutBase
    title="Página inicial"
    BarraDeFerramentas={(<FerramentasDeDetalhe
    mostrarBotaoSalvarEFechar
    mostrarBotaoNovo
    mostrarBotaoSalvarEFecharCarregando
    mostrarBotaoSalvar={false}/>)}>
      Teste
    </LayoutBase>
  );
};