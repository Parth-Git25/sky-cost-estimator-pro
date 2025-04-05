
import React from "react";
import Layout from "@/components/layout/Layout";
import { Building2, Phone, Mail, MapPin, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="section-container">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-construction-darkGray mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            We are a team of dedicated construction professionals, engineers, and software 
            developers committed to providing accurate cost estimation tools for the building industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to simplify the complex process of cost estimation for skyscrapers 
              and multi-story buildings. We strive to provide accurate, reliable, and easy-to-use 
              tools that help architects, developers, and construction professionals make informed 
              decisions about their building projects.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
            <p className="text-muted-foreground mb-4">
              With decades of combined experience in construction, structural engineering, and 
              software development, our team brings a unique blend of expertise to the table. We 
              understand the challenges of estimating costs for complex structures and have developed 
              advanced algorithms to address these challenges.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Industry-standard calculation methods</li>
              <li>Regularly updated cost databases</li>
              <li>User-friendly interface designed for professionals</li>
              <li>Detailed breakdowns and visualizations</li>
              <li>Customizable parameters for precise estimations</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>
          
          <div>
            <Card className="shadow-lg overflow-hidden">
              <div className="h-64 bg-construction-blue flex items-center justify-center">
                <Building2 className="h-32 w-32 text-white opacity-80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <Separator className="mb-4" />
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-construction-blue mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        1234 Skyscraper Avenue<br />
                        Building District, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-construction-blue" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-construction-blue" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@skycostdashboard.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3 text-construction-blue" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-muted-foreground">www.skycostdashboard.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-construction-blue" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM EST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-construction-lightGray mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-construction-blue">JD</span>
                </div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-construction-blue font-medium mb-2">Chief Structural Engineer</p>
                <p className="text-muted-foreground text-sm">
                  With over 20 years of experience in structural engineering for high-rise buildings, 
                  John leads our technical team and oversees the accuracy of our estimation algorithms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-construction-lightGray mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-construction-blue">JS</span>
                </div>
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-construction-blue font-medium mb-2">Construction Cost Specialist</p>
                <p className="text-muted-foreground text-sm">
                  Jane has managed cost estimation for dozens of skyscraper projects worldwide. 
                  Her insights into regional cost variations and industry trends are invaluable to our platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-construction-lightGray mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-construction-blue">RJ</span>
                </div>
                <h3 className="text-xl font-bold">Robert Johnson</h3>
                <p className="text-construction-blue font-medium mb-2">Software Architecture Lead</p>
                <p className="text-muted-foreground text-sm">
                  Robert brings his expertise in software development and data visualization to create 
                  an intuitive and powerful platform for construction cost estimation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
