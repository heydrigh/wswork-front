import { Car } from 'types/car';

export const carMock = {
  id: 1,
  timestamp_cadastro: 1634107200, // Replace with your timestamp
  modelo_id: 101,
  ano: 2022,
  combustivel: 'Gasolina',
  num_portas: 4,
  cor: 'Vermelho',
  nome_modelo: 'Carro X',
  valor: 30000,
  brand: 'Marca XX',
} satisfies Car;
