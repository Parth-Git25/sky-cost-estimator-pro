
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalculationResults } from "./CalculatorForm";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ResultsDisplayProps {
  results: CalculationResults;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  // Prepare data for bar chart
  const barChartData = Array.from({ length: results.totalFloors }, (_, i) => ({
    floor: i + 1,
    cost: results.costByFloor[i]
  }));

  // Prepare data for pie chart
  const pieChartData = [
    { name: 'Beams & Slab', value: results.componentsBreakdown.beams },
    { name: 'Column', value: results.componentsBreakdown.columns },
    { name: 'Foundation', value: results.componentsBreakdown.foundation },
    { name: 'Envelope', value: results.componentsBreakdown.envelope },
    { name: 'MEP', value: results.componentsBreakdown.mep }
  ];

  // Prepare data for stacked bar chart
  const stackedBarData = Array.from({ length: results.totalFloors }, (_, i) => {
    const floorFactor = 1 + i * 0.015;
    return {
      floor: i + 1,
      'Beams & Slab': results.costByFloor[i] * (40 / 100) / floorFactor,
      'Column': results.costByFloor[i] * (30 / 100) / floorFactor,
      'Foundation': i === 0 ? results.costByFloor[i] * (30 / 100) / floorFactor : 0,
      'Envelope': results.costByFloor[i] * (40 / 100) / floorFactor,
      'MEP': results.costByFloor[i] * (40 / 100) / floorFactor,
    };
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Cost Estimate Results</h3>
        <Separator className="mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Floors</p>
            <p className="text-2xl font-bold">{results.totalFloors}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Cost</p>
            <p className="text-2xl font-bold text-construction-blue">
              {formatCurrency(results.totalCost)}
            </p>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Cost by Component</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Cost by Floor Number</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="floor" label={{ value: "Floor Number", position: "insideBottom", offset: -5 }} />
                <YAxis tickFormatter={(value) => `$${value / 1000000}M`} label={{ value: "Cost ($M)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="cost" fill="#2E5984" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Cost Breakdown by Floor</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={stackedBarData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="floor" />
              <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="Beams & Slab" stackId="a" fill="#0088FE" />
              <Bar dataKey="Column" stackId="a" fill="#00C49F" />
              <Bar dataKey="Foundation" stackId="a" fill="#FFBB28" />
              <Bar dataKey="Envelope" stackId="a" fill="#FF8042" />
              <Bar dataKey="MEP" stackId="a" fill="#8884D8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Conclusion</h4>
          <p className="text-muted-foreground">
            Based on the provided inputs, the total cost estimate for a {results.totalFloors}-story skyscraper is 
            {formatCurrency(results.totalCost)}. The cost increases with each floor due to additional structural 
            requirements, with Beams & Slab representing the largest component of the construction costs.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
