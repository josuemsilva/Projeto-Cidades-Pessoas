import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const Dashboard = () => {
  return(
    <LayoutBase
    title="Página inicial"
    BarraDeFerramentas={(<BarraDeFerramentas
    mostrarInputBusca
    textoBotaoNovo="nova"
    />)}>
      Teste
    </LayoutBase>
  );
};