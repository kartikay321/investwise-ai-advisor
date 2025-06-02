
import { useState } from 'react';
import { Search, TrendingUp, Shield, Brain, Target, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import CompanySearch from '@/components/CompanySearch';
import InvestorProfile from '@/components/InvestorProfile';
import RiskAnalyzer from '@/components/RiskAnalyzer';
import SentimentAnalysis from '@/components/SentimentAnalysis';
import InvestmentScore from '@/components/InvestmentScore';
import PerformanceChart from '@/components/PerformanceChart';

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [investorProfile, setInvestorProfile] = useState({
    horizon: 'long-term',
    riskAppetite: 'balanced'
  });

  const features = [
    {
      icon: Search,
      title: "Company Analysis",
      description: "Deep dive into financial metrics, historical performance, and market position"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Advanced risk calculations including volatility, Sharpe ratio, and max drawdown"
    },
    {
      icon: Brain,
      title: "AI Sentiment Analysis",
      description: "NLP-powered analysis of news, social media, and market sentiment"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Tailored advice based on your investment profile and risk tolerance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">InvestAI</h1>
                <p className="text-sm text-slate-400">AI-Powered Investment Decision Scorer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-400">
                Live Market Data
              </Badge>
              <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-800">
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              Make Smarter Investment Decisions with
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI Insights</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get comprehensive investment scores, risk analysis, and AI-powered recommendations 
              tailored to your investment profile. Analyze companies with confidence using our 
              advanced scoring engine.
            </p>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <CompanySearch onCompanySelect={setSelectedCompany} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive Investment Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Analysis Interface */}
      {selectedCompany && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Analysis for {selectedCompany}
              </h3>
              <p className="text-slate-300">
                Complete investment analysis with AI-powered insights
              </p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
                <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
                <TabsTrigger value="profile" className="text-white">Investor Profile</TabsTrigger>
                <TabsTrigger value="risk" className="text-white">Risk Analysis</TabsTrigger>
                <TabsTrigger value="sentiment" className="text-white">Sentiment</TabsTrigger>
                <TabsTrigger value="score" className="text-white">AI Score</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <PerformanceChart company={selectedCompany} />
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Key Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="text-slate-400 text-sm">Market Cap</p>
                          <p className="text-white font-semibold">$2.45T</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-400 text-sm">P/E Ratio</p>
                          <p className="text-white font-semibold">28.5</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-400 text-sm">ROE</p>
                          <p className="text-white font-semibold">15.2%</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-slate-400 text-sm">Debt/Equity</p>
                          <p className="text-white font-semibold">0.31</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="profile">
                <InvestorProfile 
                  profile={investorProfile} 
                  onProfileChange={setInvestorProfile} 
                />
              </TabsContent>

              <TabsContent value="risk">
                <RiskAnalyzer company={selectedCompany} />
              </TabsContent>

              <TabsContent value="sentiment">
                <SentimentAnalysis company={selectedCompany} />
              </TabsContent>

              <TabsContent value="score">
                <InvestmentScore 
                  company={selectedCompany} 
                  profile={investorProfile} 
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">InvestAI</h3>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Empowering retail investors with AI-driven insights for smarter investment decisions. 
              Built with advanced analytics and machine learning.
            </p>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 InvestAI. All rights reserved. | Data sources: Multiple financial APIs
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
