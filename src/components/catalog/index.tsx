"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Filtros } from "@/components/catalog/filter";
import ListaCursos from "@/components/catalog/ListCourses";
import { TeachersCatalog } from "@/components/catalog/ListTeachers";

type Filtros = {
  categoria: string[];
  nivel: string[];
  preco: string[];
};

export function Catalog() {
  const [activeTab, setActiveTab] = useState("professores");
  const [filtros, setFiltros] = useState<any>({
    categoria: [],
    nivel: [],
    preco: [],
  });
  const [isFiltroVisivel, setIsFiltroVisivel] = useState(false);

  const handleFiltroChange = (tipo: keyof Filtros, valor: string) => {
    setFiltros((prevFiltros: any) => ({
      ...prevFiltros,
      [tipo]: prevFiltros[tipo]
        ? prevFiltros[tipo]?.includes(valor)
        : false
        ? prevFiltros[tipo].filter((item: any) => item !== valor)
        : [...prevFiltros[tipo], valor],
    }));
  };

  const toggleFiltro = () => {
    setIsFiltroVisivel(!isFiltroVisivel);
  };

  return (
    <div className="min-h-screen">
      <div className="container  mx-auto px-4 py-8">
        <h1 className="text-3xl mt-28 font-bold mb-6">Cursos e Professores</h1>
        <div className="lg:hidden mb-4">
          <Button onClick={toggleFiltro} variant="outline" className="w-full">
            {isFiltroVisivel ? (
              <>
                <X className="mr-2 h-4 w-4" /> Fechar Filtros
              </>
            ) : (
              <>
                <Filter className="mr-2 h-4 w-4" /> Abrir Filtros
              </>
            )}
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside
            className={`w-full lg:w-1/4 transition-all duration-300 ease-in-out ${
              isFiltroVisivel
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:max-h-screen lg:opacity-100"
            }`}
          >
            <div className="lg:sticky lg:top-4">
              <Filtros filtros={filtros} onFiltroChange={handleFiltroChange} />
            </div>
          </aside>
          <main className="w-full lg:w-3/4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full mb-6">
                <div className="bg-slate-100 w-full rounded-lg shadow-md">
                  <TabsTrigger value="professores" className="w-1/2 h-9">
                    Professores
                  </TabsTrigger>
                  <TabsTrigger value="cursos" className="w-1/2 h-9">
                    Cursos
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="professores">
                <TeachersCatalog />
              </TabsContent>
              <TabsContent value="cursos">
                <ListaCursos filtros={filtros} />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}
