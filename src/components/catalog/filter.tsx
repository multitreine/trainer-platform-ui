import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function Filtros({ filtros, onFiltroChange }: any) {
  return (
    <div className="space-y-6 sticky">
      <div>
        <h2 className="text-lg font-semibold mb-2">Categorias</h2>
        <div className="space-y-2">
          {["Programação", "Design", "Marketing", "Negócios"].map(
            (categoria) => (
              <div key={categoria} className="flex items-center">
                <Checkbox
                  id={`categoria-${categoria}`}
                  checked={filtros.categoria.includes(categoria)}
                  onCheckedChange={() => onFiltroChange("categoria", categoria)}
                />
                <Label htmlFor={`categoria-${categoria}`} className="ml-2">
                  {categoria}
                </Label>
              </div>
            )
          )}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Nível</h2>
        <div className="space-y-2">
          {["Iniciante", "Intermediário", "Avançado"].map((nivel) => (
            <div key={nivel} className="flex items-center">
              <Checkbox
                id={`nivel-${nivel}`}
                checked={filtros.nivel.includes(nivel)}
                onCheckedChange={() => onFiltroChange("nivel", nivel)}
              />
              <Label htmlFor={`nivel-${nivel}`} className="ml-2">
                {nivel}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Preço</h2>
        <div className="space-y-2">
          {["Grátis", "Pago"].map((preco) => (
            <div key={preco} className="flex items-center">
              <Checkbox
                id={`preco-${preco}`}
                checked={filtros.preco.includes(preco)}
                onCheckedChange={() => onFiltroChange("preco", preco)}
              />
              <Label htmlFor={`preco-${preco}`} className="ml-2">
                {preco}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
