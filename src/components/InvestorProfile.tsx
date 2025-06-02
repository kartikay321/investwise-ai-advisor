
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Shield, Zap } from 'lucide-react';

interface InvestorProfileProps {
  profile: {
    horizon: string;
    riskAppetite: string;
  };
  onProfileChange: (profile: { horizon: string; riskAppetite: string }) => void;
}

const InvestorProfile = ({ profile, onProfileChange }: InvestorProfileProps) => {
  const horizonOptions = [
    { id: 'short-term', label: 'Short-Term', description: '< 1 year', icon: Zap },
    { id: 'medium-term', label: 'Medium-Term', description: '1-5 years', icon: TrendingUp },
    { id: 'long-term', label: 'Long-Term', description: '5+ years', icon: Clock }
  ];

  const riskOptions = [
    { id: 'risk-averse', label: 'Risk-Averse', description: 'Stability focused', color: 'bg-green-500' },
    { id: 'balanced', label: 'Balanced', description: 'Moderate risk/reward', color: 'bg-yellow-500' },
    { id: 'risk-taking', label: 'Risk-Taking', description: 'High growth potential', color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Investment Horizon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {horizonOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onProfileChange({ ...profile, horizon: option.id })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  profile.horizon === option.id
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <option.icon className="h-6 w-6 text-blue-400" />
                  <div>
                    <h3 className="text-white font-medium">{option.label}</h3>
                    <p className="text-slate-400 text-sm">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Risk Appetite
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => onProfileChange({ ...profile, riskAppetite: option.id })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  profile.riskAppetite === option.id
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`w-4 h-4 rounded-full ${option.color}`}></div>
                  <div>
                    <h3 className="text-white font-medium">{option.label}</h3>
                    <p className="text-slate-400 text-sm">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Current Profile Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              {horizonOptions.find(h => h.id === profile.horizon)?.label}
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-400">
              {riskOptions.find(r => r.id === profile.riskAppetite)?.label}
            </Badge>
          </div>
          <p className="text-slate-300 mt-4">
            Your investment recommendations will be tailored based on your {profile.horizon} investment 
            horizon and {profile.riskAppetite.replace('-', ' ')} risk profile.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorProfile;
