export default function handler(req, res) {
  const { codigo } = req.query;
  const dados = [
    { codigo: '94081642', nome: 'Melinda', saldo: '19,48', entrada: '01/09/2024 22:41:41' },
    { codigo: '73009303', nome: 'Victor Gohan', saldo: '29,75', entrada: '01/09/2024 22:56:24' },
    { codigo: '30478188', nome: 'José Davi', saldo: '18,98', entrada: '05/09/2024 10:29:52' }
  ];

  const relatorio = dados.find(item => item.codigo === codigo);
  if (relatorio) {
    res.status(200).json({ sucesso: true, resultado: relatorio });
  } else {
    res.status(404).json({ sucesso: false });
  }
}