import uuid from "react-native-uuid";
import { Usuario } from "../src/types/usuario";
import { CarroCambio, DetalhesViagem, TipoCarro, TipoQuarto, TipoViagem, Viagem } from "../src/types/viagem";



type Server = {
  usuarios: Usuario[],
  viagens: Viagem[],
  detalhes: DetalhesViagem
};

const server: Server = {
  usuarios: [
    {
      id: uuid.v4(),
      nome: "Luiz Fernando",
      dataNascimento: "01/01/2020",
      cpf: "111.222.333-44",
      genero: 'Masculino',
      telefone: "010203040",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      email: "luiz@gmail.com",
      senha: "123",
    },
  ],
  viagens: [
    {
      titulo: "Atravesse o Deserto no Chile",
      valor: 3769,
      foto: "viagens/atacama.png",
      dataIda: "23/09/2025",
      dataVolta: "30/09/2025",
      origem: "Rio Branco",
      estadoOrigem: 'Acre',
      destino: "Atacama",
      tipo: TipoViagem.ida,
      id: 'atacama'
    },
    {
      titulo: "Navegue pelos canais de Veneza",
      valor: 4638.90,
      foto: "viagens/veneza.png",
      dataIda: "13/07/2025",
      dataVolta: "23/07/2025",
      origem: "Maceió",
      estadoOrigem: 'Alagoas',
      destino: "Veneza",
      tipo: TipoViagem.idaEVolta,
      id: 'veneza'
    },
    {
      titulo: "Conheça a Terra do Fogo",
      valor: 5769.50,
      foto: "viagens/patagonia.png",
      dataIda: "03/04/2025",
      dataVolta: "13/04/2025",
      origem: "Fortaleza",
      estadoOrigem: 'Ceará',
      destino: "Patagonia",
      tipo: TipoViagem.ida,
      id: 'patagonia'
    },
    {
      titulo: "Aprecie milhões de anos de história geológica",
      valor: 5837.53,
      foto: "viagens/grandCanyon.png",
      dataIda: "06/08/2025",
      dataVolta: "26/08/2025",
      origem: "Cuiabá",
      estadoOrigem: 'Mato Grosso',
      destino: "Grand Canyon",
      tipo: TipoViagem.idaEVolta,
      id: 'grandCanyon'
    },
    {
      titulo: "Conheça a Turquia",
      valor: 1000,
      foto: "viagens/turquia.png",
      dataIda: "09/09/2024",
      dataVolta: "12/09/2024",
      origem: "Belo Horizonte",
      estadoOrigem: 'Minas Gerais',
      destino: "Turquia",
      tipo: TipoViagem.ida,
      id: 'turquia'
    },
    {
      titulo: "Visite a impressionante Cordilheira dos Andes",
      valor: 2946,
      foto: "viagens/cordilheiraDosAndes.png",
      dataIda: "19/11/2025",
      dataVolta: "04/12/2025",
      origem: "Palmas",
      estadoOrigem: 'Tocantins',
      destino: "La paz",
      tipo: TipoViagem.idaEVolta,
      id: 'laPaz'
    },
    {
      titulo: "1 semana em Nova York",
      valor: 1550,
      foto: "viagens/novaYork.png",
      dataIda: '12/06/2023',
      dataVolta: '19/06/2023',
      origem: 'Rio de Janeiro',
      estadoOrigem: 'Rio de Janeiro',
      destino: 'Nova York',
      tipo: TipoViagem.idaEVolta,
      id: 'novaYork'
    },
    {
      titulo: 'Conheça bonito',
      valor: 580,
      foto: "viagens/bonito.png",
      dataIda: '14/12/2023',
      dataVolta: '17/12/2023',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Bonito',
      tipo: TipoViagem.idaEVolta,
      id: 'bonito'
    },
    {
      titulo: 'Vá para Toronto',
      valor: 900,
      foto: "viagens/toronto.png",
      dataIda: '01/02/2024',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Toronto',
      tipo: TipoViagem.ida,
      id: 'toronto'
    },
    {
      titulo: 'Uma viagem inesquecível',
      valor: 5590,
      foto: "viagens/viena.png",
      dataIda: '05/03/2024',
      dataVolta: '10/03/2024',
      origem: 'Recife',
      estadoOrigem: 'Pernambuco',
      destino: 'Viena',
      tipo: TipoViagem.idaEVolta,
      id: 'viena'
    },
    {
      titulo: 'Um encontro com o Brasil',
      valor: 850,
      foto: "viagens/salvador.png",
      dataIda: '07/09/2024',
      dataVolta: '17/09/2024',
      origem: 'Florianópolis',
      estadoOrigem: 'Santa Catarina',
      destino: 'Salvador',
      tipo: TipoViagem.idaEVolta,
      id: 'salvador'
    },
    {
      titulo: 'Maldivas brasileiras',
      valor: 999,
      foto: "viagens/arraialDoCabo.png",
      dataIda: '23/08/2024',
      dataVolta: '23/09/2024',
      origem: 'Manaus',
      estadoOrigem: 'Amazonas',
      destino: 'Arraial do Cabo',
      tipo: TipoViagem.idaEVolta,
      id: 'arraialDoCabo'
    },
    {
      titulo: '3 noites em Tokyo',
      valor: 1207,
      foto: "viagens/tokyo.png",
      dataIda: '23/08/2024',
      dataVolta: '26/08/2024',
      origem: 'Vitória',
      estadoOrigem: 'Espírito Santo',
      destino: 'Tokyo',
      tipo: TipoViagem.idaEVolta,
      id: 'tokyo'
    },
    {
      titulo: 'Aproveite seu verão em grande estilo',
      valor: 2890,
      foto: "viagens/recife.png",
      dataIda: '25/11/2024',
      dataVolta: '10/12/2024',
      origem: 'Florianópolis',
      estadoOrigem: 'Santa Catarina',
      destino: 'Recife',
      tipo: TipoViagem.idaEVolta,
      id: 'recife'
    },
    {
      titulo: 'Conheça Cusco',
      valor: 3940,
      foto: "viagens/cusco.png",
      dataIda: '10/01/2025',
      dataVolta: '20/01/2025',
      origem: 'Belo Horizonte',
      estadoOrigem: 'Minas Gerais',
      destino: 'Cusco',
      tipo: TipoViagem.idaEVolta,
      id: 'cusco'
    },
    {
      titulo: 'Estude na Austrália',
      valor: 6020,
      foto: "viagens/sidney.png",
      dataIda: '25/02/2025',
      origem: 'Goiânia',
      estadoOrigem: 'Goiás',
      destino: 'Sidney',
      tipo: TipoViagem.ida,
      id: 'sidney'
    },
    {
      titulo: 'Uma semana incrível',
      valor: 9370,
      foto: "viagens/bangkok.png",
      dataIda: '18/03/2025',
      dataVolta: '25/03/2025',
      origem: 'São Luis',
      estadoOrigem: 'Maranhão',
      destino: 'Bangkok',
      tipo: TipoViagem.idaEVolta,
      id: 'bangkok'
    },
    {
      titulo: 'Visite a cidade luz',
      valor: 12356,
      foto: "viagens/paris.png",
      dataIda: '05/04/2025',
      dataVolta: '30/04/2025',
      origem: 'Brasília',
      estadoOrigem: 'Distrito Federal',
      destino: 'Paris',
      tipo: TipoViagem.idaEVolta,
      id: 'paris'
    },
    {
      titulo: '5 dias em Amsterdã',
      valor: 5700,
      foto: "viagens/amsterda.png",
      dataIda: '02/05/2025',
      dataVolta: '07/05/2025',
      origem: 'Maceió',
      estadoOrigem: 'Alagoas',
      destino: 'Amsterdã',
      tipo: TipoViagem.idaEVolta,
      id: 'amsterda'
    },
    {
      titulo: 'México como você nunca viu',
      valor: 2460,
      foto: "viagens/cidadeDoMexico.png",
      dataIda: '14/05/2025',
      dataVolta: '24/05/2025',
      origem: 'Belém',
      estadoOrigem: 'Pará',
      destino: 'Cidade do México',
      tipo: TipoViagem.idaEVolta,
      id: 'cidadeDoMexico'
    },
    {
      titulo: 'Viva a noite de Madrid',
      valor: 1900,
      foto: "viagens/madrid.png",
      dataIda: '10/06/2025',
      dataVolta: '20/06/2025',
      origem: 'Porto Alegre',
      estadoOrigem: 'Rio Grande do Sul',
      destino: 'Madrid',
      tipo: TipoViagem.idaEVolta,
      id: 'madrid'
    },
    {
      titulo: 'O melhor de Los Angeles',
      valor: 10850,
      foto: "viagens/losAngeles.png",
      dataIda: '25/07/2025',
      dataVolta: '30/07/2025',
      origem: 'Palmas',
      estadoOrigem: 'Tocantins',
      destino: 'Los Angeles',
      tipo: TipoViagem.idaEVolta,
      id: 'losAngeles'
    },
    {
      titulo: 'Passeie pela capital portuguesa',
      valor: 2397,
      foto: "viagens/lisboa.png",
      dataIda: '14/08/2025',
      dataVolta: '24/08/2025',
      origem: 'Teresina',
      estadoOrigem: 'Piauí',
      destino: 'Lisboa',
      tipo: TipoViagem.idaEVolta,
      id: 'lisboa'
    },
  ],
  detalhes: {
    atacama: {
      titulo: "Atravesse o Deserto no Chile",
      valor: 3769,
      foto: "viagens/atacama.png",
      dataIda: "23/09/2025",
      dataVolta: "30/09/2025",
      origem: "Rio Branco",
      estadoOrigem: 'Acre',
      destino: "Atacama",
      tipo: TipoViagem.ida,
      descricao: ['Bem-vindo à aventura de uma vida no coração do Deserto do Atacama! Nosso pacote de viagem oferece uma experiência única e inesquecível, explorando uma das maravilhas naturais mais fascinantes do mundo. Localizado no norte do Chile, o Atacama é conhecido por suas paisagens surreais, vastidão impressionante e céu noturno estrelado. Durante sua estadia, você terá a oportunidade de testemunhar a beleza hipnotizante dos salares brilhantes, vulcões imponentes e cânions esculpidos pelo tempo.', 'Prepare-se para se perder na imensidão do deserto enquanto embarca em emocionantes excursões guiadas. Desde os Geysers del Tatio, onde os vapores se elevam ao amanhecer, até as lagoas salgadas de Miscanti e Miñiques, cada destino revela uma parte única da rica tapeçaria natural do Atacama. À noite, mergulhe na magia do observatório astronômico, onde a falta de poluição luminosa permite que as estrelas brilhem com intensidade inigualável, oferecendo um espetáculo celestial incomparável. Esteja preparado para se surpreender e encantar a cada passo neste oásis deslumbrante no meio do deserto.'],
      hotel: {
        nome: 'Hotel Cabaña del Sol Atacama',
        endereco: 'Calle de la luna, 396',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    veneza: {
      titulo: "Navegue pelos canais de Veneza",
      valor: 4638.90,
      foto: "viagens/veneza.png",
      dataIda: "13/07/2025",
      dataVolta: "23/07/2025",
      origem: "Maceió",
      estadoOrigem: 'Alagoas',
      destino: "Veneza",
      tipo: TipoViagem.idaEVolta,
      descricao: ['Bem-vindo a Veneza, uma cidade única onde os canais são as ruas e as gôndolas são os carros. Navegue pelos canais românticos, maravilhe-se com a arquitetura incrível e descubra o charme inigualável desta joia italiana. Viva uma experiência que transcende o comum enquanto se perde nas vielas encantadoras de Veneza.', 'Prepare-se para explorar os emblemáticos pontos turísticos, como a Praça de São Marcos e o Palácio Ducal. A cada esquina, você será envolvido por uma atmosfera de romance e história. Embarque em uma gôndola ao entardecer e deixe-se levar pelas águas serenas enquanto a cidade se ilumina com uma magia única.'],
      hotel: {
        nome: 'Hotel Bisanzio Venice',
        endereco: 'Castello 3651, Castello',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    patagonia: {
      titulo: "Conheça a Terra do Fogo",
      valor: 5769.50,
      foto: "viagens/patagonia.png",
      dataIda: "03/04/2025",
      dataVolta: "13/04/2025",
      origem: "Fortaleza",
      estadoOrigem: 'Ceará',
      destino: "Patagonia",
      tipo: TipoViagem.ida,
      descricao: ['Embarque em uma jornada inesquecível até a Terra do Fogo, no coração da Patagônia. Desbrave paisagens selvagens e intocadas, onde as montanhas se encontram com o oceano. Sinta a energia única deste lugar remoto enquanto explora a natureza grandiosa e preservada.', 'Além das vistas deslumbrantes, a Terra do Fogo oferece oportunidades emocionantes para os aventureiros. Participe de trekking nas trilhas selvagens que revelam glaciares imponentes e lagos cristalinos. A experiência de acampar sob o céu estrelado na Patagônia é verdadeiramente mágica. Cada momento nesta terra distante é uma chance de se conectar profundamente com a natureza e vivenciar uma aventura sem igual.'],
      hotel: {
        nome: 'Tierra Patagonia Hotel',
        endereco: 'Sector Rio Serrano, Torres del Paine',
        temCafe: true,
        tipoQuarto: TipoQuarto.standardDuplo
      },
      carro: {
        tipo: TipoCarro.compacto,
        comAr: false,
        cambio: CarroCambio.manual
      }
    },
    grandCanyon: {
      titulo: "Aprecie milhões de anos de história geológica",
      valor: 5837.53,
      foto: "viagens/grandCanyon.png",
      dataIda: "06/08/2025",
      dataVolta: "26/08/2025",
      origem: "Cuiabá",
      estadoOrigem: 'Mato Grosso',
      destino: "Grand Canyon",
      tipo: TipoViagem.idaEVolta,
      descricao: ['Sinta a imensidão e a grandiosidade do Grand Canyon, uma maravilha geológica que desafia a compreensão. Caminhe pelas trilhas fascinantes, admire as camadas de rochas coloridas e mergulhe na beleza avassaladora deste cânion espetacular. Uma experiência que ficará gravada na sua memória para sempre.', 'Para uma perspectiva única, considere um passeio de helicóptero sobre as profundezas do Grand Canyon. Do alto, as formas impressionantes e as cores vibrantes se revelam de maneira ainda mais impressionante. À medida que o sol se põe, criando sombras dramáticas, você testemunhará uma transformação mágica desse fenômeno natural. O Grand Canyon é um espetáculo que vai além das palavras.'],
      hotel: {
        nome: 'Inn Grand Canyon Cabin',
        endereco: '5460 North Sunset Strip, Williams, AZ',
        temCafe: true,
        tipoQuarto: TipoQuarto.standardIndividual
      },
      carro: {
        tipo: TipoCarro.sedanPremium,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    turquia: {
      titulo: "Conheça a Turquia",
      valor: 1000,
      foto: "viagens/turquia.png",
      dataIda: "09/09/2024",
      dataVolta: "12/09/2024",
      origem: "Belo Horizonte",
      estadoOrigem: 'Minas Gerais',
      destino: "Turquia",
      tipo: TipoViagem.ida,
      descricao: ['Imagine-se embarcando em um fascinante tour pela Turquia, onde cada passo revela a rica história e a exuberante cultura desse país transcontinental. O itinerário começa em Istambul, a cidade dos contrastes, onde os minaretes se erguem majestosamente ao lado de arranha-céus modernos. Aqui, a Hagia Sophia, com sua imponente arquitetura bizantina, compartilha espaço com a deslumbrante Mesquita Azul, enquanto o Grand Bazaar convida os visitantes a se perderem em seus corredores repletos de cores, aromas e tesouros.', 'À medida que o tour segue rumo ao interior, a Capadócia surge como um cenário de conto de fadas, com suas formações rochosas únicas e os balões coloridos pontuando o céu ao amanhecer. As cidades subterrâneas escavadas na rocha e os sítios arqueológicos transportam os viajantes através dos séculos, revelando as antigas civilizações que deixaram sua marca indelével nessa terra. De Éfeso a Pamukkale, cada parada oferece uma janela para a grandiosidade da Turquia, onde a história, a beleza natural e a hospitalidade cativante se unem para criar uma experiência verdadeiramente inesquecível.'],
      hotel: {
        nome: 'The Ritz-Carlton inn',
        endereco: 'Suzer Plaza, Askerocagi Caddesi, Elmadag/Sisli, Istambul',
        temCafe: false,
        tipoQuarto: TipoQuarto.luxoFamilia
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    laPaz: {
      titulo: "Visite a impressionante Cordilheira dos Andes",
      valor: 2946,
      foto: "viagens/cordilheiraDosAndes.png",
      dataIda: "19/11/2025",
      dataVolta: "04/12/2025",
      origem: "Palmas",
      estadoOrigem: 'Tocantins',
      destino: "La paz",
      tipo: TipoViagem.idaEVolta,
      descricao: ['Explore as majestosas montanhas da Cordilheira dos Andes, onde picos imponentes tocam o céu. Sinta a grandiosidade da natureza enquanto caminha por trilhas panorâmicas, descubra lagos cristalinos e respire o ar puro das alturas. Uma jornada pela beleza selvagem das montanhas andinas.', 'Além das trilhas tradicionais, a Cordilheira dos Andes oferece oportunidades emocionantes para esportes de aventura. Seja escalando picos desafiadores, praticando esqui nas encostas nevadas ou simplesmente desfrutando de vistas panorâmicas de mirantes espetaculares, a diversidade de experiências na Cordilheira dos Andes é enorme. Prepare-se para se maravilhar a cada passo nesta região imponente.'],
      hotel: {
        nome: 'Del Rey Palace Hotel',
        endereco: 'Av 20 de Octubre, 1947',
        temCafe: false,
        tipoQuarto: TipoQuarto.luxoFamilia
      },
      carro: {
        tipo: TipoCarro.hatch,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    novaYork: {
      titulo: "1 semana em Nova York",
      valor: 1550,
      foto: "viagens/novaYork.png",
      dataIda: '12/06/2023',
      dataVolta: '19/06/2023',
      origem: 'Rio de Janeiro',
      estadoOrigem: 'Rio de Janeiro',
      destino: 'Nova York',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Bem-vindo à cidade que nunca dorme! Nova York, o ícone da vida urbana, oferece uma mistura vibrante de cultura, arte e arquitetura. Explore os arranha-céus imponentes, desfrute da agitação de Times Square e mergulhe na diversidade que torna esta metrópole tão única. Uma experiência cosmopolita que cativa a todos.', 'Além dos pontos turísticos famosos, mergulhe na cena artística e cultural visitando galerias de arte contemporânea, teatros da Broadway e bairros boêmios. Experimente a fusão culinária em restaurantes de classe mundial e sinta a energia única de bairros como o SoHo e o Greenwich Village. Em Nova York, cada esquina oferece uma nova descoberta. E pra quem desejar relaxar, o Central Park estará esperando de portas abertas e grama verdinha!'],
      hotel: {
        nome: 'The Manhattan at Times Square',
        endereco: '790 7th Avenue',
        temCafe: true,
        tipoQuarto: TipoQuarto.standard
      },
      carro: {
        tipo: TipoCarro.compacto,
        comAr: false,
        cambio: CarroCambio.manual
      }
    },
    bonito: {
      titulo: 'Conheça bonito',
      valor: 580,
      foto: "viagens/bonito.png",
      dataIda: '14/12/2023',
      dataVolta: '17/12/2023',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Bonito',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Descubra a beleza intocada de Bonito, um verdadeiro paraíso natural no coração do Brasil. Surpreenda-se com as águas cristalinas dos rios e cavernas, onde a vida subaquática se revela em toda a sua glória. Uma viagem para os amantes da natureza e da aventura.', 'Além das atrações aquáticas, explore as trilhas exuberantes e descubra a diversidade da fauna e flora brasileira. A Gruta do Lago Azul é uma maravilha subterrânea que transporta os visitantes para um mundo mágico de estalactites e estalagmites. Em Bonito, a conexão íntima com a natureza é o cerne de uma experiência que transcende as expectativas.', 'E como se não bastasse a natureza, você vai ser arrabatado pela culinária deliciosa desse lugar, que mistura os sabores intensos do interior com as delícias dos peixes de rio!'],
      hotel: {
        nome: 'Pousada Villas - Bonito',
        endereco: 'Rua Filinto Muller,985, Bonito',
        temCafe: true,
        tipoQuarto: TipoQuarto.standardTriplo
      },
      carro: {
        tipo: TipoCarro.hatchPremium,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    toronto: {
      titulo: 'Vá para Toronto',
      valor: 900,
      foto: "viagens/toronto.png",
      dataIda: '01/02/2024',
      origem: 'São Paulo',
      estadoOrigem: 'São Paulo',
      destino: 'Toronto',
      tipo: TipoViagem.ida,
      descricao: ['Explore a modernidade e a diversidade cultural de Toronto, uma cidade dinâmica que reflete o espírito do Canadá. Dos arranha-céus de vidro da CN Tower aos encantos históricos do Distillery District, cada bairro conta uma história única. Uma experiência cosmopolita com um toque canadense.', 'Além dos ícones urbanos, mergulhe na riqueza cultural visitando museus de classe mundial, como o Royal Ontario Museum, e participando de festivais que celebram a diversidade. Sinta o calor humano enquanto explora bairros como Kensington Market e experimenta a mistura única de culturas que torna Toronto uma metrópole verdadeiramente global.'],
      hotel: {
        nome: 'Courtyard Toronto',
        endereco: '475 Yonge Street',
        temCafe: true,
        tipoQuarto: TipoQuarto.duploSuperluxo
      },
      carro: {
        tipo: TipoCarro.hatchPremium,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    viena: {
      titulo: 'Uma viagem inesquecível',
      valor: 5590,
      foto: "viagens/viena.png",
      dataIda: '05/03/2024',
      dataVolta: '10/03/2024',
      origem: 'Recife',
      estadoOrigem: 'Pernambuco',
      destino: 'Viena',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Explore Viena, a capital austríaca que exala elegância imperial e arte clássica. Passeie pelos palácios majestosos, como o Belvedere e o Schönbrunn, testemunhando a grandiosidade da história austríaca. Visite a Ópera Estatal de Viena, um ícone da música clássica, e sinta-se envolvido pela atmosfera cultural única da cidade.', 'Mergulhe na tradição culinária vienense em cafés históricos, saboreando uma fatia de Sachertorte acompanhada de um café típico local. Explore os museus de renome, como o Kunsthistorisches Museum, que abriga tesouros artísticos de períodos diversos. Viena é uma experiência de regate cultural, onde a elegância e a arte se entrelaçam em um cenário encantador.'],
      hotel: {
        nome: 'Sweet Home Townhouse',
        endereco: '86 Mollardgasse, Mariahilf',
        temCafe: true,
        tipoQuarto: TipoQuarto.duploSuperluxo
      },
      carro: {
        tipo: TipoCarro.sedanPremium,
        comAr: true,
        cambio: CarroCambio.manual
      }
    },
    salvador: {
      titulo: 'Um encontro com o Brasil',
      valor: 850,
      foto: "viagens/salvador.png",
      dataIda: '07/09/2024',
      dataVolta: '17/09/2024',
      origem: 'Florianópolis',
      estadoOrigem: 'Santa Catarina',
      destino: 'Salvador',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Sinta a batida do coração cultural de Salvador, onde a música, a dança e a história se entrelaçam de maneira única. Explore o Pelourinho, declarado Patrimônio Mundial pela UNESCO, e mergulhe na herança afro-brasileira. Uma experiência que é uma verdadeira celebração da diversidade brasileira.', 'Além dos pontos históricos, participe de festivais como o Carnaval de Salvador, onde a alegria e a energia contagiante tomam conta das ruas. Descubra a rica cena musical, saboreie a deliciosa culinária baiana e deixe-se levar pela magia cultural que torna Salvador um destino mágico, sagrado e profano.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    arraialDoCabo: {
      titulo: 'Maldivas brasileiras',
      valor: 999,
      foto: "viagens/arraialDoCabo.png",
      dataIda: '23/08/2024',
      dataVolta: '23/09/2024',
      origem: 'Manaus',
      estadoOrigem: 'Amazonas',
      destino: 'Arraial do Cabo',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Descubra as Maldivas brasileiras em Arraial do Cabo, um refúgio tropical de águas cristalinas e praias paradisíacas. Mergulhe nas piscinas naturais, explore as trilhas costeiras e relaxe em um ambiente que parece saído de um sonho. Uma escapada perfeita para quem busca o paraíso na Terra.', 'Além das praias deslumbrantes, explore a vida marinha rica e colorida ao fazer mergulho ou snorkeling. As formações rochosas únicas e as águas transparentes criam um cenário perfeito para atividades aquáticas. Em Arraial do Cabo, cada momento é uma experiência tranquila em um verdadeiro paraíso tropical.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    tokyo: {
      titulo: '3 noites em Tokyo',
      valor: 1207,
      foto: "viagens/tokyo.png",
      dataIda: '23/08/2024',
      dataVolta: '26/08/2024',
      origem: 'Vitória',
      estadoOrigem: 'Espírito Santo',
      destino: 'Tokyo',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Bem-vindo a Tokyo, onde tradição e modernidade coexistem harmoniosamente. Explore os templos antigos e os bairros futuristas, experimente a culinária única e mergulhe na cultura pop. Uma metrópole fascinante que oferece uma experiência única no Japão.', 'Além dos pontos turísticos icônicos, mergulhe na cultura local visitando os bairros tradicionais, como Asakusa, e participando de festivais sazonais. Descubra a inovação tecnológica em Akihabara e delicie-se com a autenticidade culinária em pequenos restaurantes de bairro. Tokyo é uma jornada que transcende as expectativas, combinando o antigo e o novo de maneira única.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    recife: {
      titulo: 'Uma viagem inesquecível',
      valor: 5590,
      foto: "viagens/viena.png",
      dataIda: '05/03/2024',
      dataVolta: '10/03/2024',
      origem: 'Recife',
      estadoOrigem: 'Pernambuco',
      destino: 'Viena',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Desfrute do charme costeiro de Recife, uma cidade que combina praias deslumbrantes, arquitetura colonial e uma cena cultural animada. Passeie pelas ruas históricas de Olinda, delicie-se com a culinária local e sinta a energia vibrante do nordeste brasileiro.', 'Além das praias ensolaradas, explore a rica cena artística visitando galerias contemporâneas e participando de eventos culturais. A música e a dança, tão bem representadas nas marchinhas, no samba, no forró e no frevo, estão presentes em toda parte, proporcionando uma atmosfera animada e festiva. Em Recife, cada esquina revela uma nova faceta do Brasil e de sua cultura vibrante.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    cusco: {
      titulo: 'Conheça Cusco',
      valor: 3940,
      foto: "viagens/cusco.png",
      dataIda: '10/01/2025',
      dataVolta: '20/01/2025',
      origem: 'Belo Horizonte',
      estadoOrigem: 'Minas Gerais',
      destino: 'Cusco',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Explore Cusco, o antigo centro do Império Inca e o portal para a majestosa Machu Picchu. Caminhe pelas ruas de paralelepípedos, descubra as ruínas históricas e mergulhe na rica herança cultural dos Andes. Uma experiência única que transporta você de volta no tempo.', 'Além das ruínas incríveis, participe de festivais tradicionais que celebram a cultura inca e experimente a mundialmente famosa culinária local em restaurantes autênticos. Cusco é o ponto de partida para uma jornada épica até Machu Picchu, onde a história antiga e as paisagens deslumbrantes se encontram em perfeita harmonia. Uma viagem transcendental os espera!'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    sidney: {
      titulo: 'Estude na Austrália',
      valor: 6020,
      foto: "viagens/sidney.png",
      dataIda: '25/02/2025',
      origem: 'Goiânia',
      estadoOrigem: 'Goiás',
      destino: 'Sidney',
      tipo: TipoViagem.ida,
      descricao: ['Combine educação e aventura na Austrália, onde universidades de renome internacional coexistem com paisagens deslumbrantes. De Sydney à Grande Barreira de Coral, cada momento de estudo é uma oportunidade para explorar a diversidade natural e cultural deste país incrível.', 'Além do conhecimento adquirido nas salas de aula, participe de atividades ao ar livre, como surf nas praias da Gold Coast ou mergulho nas águas cristalinas da Grande Barreira de Coral. A Austrália oferece não apenas uma educação de classe mundial, mas também uma experiência de vida que vai além dos livros didáticos.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    bangkok: {
      titulo: 'Uma semana incrível',
      valor: 9370,
      foto: "viagens/bangkok.png",
      dataIda: '18/03/2025',
      dataVolta: '25/03/2025',
      origem: 'São Luis',
      estadoOrigem: 'Maranhão',
      destino: 'Bangkok',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Imerja-se na vibrante cultura de Bangkok, a capital tailandesa. Dos templos sagrados aos mercados coloridos e agitados, cada canto revela a riqueza da tradição tailandesa. Experimente a culinária de rua, participe das festividades locais e descubra por que Bangkok é conhecida como a "Cidade dos Anjos".', 'Explore o Grande Palácio Real, onde a arquitetura requintada é um testemunho da história da Tailândia. Navegue pelos canais de Bangkok em um passeio de barco, testemunhando a vida cotidiana nas margens pitorescas. Cada rua é uma explosão de cores, sabores e tradições milenares que criam uma experiência única e memorável.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    paris: {
      titulo: 'Visite a cidade luz',
      valor: 12356,
      foto: "viagens/paris.png",
      dataIda: '05/04/2025',
      dataVolta: '30/04/2025',
      origem: 'Brasília',
      estadoOrigem: 'Distrito Federal',
      destino: 'Paris',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Bem-vindo a Paris, a cidade que inspira o amor e celebra a arte. Passeie pelas margens do Sena, admire a Torre Eiffel iluminada à noite e explore por horas a fio, sem cansar, os museus que abrigam obras-primas icônicas. Uma experiência romântica e cultural que cativa os corações de visitantes de todo o mundo.', 'Descubra os encantos escondidos de Montmartre, onde artistas de rua e cafés pitorescos criam uma atmosfera boêmia. Deixe-se perder nas galerias do Louvre, onde a história da arte ganha vida, desde a Mona Lisa até as esculturas majestosas. Paris é uma jornada de descoberta que mistura o esplendor arquitetônico com o romantismo envolvente, criando memórias inesquecíveis.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    amsterda: {
      titulo: '5 dias em Amsterdã',
      valor: 5700,
      foto: "viagens/amsterda.png",
      dataIda: '02/05/2025',
      dataVolta: '07/05/2025',
      origem: 'Maceió',
      estadoOrigem: 'Alagoas',
      destino: 'Amsterdã',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Descubra o encanto único de Amsterdã, uma cidade onde os canais serpenteiam entre arquitetura histórica e moderna. Explore museus renomados, pedale pelas ruas pitorescas e sinta a atmosfera acolhedora que define a Holanda. Uma jornada pela cultura e o charme holandês.', 'Além dos canais icônicos, mergulhe nas obras de Van Gogh no Museu Van Gogh e explore a Casa de Anne Frank para uma perspectiva histórica única. Desfrute dos mercados animados, como o Albert Cuypmarkt, e prove os queijos artesanais gouda e os deliciosos stroopwafels enquanto absorve a energia amigável dos locais. Amsterdã é uma mistura encantadora de tradição e modernidade, onde cada passeio revela um pedaço da rica herança holandesa.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    cidadeDoMexico: {
      titulo: 'México como você nunca viu',
      valor: 2460,
      foto: "viagens/cidadeDoMexico.png",
      dataIda: '14/05/2025',
      dataVolta: '24/05/2025',
      origem: 'Belém',
      estadoOrigem: 'Pará',
      destino: 'Cidade do México',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Mergulhe na rica história e nas cores vibrantes da Cidade do México. Dos antigos sítios arqueológicos aos bairros modernos, cada parte da cidade conta uma história única. Saboreie a autêntica comida mexicana, explore mercados movimentados e apaixone-se pela energia contagiante desta metrópole.', 'Visite o Zócalo, a praça principal, cercada por tesouros arquitetônicos, como a Catedral Metropolitana e o Palácio Nacional. Passeie por bairros como La Condesa, onde a arquitetura Art Déco se une a cafés elegantes e parques arborizados. Na Cidade do México, a fusão de tradição e modernidade cria uma experiência vibrante e culturalmente rica.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    madrid: {
      titulo: 'Viva a noite de Madrid',
      valor: 1900,
      foto: "viagens/madrid.png",
      dataIda: '10/06/2025',
      dataVolta: '20/06/2025',
      origem: 'Porto Alegre',
      estadoOrigem: 'Rio Grande do Sul',
      destino: 'Madrid',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Explore Madrid, a vibrante capital espanhola que combina energia moderna com uma rica herança cultural. De museus de classe mundial a praças animadas, cada canto da cidade é uma celebração da vida espanhola. Desfrute da culinária deliciosa, da arquitetura magnífica e do caloroso espírito espanhol.', 'Passeie pelo Parque do Retiro, um oásis verde no coração da cidade, antes de explorar os corredores do famoso Museu do Prado. Mergulhe na atmosfera animada da Puerta del Sol e delicie-se com tapas, tortillas e sangrias em bares tradicionais de bairro. Em Madrid, a paixão pela vida e a herança cultural se manifestam em cada esquina, criando uma experiência autêntica e envolvente.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    losAngeles: {
      titulo: 'O melhor de Los Angeles',
      valor: 10850,
      foto: "viagens/losAngeles.png",
      dataIda: '25/07/2025',
      dataVolta: '30/07/2025',
      origem: 'Palmas',
      estadoOrigem: 'Tocantins',
      destino: 'Los Angeles',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Bem-vindo a Los Angeles, onde o brilho de Hollywood encontra praias deslumbrantes. Passeie pela Calçada da Fama e sinta-se parte do glamour cinematográfico. Explore os estúdios de cinema e testemunhe a magia por trás das telas. Relaxe em Santa Monica Pier, onde a atmosfera descontraída e as vistas panorâmicas do Oceano Pacífico cativam todos que visitam.', 'Descubra a diversidade cultural em bairros como Chinatown e Little Tokyo, saboreando a culinária internacional. Faça caminhadas nas trilhas das colinas de Hollywood para vistas espetaculares da cidade. Los Angeles é uma mistura dinâmica de cultura pop, entretenimento e belezas naturais que oferece uma experiência única.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
    lisboa: {
      titulo: 'Passeie pela capital portuguesa',
      valor: 2397,
      foto: "viagens/lisboa.png",
      dataIda: '14/08/2025',
      dataVolta: '24/08/2025',
      origem: 'Teresina',
      estadoOrigem: 'Piauí',
      destino: 'Lisboa',
      tipo: TipoViagem.idaEVolta,
      descricao: ['Conheça a capital portuguesa, onde a história, o fado e o charme se encontram à beira do rio Tejo. Passeie pelas ruas estreitas do Bairro Alto, onde a música tradicional ecoa dos bares e restaurantes. Descubra os bairros históricos de Alfama e Mouraria, mergulhando na atmosfera autêntica da cidade.', 'Suba até o Castelo de São Jorge para lindas vistas panorâmicas da bela arquitetura e do rio. Delicie-se com os sabores da culinária portuguesa em tasquinhas locais e prove os famosos pastéis de nata. Lisboa é uma cidade onde a nostalgia histórica se mistura com a vitalidade contemporânea, criando uma experiência única à beira do Atlântico.'],
      hotel: {
        nome: 'Classic Bahia Hotel',
        endereco: 'R. Fernando Menezes de Goes n° 1936, Pituba',
        temCafe: true,
        tipoQuarto: TipoQuarto.individual
      },
      carro: {
        tipo: TipoCarro.sedan,
        comAr: true,
        cambio: CarroCambio.automatico
      }
    },
  }
};

export default server;
