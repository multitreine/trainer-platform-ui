"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import _ from "lodash";

const transFormPriceSection = (details: any) => {
  const priceSection = {
    price: details?.price,
    textPrice: details?.textPrice,
    documents: details?.Documents?.map((document: any) => ({
      title: document?.title,
      path: getPathImage(document?.path),
      type: document?.type,
      mime: document?.mime,
      id: document?._id,
    })),
    time: details?.time,
    hourlyLoad: details?.hourlyLoad,
    date: details?.date,
    interval: details?.interval,
  };
  return priceSection;
};

const truncateTitle = (title: string, length: number) => {
  return title.length > length ? `${title.slice(0, length)}...` : title;
};

const PriceSection = ({ details }: any) => {
  const dataPriceSection = transFormPriceSection(details);

  const handleDownload = (path: string) => {
    window.open(path, "_blank");
  };

  if (!dataPriceSection?.price) {
    return null;
  }

  return (
    <div className="lg:col-span-1">
      <div className=" rounded-lg p-6 sticky top-4 w-[100%] lg:w-[130%]">
        <div className="bg-white rounded-lg p-6 mt-[4.3rem]">
          <h2 className="text-3xl font-bold mb-4">
            R$ {dataPriceSection?.price}
          </h2>
          <p className="text-gray-600 mb-4">{dataPriceSection.textPrice}</p>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button className="w-full flex justify-between items-center">
                Inscreva-se
                <ChevronDown className="ml-2" />
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

        {/* Detalhes do Curso */}
        <div className="bg-white rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-2">Detalhes do Curso</h3>
          <ul className="space-y-2">
            {dataPriceSection?.time && (
              <li className="flex justify-between">
                <span>Horário</span>
                <span>{dataPriceSection?.time}</span>
              </li>
            )}
            {dataPriceSection?.hourlyLoad && (
              <li className="flex justify-between">
                <span>Carga Horária</span>
                <span>{dataPriceSection?.hourlyLoad}</span>
              </li>
            )}
            {dataPriceSection?.interval && (
              <li className="flex justify-between">
                <span>Intervalo</span>
                <span>{dataPriceSection?.interval}</span>
              </li>
            )}
            {dataPriceSection?.date && (
              <li className="flex justify-between">
                <span>Data</span>
                <span>{dataPriceSection?.date}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Collapsible para Documentos */}
        <div className="p-6 bg-white">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button className="w-full mb-4 flex justify-between items-center">
                Documentos
                <ChevronDown className="ml-2" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-2">
              {dataPriceSection.documents?.map((doc: any) => (
                <div key={doc.id} className="flex justify-between items-center">
                  <span className="truncate w-3/4" title={doc.title}>
                    {truncateTitle(doc.title, 30)}
                  </span>
                  <Button
                    variant="link"
                    className="text-blue-500"
                    onClick={() => handleDownload(doc.path)}
                  >
                    Download
                  </Button>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export { PriceSection };
