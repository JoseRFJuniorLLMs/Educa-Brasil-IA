import { useState } from 'react';

const AlunoForm = () => {
  const [aluno, setAluno] = useState({
    nomeCompleto: '',
    nomeSocial: '',
    dtNascimento: '',
    sexo: '',
    cpf: '',
    certidaoNascimento: {
      tipo: '',
      numero: '',
      livro: '',
      folha: '',
      dataEmissao: '',
      cartorioUfId: '',
      cartorioUfSigla: '',
      cartorioCidadeId: '',
      cartorioCidadeNome: '',
    },
    rg: {
      numero: '',
      complemento: '',
      orgaoEmissor: '',
      ufId: '',
      ufSigla: '',
      dataEmissao: '',
    },
    documentosAdicionais: {
      nis: '',
      inepId: '',
      susCartao: '',
      tituloEleitor: {
        numero: '',
        zona: '',
        secao: '',
      },
      cnh: '',
      passaporte: '',
    },
    racaCorId: '',
    racaCorNome: '',
    nacionalidadePaisId: '',
    nacionalidadePaisNome: '',
    naturalidadeCidadeId: '',
    naturalidadeCidadeNome: '',
    naturalidadeUfSigla: '',
    endereco: {
      logradouro: '',
      numero: '',
      complemento: '',
      bairroId: '',
      bairroNome: '',
      cidadeId: '',
      cidadeNome: '',
      ufId: '',
      ufSigla: '',
      cep: '',
      referencia: '',
      latitude: '',
      longitude: '',
      zona: '',
    },
    contatos: [
      { tipo: 'telefone', valor: '', obs: '' },
      { tipo: 'telefone', valor: '', obs: '' },
      { tipo: 'email', valor: '', obs: '' },
    ],
    filiacao: {
      maeId: '',
      maeNome: '',
      paiId: '',
      paiNome: '',
    },
    responsaveisResumo: [
      {
        responsavelId: '',
        nome: '',
        tipoRelacaoId: 5,
        tipoRelacaoNome: 'Responsável Legal',
        autorizadoBuscar: true,
      },
    ],
    statusGeral: 'Ativo',
    matriculaAtual: {
      id: '',
      estabelecimentoId: '',
      estabelecimentoNome: '',
      turmaId: '',
      turmaNome: '',
      serieId: '',
      serieNome: '',
      turnoId: '',
      turnoNome: '',
      situacaoMatriculaId: '',
      situacaoMatriculaNome: '',
      dataEntrada: '',
      numeroChamada: '',
    },
    saude: {
      pcd: false,
      necessidadesEspeciais: [],
      alergias: [],
      usaMedicacaoContinua: false,
      medicacaoDescricao: '',
      tipoSanguineo: '',
      acompanhamentoMedico: '',
    },
    transporte: {
      necessario: false,
      tipoVeiculoId: '',
      distancia: '',
    },
    fotoUrl: '',
    observacoesGerais: '',
    dataCadastroSistema: '',
    ultimaAtualizacao: '',
    ativo: true,
    bolsaFamilia: false,
    gestante: false,
    dataProvavelParto: '',
    acolhimento: '',
    programasSociais: false,
    aee: {
      complementar: false,
      autonomia: false,
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
  
    const finalValue =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value;
  
    const keys = name.split('.');
    if (keys.length === 1) {
      setAluno((prev) => ({ ...prev, [name]: finalValue }));
    } else {
      setAluno((prev) => {
        const newAluno = { ...prev };
        let obj: any = newAluno;
        for (let i = 0; i < keys.length - 1; i++) {
          obj = obj[keys[i]];
        }
        obj[keys[keys.length - 1]] = finalValue;
        return newAluno;
      });
    }
  };
  
  return (
    <div>
      <h2>Cadastro de Aluno</h2>
      <form>
        <label>
          Nome Completo:
          <input
            type="text"
            name="nomeCompleto"
            value={aluno.nomeCompleto}
            onChange={handleChange}
          />
        </label>
        <label>
          Nome Social:
          <input
            type="text"
            name="nomeSocial"
            value={aluno.nomeSocial}
            onChange={handleChange}
          />
        </label>
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dtNascimento"
            value={aluno.dtNascimento}
            onChange={handleChange}
          />
        </label>
        <label>
          Sexo:
          <select name="sexo" value={aluno.sexo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
          </select>
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={aluno.cpf}
            onChange={handleChange}
          />
        </label>

        {/* Certidão de Nascimento */}
        <label>
          Tipo de Certidão:
          <input
            type="text"
            name="certidaoNascimento.tipo"
            value={aluno.certidaoNascimento.tipo}
            onChange={handleChange}
          />
        </label>
        <label>
          Número da Certidão:
          <input
            type="text"
            name="certidaoNascimento.numero"
            value={aluno.certidaoNascimento.numero}
            onChange={handleChange}
          />
        </label>

        {/* Contatos */}
        <div>
          <h3>Contatos</h3>
          {aluno.contatos.map((contato, index) => (
            <div key={index}>
              <label>
                Tipo de Contato:
                <input
                  type="text"
                  name={`contatos.${index}.tipo`}
                  value={contato.tipo}
                  onChange={handleChange}
                />
              </label>
              <label>
                Valor:
                <input
                  type="text"
                  name={`contatos.${index}.valor`}
                  value={contato.valor}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Saúde */}
        <label>
          Possui Necessidades Especiais:
          <input
            type="checkbox"
            name="saude.pcd"
            checked={aluno.saude.pcd}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AlunoForm;
