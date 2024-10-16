import Image from "next/image";

const professores = [
  {
    id: 1,
    nome: "João Silva",
    especialidade: "Desenvolvimento Web",
    descricao:
      "Especialista em React e Node.js com mais de 10 anos de experiência.",
    categoria: "Programação",
    imagem: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    nome: "Maria Santos",
    especialidade: "Design de Interfaces",
    descricao:
      "Designer premiada com foco em experiência do usuário e interfaces modernas.",
    categoria: "Design",
    imagem: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    nome: "Carlos Oliveira",
    especialidade: "Marketing Digital",
    descricao:
      "Consultor de marketing digital com vasta experiência em campanhas de sucesso.",
    categoria: "Marketing",
    imagem: "/placeholder.svg?height=100&width=100",
  },
];

export function ListaProfessores({ filtros = {
  categoria: [],

} }) {
  const professoresFiltrados = professores.filter((professor: any) => {

    if (!filtros?.categoria || !professor) {
      return true;
    }

    return (
      !filtros?.categoria ||
      filtros?.categoria.length === 0 
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {professoresFiltrados.map((professor) => (
        <div
          key={professor.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4 flex items-center">
            <Image
              src={professor.imagem}
              alt={professor.nome}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-1">{professor.nome}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {professor.especialidade}
              </p>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {professor.categoria}
              </span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <p className="text-gray-600">{professor.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
