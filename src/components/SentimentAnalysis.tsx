
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, TrendingUp, Globe, Twitter } from 'lucide-react';

interface SentimentAnalysisProps {
  company: string;
}

const SentimentAnalysis = ({ company }: SentimentAnalysisProps) => {
  // Mock sentiment data
  const sentimentData = {
    overall: 75,
    news: 82,
    social: 68,
    analyst: 79,
    recent_news: [
      { title: "Strong Q4 earnings beat expectations", sentiment: "positive", source: "Reuters", date: "2024-01-15" },
      { title: "New product launch receives positive reviews", sentiment: "positive", source: "TechCrunch", date: "2024-01-12" },
      { title: "Regulatory concerns in European market", sentiment: "negative", source: "Bloomberg", date: "2024-01-10" },
      { title: "Partnership with major tech company announced", sentiment: "positive", source: "WSJ", date: "2024-01-08" }
    ]
  };

  const getSentimentColor = (score: number) => {
    if (score >= 70) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <Badge className="bg-green-500/20 text-green-400">Positive</Badge>;
      case 'negative':
        return <Badge className="bg-red-500/20 text-red-400">Negative</Badge>;
      default:
        return <Badge className="bg-yellow-500/20 text-yellow-400">Neutral</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Sentiment Overview */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Sentiment Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getSentimentColor(sentimentData.overall)} mb-2`}>
                {sentimentData.overall}%
              </div>
              <div className="text-slate-300 mb-2">Overall Sentiment</div>
              <Progress value={sentimentData.overall} className="h-2" />
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold ${getSentimentColor(sentimentData.news)} mb-2`}>
                {sentimentData.news}%
              </div>
              <div className="text-slate-300 mb-2">News Sentiment</div>
              <Progress value={sentimentData.news} className="h-2" />
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold ${getSentimentColor(sentimentData.social)} mb-2`}>
                {sentimentData.social}%
              </div>
              <div className="text-slate-300 mb-2">Social Media</div>
              <Progress value={sentimentData.social} className="h-2" />
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold ${getSentimentColor(sentimentData.analyst)} mb-2`}>
                {sentimentData.analyst}%
              </div>
              <div className="text-slate-300 mb-2">Analyst Reports</div>
              <Progress value={sentimentData.analyst} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent News Analysis */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Recent News Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sentimentData.recent_news.map((news, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-2">{news.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>{news.source}</span>
                    <span>{news.date}</span>
                  </div>
                </div>
                <div className="ml-4">
                  {getSentimentBadge(news.sentiment)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sentiment Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sentiment Trends (30 days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Positive Mentions</span>
                <span className="text-green-400 font-semibold">+15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Negative Mentions</span>
                <span className="text-red-400 font-semibold">-8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Neutral Mentions</span>
                <span className="text-slate-400 font-semibold">-3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Twitter className="h-5 w-5" />
              Social Media Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Twitter Mentions</span>
                <span className="text-white font-semibold">12.5K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Reddit Discussions</span>
                <span className="text-white font-semibold">3.2K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Engagement Rate</span>
                <span className="text-green-400 font-semibold">4.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
