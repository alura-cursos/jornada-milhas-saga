import { StyleSheet } from "react-native";
import theme from "src/config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  imagemHeader: {
    height: 100,
    width: "100%",
  },
  content: {
    marginHorizontal: 24,
    marginVertical: 30
  },
  voltarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  botaoVoltar: {
    fontSize: 30,
  },
  voltarTexto: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '500'
  },
  titulo: {
    color: theme.colors.primary,
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 32,
  },
  cardsContainer: {
    gap: 24
  },
  card: {
    backgroundColor: theme.colors.lighterGrey,
    borderRadius: 24,
    padding: 24,
    gap: 24
  },
  cardTituloContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  cardTituloTexto: {
    color: theme.colors.grey,
    fontSize: 24,
  },
  pessoas: {
    fontSize: 16,
  },
  cardSessao: {

  },
  sessaoTexto: {
    color: theme.colors.grey,
    fontSize: 16,
    lineHeight: 24,
  },
  sessaoTitulo: {
    color: theme.colors.grey,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  cardOpcoesTitulo: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 8,
  },
  cardOpcoesCheckbox: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8
  },
  cardOpcoesTexto: {
    color: theme.colors.grey,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    paddingRight: 30,
  },
  imagemViagem: {
    height: 200,
  },
  cardFinal: {
    backgroundColor: theme.colors.lightPrimary
  },
  pessoasFinal: {
    marginTop: 16,
    marginBottom: 24,
  },
  valorFinalContainer: {
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  valorFinalTexto: {
    color: theme.colors.primary,
    fontSize: 24,
    lineHeight: 32,
  },
  valorFinal: {
    color: theme.colors.grey,
    fontSize: 32,
    lineHeight: 40,
  },
  statusModal: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '100%',
    marginTop: 50
  }
});

export default styles;
