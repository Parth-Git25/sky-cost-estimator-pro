
import React from "react";
import Layout from "@/components/layout/Layout";
import CalculatorForm from "@/components/calculator/CalculatorForm";

const Calculator = () => {
  return (
    <Layout>
      <div className="section-container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-construction-darkGray mb-4">Skyscraper Cost Calculator</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Enter the required information below to calculate the estimated cost of your multi-story building or skyscraper. 
            Adjust the parameters to match your specific project requirements.
          </p>
        </div>
        
        <CalculatorForm />
        
        <div className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-lg font-semibold mb-2">How to use this calculator:</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Enter the cost of a basic floor in dollars (e.g., $1,000,000)</li>
            <li>Specify the number of floors for your building</li>
            <li>Adjust the construction parameters as needed using the sliders</li>
            <li>Check or uncheck additional options as required</li>
            <li>Click "Calculate Cost" to see your detailed cost estimation</li>
            <li>Review the visual breakdown and component analysis</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;
