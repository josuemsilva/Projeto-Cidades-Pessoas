import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"

export const FerramentasDeDetalhe:React.FC = () => {
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
      <Button
        disableElevation
        variant="contained"
        startIcon={<Icon>save</Icon>}>
        Salvar</Button>
      <Button
        disableElevation
        variant="outlined"
        startIcon={<Icon>save</Icon>}>
        Salvar e voltar</Button>
      <Button
        disableElevation
        variant="outlined"
        startIcon={<Icon>delete</Icon>}>
        Apagar</Button>
      <Button
        disableElevation
        variant="outlined"
        startIcon={<Icon>add</Icon>}>
        Novo</Button>

      <Divider variant="middle" orientation="vertical"/>

      <Button
        disableElevation
        variant="outlined"
        startIcon={<Icon>arrow_back</Icon>}>
        Voltar</Button>
    </Box>
  )
}