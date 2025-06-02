
import { useState } from 'react';
import { Search, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface CompanySearchProps {
  onCompanySelect: (company: string) => void;
}

const CompanySearch = ({ onCompanySelect }: CompanySearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Mock company data
  const mockCompanies = [
    'Apple Inc. (AAPL)',
    'Microsoft Corporation (MSFT)',
    'Amazon.com Inc. (AMZN)',
    'Alphabet Inc. (GOOGL)',
    'Tesla Inc. (TSLA)',
    'Meta Platforms Inc. (META)',
    'NVIDIA Corporation (NVDA)',
    'Berkshire Hathaway Inc. (BRK.A)',
    'Johnson & Johnson (JNJ)',
    'JPMorgan Chase & Co. (JPM)'
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = mockCompanies.filter(company =>
        company.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleCompanySelect = (company: string) => {
    const companyName = company.split('(')[0].trim();
    onCompanySelect(companyName);
    setSearchTerm(company);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input
          type="text"
          placeholder="Search for a company (e.g., Apple, Microsoft, Tesla...)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 rounded-xl"
        />
        <Button 
          onClick={() => searchTerm && handleCompanySelect(searchTerm)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Analyze
        </Button>
      </div>

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-800/95 border-slate-600 backdrop-blur-sm">
          <CardContent className="p-0">
            {suggestions.map((company, index) => (
              <button
                key={index}
                onClick={() => handleCompanySelect(company)}
                className="w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors border-b border-slate-700 last:border-b-0 flex items-center gap-3"
              >
                <Building2 className="h-4 w-4 text-slate-400" />
                <span className="text-white">{company}</span>
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CompanySearch;
