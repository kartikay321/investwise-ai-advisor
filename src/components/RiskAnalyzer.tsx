
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react';

interface RiskAnalyzerProps {
  company: string;
}

const RiskAnalyzer = ({ company }: RiskAnalyzerProps) => {
  // Mock risk data
  const riskMetrics = {
    volatility: 24.5,
    sharpeRatio: 1.35,
    maxDrawdown: -18.2,
    beta: 1.15,
    var95: -12.5,
    debtToEquity: 0.31
  };

  const getRiskLevel = (metric: string, value: number) => {
    switch (metric) {
      case 'volatility':
        if (value < 15) return { level: 'Low', color: 'text-green-400' };
        if (value < 25) return { level: 'Medium', color: 'text-yellow-400' };
        return { level: 'High', color: 'text-red-400' };
      case 'sharpeRatio':
        if (value > 2) return { level: 'Excellent', color: 'text-green-400' };
        if (value > 1) return { level: 'Good', color: 'text-yellow-400' };
        return { level: 'Poor', color: 'text-red-400' };
      default:
        return { level: 'Medium', color: 'text-yellow-400' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Risk Overview */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Risk Assessment Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Medium</div>
              <div className="text-slate-300">Overall Risk Level</div>
              <Progress value={65} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">B+</div>
              <div className="text-slate-300">Risk Grade</div>
              <Progress value={75} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1.35</div>
              <div className="text-slate-300">Sharpe Ratio</div>
              <Progress value={67} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Risk Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Volatility Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Annual Volatility</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{riskMetrics.volatility}%</span>
                <Badge className={getRiskLevel('volatility', riskMetrics.volatility).color}>
                  {getRiskLevel('volatility', riskMetrics.volatility).level}
                </Badge>
              </div>
            </div>
            <Progress value={riskMetrics.volatility} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Beta (vs S&P 500)</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{riskMetrics.beta}</span>
                <TrendingUp className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            <Progress value={riskMetrics.beta * 50} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Downside Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Max Drawdown</span>
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-semibold">{riskMetrics.maxDrawdown}%</span>
                <TrendingDown className="h-4 w-4 text-red-400" />
              </div>
            </div>
            <Progress value={Math.abs(riskMetrics.maxDrawdown)} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-slate-300">VaR (95%)</span>
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-semibold">{riskMetrics.var95}%</span>
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            <Progress value={Math.abs(riskMetrics.var95)} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Risk Factors */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Key Risk Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-medium">Financial Risks</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Debt-to-Equity Ratio</span>
                  <span className="text-green-400">{riskMetrics.debtToEquity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Interest Coverage</span>
                  <span className="text-green-400">8.5x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Current Ratio</span>
                  <span className="text-yellow-400">1.2</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white font-medium">Market Risks</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Sector Correlation</span>
                  <span className="text-yellow-400">0.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Market Cap Risk</span>
                  <span className="text-green-400">Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Liquidity Risk</span>
                  <span className="text-green-400">Low</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskAnalyzer;
