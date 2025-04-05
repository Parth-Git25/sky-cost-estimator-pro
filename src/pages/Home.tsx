
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-construction-yellow py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-construction-darkGray mb-4">
            Skyscraper & Building Construction Cost Estimator
          </h1>
          <p className="text-xl text-construction-darkGray max-w-3xl mx-auto">
            An advanced tool designed to estimate the construction cost of skyscrapers and multi-story buildings
          </p>
          <div className="mt-8">
            <Link to="/calculator">
              <Button className="bg-construction-blue hover:bg-construction-accent text-white px-8 py-6 text-lg">
                Start Estimating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-construction-darkGray mb-6">About the Tool</h2>
          <p className="max-w-4xl mx-auto text-lg">
            SkyCost Dashboard is an advanced tool designed to estimate the construction cost of skyscrapers and 
            multi-story buildings. By inputting the number of floors and the cost of building a single-story floor, 
            the tool provides an accurate calculation of the total cost for high-rise projects, making it ideal 
            for architects, developers, and construction planners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-construction-blue" />
                User Manual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn how to use the SkyCost Dashboard effectively. Our comprehensive user manual will guide 
                you through each feature and help you get the most accurate cost estimations.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                <li>Enter the cost of a basic floor in dollars</li>
                <li>Specify the number of floors for your building</li>
                <li>Adjust construction parameters as needed</li>
                <li>View detailed cost breakdown and visualizations</li>
                <li>Export and share your cost estimation reports</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <FlaskConical className="mr-2 h-6 w-6 text-construction-blue" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The SkyCost Dashboard uses industry-standard formulas and algorithms to calculate construction 
                costs based on your inputs. The tool accounts for various factors affecting skyscraper construction.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                <li>Takes basic floor cost and multiplies by the number of floors</li>
                <li>Applies height factors for taller buildings</li>
                <li>Calculates structural component costs based on percentages</li>
                <li>Factors in MEP (Mechanical, Electrical, Plumbing) costs</li>
                <li>Provides comprehensive visualization of cost breakdown</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6 text-construction-blue" />
                Disclaimer & Assumptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The SkyCost Dashboard provides estimations based on standard industry data and assumptions. 
                Actual construction costs may vary based on location, market conditions, and specific project requirements.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                <li>All costs are in USD and based on typical US construction rates</li>
                <li>Default percentages represent industry averages</li>
                <li>The tool assumes standard construction methods</li>
                <li>Land acquisition costs are not included</li>
                <li>Local taxes, permits, and fees are not included</li>
                <li>Special architectural features may require additional costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link to="/calculator">
            <Button className="bg-construction-blue hover:bg-construction-accent text-white">
              Try the Calculator Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-construction-lightGray py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-construction-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Estimation</h3>
              <p className="text-muted-foreground">
                Get precise cost estimations based on industry standards and formulas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-construction-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Breakdown</h3>
              <p className="text-muted-foreground">
                View detailed charts and graphs of cost components and distribution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-construction-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Parameters</h3>
              <p className="text-muted-foreground">
                Adjust construction parameters to match your specific project requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-construction-blue">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Reports</h3>
              <p className="text-muted-foreground">
                Generate comprehensive cost reports for project planning and presentations
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
