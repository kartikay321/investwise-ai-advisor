
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface PerformanceChartProps {
  company: string;
}

const PerformanceChart = ({ company }: PerformanceChartProps) => {
  // Mock historical data
  const performanceData = [
    { month: 'Jan', price: 150, volume: 2.5 },
    { month: 'Feb', price: 165, volume: 3.1 },
    { month: 'Mar', price: 158, volume: 2.8 },
    { month: 'Apr', price: 172, volume: 3.5 },
    { month: 'May', price: 180, volume: 4.2 },
    { month: 'Jun', price: 175, volume: 3.8 },
    { month: 'Jul', price: 188, volume: 4.1 },
    { month: 'Aug', price: 195, volume: 4.6 },
    { month: 'Sep', price: 185, volume: 3.9 },
    { month: 'Oct', price: 202, volume: 5.1 },
    { month: 'Nov', price: 198, volume: 4.8 },
    { month: 'Dec', price: 210, volume: 5.3 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-600">
          <p className="text-white font-medium">{`${label}`}</p>
          <p className="text-blue-400">
            {`Price: $${payload[0].value}`}
          </p>
          {payload[1] && (
            <p className="text-green-400">
              {`Volume: ${payload[1].value}M`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          12-Month Performance - {company}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-green-400 text-lg font-semibold">+40%</div>
            <div className="text-slate-400 text-sm">YTD Return</div>
          </div>
          <div>
            <div className="text-blue-400 text-lg font-semibold">$210</div>
            <div className="text-slate-400 text-sm">Current Price</div>
          </div>
          <div>
            <div className="text-purple-400 text-lg font-semibold">5.3M</div>
            <div className="text-slate-400 text-sm">Avg Volume</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
