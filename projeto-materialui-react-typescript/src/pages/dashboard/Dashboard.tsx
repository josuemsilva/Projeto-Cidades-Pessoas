import { FerramentasDeListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const Dashboard = () => {
  return(
    <LayoutBase
    title="Página inicial"
    BarraDeFerramentas={(<FerramentasDeListagem
    mostrarInputBusca
    textoBotaoNovo="nova"
    />)}>
      Teste
    </LayoutBase>
  );
};