
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import ResultsDisplay from "./ResultsDisplay";
import ParametersTable from "./ParametersTable";

export interface CalculationResults {
  totalCost: number;
  totalFloors: number;
  componentsBreakdown: {
    beams: number;
    columns: number;
    foundation: number;
    envelope: number;
    mep: number;
  };
  costByFloor: number[];
}

export interface ConstructionParameters {
  civil: number;
  structural: number;
  beams: number;
  columns: number;
  foundation: number;
  envelope: number;
  mep: number;
}

const defaultParameters: ConstructionParameters = {
  civil: 60,
  structural: 60,
  beams: 40,
  columns: 30,
  foundation: 30,
  envelope: 40,
  mep: 40
};

const CalculatorForm = () => {
  const [basicFloorCost, setBasicFloorCost] = useState<number>(1000000);
  const [numberOfFloors, setNumberOfFloors] = useState<number>(10);
  const [parameters, setParameters] = useState<ConstructionParameters>(defaultParameters);
  const [groundFloorParking, setGroundFloorParking] = useState<boolean>(false);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateCost = () => {
    // Calculate cost breakdown by component
    let floorCosts: number[] = [];
    let totalCost = 0;
    let componentsBreakdown = {
      beams: 0,
      columns: 0,
      foundation: 0,
      envelope: 0,
      mep: 0
    };

    for (let floor = 1; floor <= numberOfFloors; floor++) {
      // Apply increasing cost factor for higher floors
      const heightFactor = 1 + (floor - 1) * 0.015;
      
      // Calculate cost for this floor
      const floorCost = basicFloorCost * heightFactor;
      
      // Calculate component costs
      const beamsCost = floorCost * (parameters.beams / 100);
      const columnsCost = floorCost * (parameters.columns / 100);
      const foundationCost = floor === 1 ? floorCost * (parameters.foundation / 100) : 0;
      const envelopeCost = floorCost * (parameters.envelope / 100);
      const mepCost = floorCost * (parameters.mep / 100);
      
      // Add to breakdown
      componentsBreakdown.beams += beamsCost;
      componentsBreakdown.columns += columnsCost;
      componentsBreakdown.foundation += foundationCost;
      componentsBreakdown.envelope += envelopeCost;
      componentsBreakdown.mep += mepCost;
      
      // Calculate floor total cost
      const floorTotalCost = beamsCost + columnsCost + foundationCost + envelopeCost + mepCost;
      floorCosts.push(floorTotalCost);
      totalCost += floorTotalCost;
    }

    setResults({
      totalCost,
      totalFloors: numberOfFloors,
      componentsBreakdown,
      costByFloor: floorCosts
    });
  };

  const handleParameterChange = (key: keyof ConstructionParameters, value: number) => {
    setParameters({
      ...parameters,
      [key]: value
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Input Parameters</h3>
        <Separator className="mb-4" />
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="basicFloorCost">Cost of Basic Floor ($)</Label>
              <Input
                id="basicFloorCost"
                type="number"
                value={basicFloorCost}
                onChange={(e) => setBasicFloorCost(Number(e.target.value))}
                className="input-field"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="numberOfFloors">Number of Floors</Label>
              <Input
                id="numberOfFloors"
                type="number"
                value={numberOfFloors}
                onChange={(e) => setNumberOfFloors(Number(e.target.value))}
                min={1}
                className="input-field"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="groundFloorParking"
              checked={groundFloorParking}
              onCheckedChange={setGroundFloorParking}
            />
            <Label htmlFor="groundFloorParking">
              Is ground floor given as parking and security offices?
            </Label>
          </div>
        </div>
      </Card>
      
      <ParametersTable 
        parameters={parameters} 
        onParameterChange={handleParameterChange} 
      />
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={calculateCost}
          className="bg-construction-blue hover:bg-construction-accent text-white px-8 py-2"
        >
          Calculate Cost
        </Button>
      </div>
      
      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default CalculatorForm;
