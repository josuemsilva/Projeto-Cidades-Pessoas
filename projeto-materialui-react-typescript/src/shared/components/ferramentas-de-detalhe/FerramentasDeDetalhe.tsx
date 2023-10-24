import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"


interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;

}

export const FerramentasDeDetalhe:React.FC<IFerramentasDeDetalheProps> = ({
textoBotaoNovo = 'Novo',

mostrarBotaoNovo = true,
mostrarBotaoVoltar = true,
mostrarBotaoApagar = true,
mostrarBotaoSalvar = true,
mostrarBotaoSalvarEFechar = false,

aoClicarEmNovo,
aoClicarEmVoltar,
aoClicarEmApagar,
aoClicarEmSalvar,
aoClicarEmSalvarEFechar,


mostrarBotaoNovoCarregando = false,
mostrarBotaoVoltarCarregando = false,
mostrarBotaoApagarCarregando = false,
mostrarBotaoSalvarCarregando = false,
mostrarBotaoSalvarEFecharCarregando = false,

}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <Box
    alignItems="center"
    gap={1}
    marginX={1}
    padding={1}
    paddingX={2}
    display="flex"
    height={theme.spacing(5)}
    component={Paper}
    >
    {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
        disableElevation
        variant="contained"
        onClick={aoClicarEmSalvar}
        startIcon={<Icon>save</Icon>}>
        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {!smDown && ('Salvar')}
        </Typography>
      </Button>)}

    {mostrarBotaoSalvarCarregando && (<Skeleton width={108} height={60}/>)}

    {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmSalvarEFechar}
        startIcon={<Icon>save</Icon>}>
        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        Salvar e voltar
        </Typography>
      </Button>)}

    {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={160} height={60}/>)}

    {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}>
        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {!smDown && ('Apagar')}
        </Typography>
      </Button>)}

    {mostrarBotaoApagarCarregando && (<Skeleton width={108} height={60}/>)}

    {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}>
        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {textoBotaoNovo}
        </Typography>
      </Button>)}

      {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton width={108} height={60}/>)}

      {(mostrarBotaoVoltar &&
        (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar))&&(<Divider variant="middle" orientation="vertical"/>)}

    {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}>
        <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {!smDown && ('Voltar')}
        </Typography>
      </Button>)}

      {mostrarBotaoVoltarCarregando && (<Skeleton width={108} height={60}/>)}

    </Box>
  )
}