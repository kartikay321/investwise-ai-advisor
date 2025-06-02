
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Brain, Download, Share } from 'lucide-react';

interface InvestmentScoreProps {
  company: string;
  profile: {
    horizon: string;
    riskAppetite: string;
  };
}

const InvestmentScore = ({ company, profile }: InvestmentScoreProps) => {
  // Mock scoring data based on profile
  const getScoreData = () => {
    const baseScore = 76;
    let adjustedScore = baseScore;
    
    // Adjust based on profile
    if (profile.horizon === 'long-term' && profile.riskAppetite === 'balanced') {
      adjustedScore += 5;
    } else if (profile.horizon === 'short-term' && profile.riskAppetite === 'risk-averse') {
      adjustedScore -= 8;
    }
    
    return Math.min(100, Math.max(0, adjustedScore));
  };

  const finalScore = getScoreData();
  
  const getRecommendation = (score: number) => {
    if (score >= 75) return { action: 'BUY', color: 'bg-green-500', description: 'Strong investment opportunity' };
    if (score >= 60) return { action: 'HOLD', color: 'bg-yellow-500', description: 'Stable investment with moderate growth' };
    if (score >= 40) return { action: 'SELL', color: 'bg-orange-500', description: 'Consider reducing position' };
    return { action: 'AVOID', color: 'bg-red-500', description: 'High risk, not recommended' };
  };

  const recommendation = getRecommendation(finalScore);

  const scoreBreakdown = {
    financial: 82,
    risk: 71,
    sentiment: 75,
    consistency: 78
  };

  return (
    <div className="space-y-6">
      {/* Main Score Display */}
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5" />
            AI Investment Score for {company}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="text-6xl font-bold text-white mb-4">{finalScore}</div>
              <div className="absolute -top-2 -right-8 text-3xl text-slate-400">/100</div>
            </div>
            <Progress value={finalScore} className="w-64 mx-auto h-4 mb-4" />
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-lg ${recommendation.color}`}>
              <Brain className="h-5 w-5" />
              {recommendation.action}
            </div>
            <p className="text-slate-300 mt-3 text-lg">{recommendation.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-700">
              <Share className="h-4 w-4 mr-2" />
              Share Analysis
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Score Breakdown */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Score Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Financial Strength (40%)</span>
                  <span className="text-white font-semibold">{scoreBreakdown.financial}/100</span>
                </div>
                <Progress value={scoreBreakdown.financial} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Risk Assessment (25%)</span>
                  <span className="text-white font-semibold">{scoreBreakdown.risk}/100</span>
                </div>
                <Progress value={scoreBreakdown.risk} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Sentiment Analysis (20%)</span>
                  <span className="text-white font-semibold">{scoreBreakdown.sentiment}/100</span>
                </div>
                <Progress value={scoreBreakdown.sentiment} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Consistency & Trust (15%)</span>
                  <span className="text-white font-semibold">{scoreBreakdown.consistency}/100</span>
                </div>
                <Progress value={scoreBreakdown.consistency} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalized Insights */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Personalized Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Profile Match</h4>
              <p className="text-slate-300">
                Based on your {profile.horizon} investment horizon and {profile.riskAppetite.replace('-', ' ')} risk profile, 
                this investment aligns well with your objectives.
              </p>
            </div>
            
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
              <h4 className="text-green-400 font-medium mb-2">Key Strengths</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Strong financial performance with consistent growth</li>
                <li>• Well-managed debt levels and solid cash flow</li>
                <li>• Positive market sentiment and analyst coverage</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-400 font-medium mb-2">Areas to Monitor</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Higher than average volatility in recent months</li>
                <li>• Increasing competition in core business segments</li>
                <li>• Regulatory changes in key markets</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Explanation */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Recommendation Explanation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 leading-relaxed">
            Our AI model analyzed over 150 data points including financial metrics, market trends, 
            risk factors, and sentiment indicators. The {recommendation.action} recommendation is based on 
            strong fundamentals (score: {scoreBreakdown.financial}/100), manageable risk profile 
            (score: {scoreBreakdown.risk}/100), and positive market sentiment (score: {scoreBreakdown.sentiment}/100). 
            The model also considered your personal investment profile to provide a tailored recommendation.
          </p>
          
          <div className="mt-4 p-3 bg-slate-700/30 rounded-lg">
            <p className="text-slate-400 text-sm">
              <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be 
              considered as financial advice. Always consult with a qualified financial advisor before making 
              investment decisions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentScore;
