"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseLandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Logo"
            width={120}
            height={40}
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <Button variant="default">Login</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">
              LICITAÇÃO EXCLUSIVO PARA EMPRESAS
            </h1>
            <p className="text-gray-600 mb-4">
              Impactantes mudanças no regime das licitações e das contratações
              públicas.
            </p>
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Course Image"
                width={800}
                height={400}
                className="w-full"
              />
            </div>

            {/* Tabs with horizontal scroll on titles */}
            <div className="mb-6">
              <Tabs defaultValue="presentation">
                <div className="overflow-x-auto scrollbar-hide">
                  <TabsList className="w-max flex space-x-4">
                    <TabsTrigger value="presentation">
                      Apresentação do curso
                    </TabsTrigger>
                    <TabsTrigger value="content">
                      Conteúdo programático
                    </TabsTrigger>
                    <TabsTrigger value="target">Público Alvo</TabsTrigger>
                    <TabsTrigger value="investment">
                      Valor do investimento
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Tabs Content */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <TabsContent value="presentation">
                    <h2 className="text-2xl font-bold mb-2">
                      O que você irá aprender
                    </h2>
                    <p className="text-gray-600">
                      O principal objetivo desse curso é capacitar todos aqueles
                      que participam ou desejam participar de licitações na
                      condição de representante de empresas, preparando-os para
                      que se tornem prepostos profissionais, bem como qualificar
                      as empresas que desejam contratar com o Poder público,
                      para que conheçam melhor seus direitos no que tange a
                      pedidos de esclarecimentos, impugnações, recursos
                      administrativos, contra razões, denúncias e
                      Direitos/Deveres na condição de contratada.
                    </p>
                  </TabsContent>
                  <TabsContent value="content">
                    <h2 className="text-2xl font-bold mb-2">
                      Conteúdo do curso
                    </h2>
                    <p className="text-gray-600">
                      Detalhes do conteúdo programático serão exibidos aqui.
                    </p>
                  </TabsContent>
                  <TabsContent value="target">
                    <h2 className="text-2xl font-bold mb-2">Público Alvo</h2>
                    <p className="text-gray-600">
                      Informações sobre o público-alvo do curso serão exibidas
                      aqui.
                    </p>
                  </TabsContent>
                  <TabsContent value="investment">
                    <h2 className="text-2xl font-bold mb-2">
                      Valor do investimento
                    </h2>
                    <p className="text-gray-600">
                      Detalhes sobre o valor do investimento serão exibidos
                      aqui.
                    </p>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* Right Column (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-6 mb-6 sticky top-4">
              <h2 className="text-3xl font-bold mb-4">R$ 900,00</h2>
              <p className="text-gray-600 mb-4">Valor do investimento</p>
              <Button className="w-full mb-4">Download PDF</Button>
              <Collapsible open={isFormOpen} onOpenChange={setIsFormOpen}>
                <CollapsibleTrigger asChild>
                  <Button className="w-full flex justify-between items-center">
                    Inscreva-se
                    {isFormOpen ? (
                      <ChevronUp className="ml-2" />
                    ) : (
                      <ChevronDown className="ml-2" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome do Aluno</Label>
                      <Input id="name" placeholder="Nome" />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" placeholder="000.000.000-00" />
                    </div>
                    <div>
                      <Label htmlFor="birthdate">Data de Nascimento</Label>
                      <Input id="birthdate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="company">Nome da Empresa</Label>
                      <Input id="company" placeholder="Empresa" />
                    </div>
                    <div>
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" placeholder="00.000.000/0000-00" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@dominio.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="education">Grau de Instrução</Label>
                      <Input id="education" placeholder="Grau de Instrução" />
                    </div>
                    <div>
                      <Label htmlFor="profession">
                        Profissão ou Área de Atuação
                      </Label>
                      <Input
                        id="profession"
                        placeholder="Profissão ou Área de Atuação"
                      />
                    </div>
                    <div>
                      <Label htmlFor="source">
                        Como você ficou sabendo do curso?
                      </Label>
                      <Input
                        id="source"
                        placeholder="Como você ficou sabendo do curso?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                    <Button type="submit" className="w-full">
                      Confirmar Inscrição
                    </Button>
                  </form>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Detalhes do Curso</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Horário</span>
                  <span>8:00 às 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Carga Horária</span>
                  <span>8h/aula</span>
                </li>
                <li className="flex justify-between">
                  <span>Data</span>
                  <span>A definir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facilitators Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">FACILITADORES</h2>
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Ronaldo Corrêa"
              width={150}
              height={150}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Ronaldo Corrêa</h3>
              <p className="text-gray-600">Professor e Comprador Público</p>
              <p className="text-gray-600 mt-2">
                Servidor público federal, atua na área de licitações e contratos
                há mais de quinze anos e já ocupou funções técnicas e gerenciais
                na Polícia Federal, na Controladoria-Geral da União e no
                Ministério da Justiça e Segurança Pública. É especialista em
                licitações e graduado em Direito Administrativo e Gestão
                Pública.
              </p>
            </div>
          </div>
        </section>

        {/* Related Courses Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Cursos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt={`Related Course ${i}`}
                  width={400}
                  height={200}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    LICITAÇÃO EXCLUSIVO PARA EMPRESAS
                  </h3>
                  <p className="text-gray-600">
                    Impactantes mudanças no regime das licitações e das
                    contratações públicas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
