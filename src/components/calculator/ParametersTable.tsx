
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { ConstructionParameters } from "./CalculatorForm";

interface ParametersTableProps {
  parameters: ConstructionParameters;
  onParameterChange: (key: keyof ConstructionParameters, value: number) => void;
}

const ParametersTable: React.FC<ParametersTableProps> = ({ parameters, onParameterChange }) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">Construction Parameters</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Adjust the inputs below according to the project's complexity, as they vary based on different 
        architectural and user requirements.
      </p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>% Construction Cost</TableHead>
            <TableHead className="w-[200px]">Adjust</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Civil</TableCell>
            <TableCell>{parameters.civil}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.civil]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("civil", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1</TableCell>
            <TableCell>Structural</TableCell>
            <TableCell>{parameters.structural}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.structural]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("structural", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>Beams & Slab</TableCell>
            <TableCell>{parameters.beams}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.beams]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("beams", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.2</TableCell>
            <TableCell>Column</TableCell>
            <TableCell>{parameters.columns}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.columns]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("columns", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.3</TableCell>
            <TableCell>Foundation</TableCell>
            <TableCell>{parameters.foundation}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.foundation]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("foundation", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.2</TableCell>
            <TableCell>Envelope</TableCell>
            <TableCell>{parameters.envelope}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.envelope]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("envelope", value[0])}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>MEP</TableCell>
            <TableCell>{parameters.mep}%</TableCell>
            <TableCell>
              <Slider
                value={[parameters.mep]}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => onParameterChange("mep", value[0])}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default ParametersTable;
