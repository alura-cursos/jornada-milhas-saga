import { StyleSheet } from "react-native";
import theme from "src/config/theme";

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imagemHeader: {
    height: 100,
    width: "100%",
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30
  },
  titulo: {
    color: theme.colors.primary,
    fontSize: 30,
    marginBottom: 20
  },
  viagemImagem: {
    height: 260,
    width: "100%",
  },
  informacoesContainer: {
    marginVertical: 20,
    gap: 5
  },
  informacoesTexto: {
    color: theme.colors.grey,
    fontSize: 16
  },
  informacoesTitulo: {
    fontWeight: 'bold'
  },
  valorContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  valorTexto: {
    color: theme.colors.grey,
    fontSize: 32,
    marginBottom: 20,
  },
  descricaoContainer: {
    gap: 20,
    marginBottom: 30,
  },
  descricaoTexto: {
    fontSize: 14,
    lineHeight: 20,
  }
});

export default styles;
