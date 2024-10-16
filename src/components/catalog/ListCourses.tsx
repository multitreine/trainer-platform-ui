import { useCoursesStore } from "@/store/courses";
import _ from "lodash";
import Image from "next/image";

// Definindo o tipo para os filtros
type Filtros = {
  categoria?: string[];
  nivel?: string[];
  preco?: string[];
};

// Definindo o tipo para os cursos
type Curso = {
  id: number;
  titulo: string;
  descricao: string;
  instrutor: string;
  categoria: string;
  nivel: string;
  preco: string;
  imagem: string;
};

// Exemplo de cursos
const cursos: Curso[] = [
  {
    id: 1,
    titulo: "Introdução ao React",
    descricao:
      "Aprenda os fundamentos do React e crie aplicações web modernas.",
    instrutor: "João Silva",
    categoria: "Programação",
    nivel: "Iniciante",
    preco: "Pago",
    imagem: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    titulo: "Design de Interfaces",
    descricao:
      "Domine as técnicas de design de interfaces para criar experiências incríveis.",
    instrutor: "Maria Santos",
    categoria: "Design",
    nivel: "Intermediário",
    preco: "Pago",
    imagem: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    titulo: "Marketing Digital",
    descricao:
      "Aprenda estratégias eficazes de marketing digital para impulsionar seus negócios.",
    instrutor: "Carlos Oliveira",
    categoria: "Marketing",
    nivel: "Iniciante",
    preco: "Grátis",
    imagem: "/placeholder.svg?height=100&width=100",
  },
];

// Definindo os tipos para as props do componente
type ListaCursosProps = {
  coursesData?: Curso[];
  filtros?: Filtros;
};

export function ListaCursosComponent({
  coursesData = cursos,
  filtros = {},
}: ListaCursosProps) {
  const cursosFiltrados = coursesData.filter((curso) => {
    if (_.isEmpty(filtros) || !filtros?.categoria) {
      return true;
    }

    return (
      (!filtros?.categoria ||
        filtros?.categoria?.length === 0 ||
        filtros?.categoria?.includes(curso?.categoria)) &&
      (!filtros?.nivel ||
        filtros?.nivel?.length === 0 ||
        filtros?.nivel?.includes(curso?.nivel)) &&
      (!filtros?.preco ||
        filtros?.preco?.length === 0 ||
        filtros?.preco?.includes(curso?.preco))
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cursosFiltrados.map((curso) => (
        <div
          key={curso.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={curso.imagem}
            alt={curso.titulo}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{curso.titulo}</h3>
            <p className="text-gray-600 mb-4">{curso.descricao}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Instrutor: {curso.instrutor}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {curso.preco}
              </span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {curso.categoria}
              </span>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {curso.nivel}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Wrapper para buscar os cursos da store
const wrapperCourses = (Component: any) => {
  return async function WrapperCourses({ filtros }: { filtros: Filtros }) {
    const courses = await useCoursesStore.getState().fetchCourses();
    const coursesData = useCoursesStore.getState().courses;

    return <Component coursesData={coursesData} filtros={filtros} />;
  };
};

export const ListaCursos = wrapperCourses(ListaCursosComponent);
