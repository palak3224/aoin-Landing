import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, TrendingUp, Megaphone, Activity, Eye, Target } from 'lucide-react';

const GrowthTools = () => {
  // Sample data for charts
  const dashboardData = [
    { month: 'Jan', sales: 4000, performance: 2400 },
    { month: 'Feb', sales: 3000, performance: 1398 },
    { month: 'Mar', sales: 2000, performance: 9800 },
    { month: 'Apr', sales: 2780, performance: 3908 },
    { month: 'May', sales: 1890, performance: 4800 },
    { month: 'Jun', sales: 2390, performance: 3800 }
  ];

  const insightsData = [
    { name: 'Week 1', trend: 65 },
    { name: 'Week 2', trend: 59 },
    { name: 'Week 3', trend: 80 },
    { name: 'Week 4', trend: 81 },
    { name: 'Week 5', trend: 56 },
    { name: 'Week 6', trend: 95 }
  ];

  const marketingData = [
    { name: 'Sponsored', value: 45, color: '#ff6b35' },
    { name: 'Co-branding', value: 35, color: '#ff8c42' },
    { name: 'Organic', value: 20, color: '#ffad5a' }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Growth Tools You'll Love</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful tools designed to accelerate your business growth and maximize your potential
          </p>
        </div>

        <div className="space-y-20">
          {/* Smart Dashboard - Text Left, Graph Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-black">📊 Smart Dashboard</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Track real-time sales & performance with our intuitive dashboard. Get comprehensive insights 
                into your business metrics, monitor key performance indicators, and make data-driven decisions 
                that drive growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Real-time performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Visual analytics & reports</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Bar dataKey="sales" fill="#ff6b35" radius={4} />
                  <Bar dataKey="performance" fill="#ff8c42" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Market Insights - Graph Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={insightsData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Line 
                    type="monotone" 
                    dataKey="trend" 
                    stroke="#ff6b35" 
                    strokeWidth={3}
                    dot={{ fill: '#ff6b35', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-black">🤖 AI Market Insights</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Discover what's trending in your target markets with AI-powered analytics. Stay ahead of 
                the competition with intelligent market research, consumer behavior analysis, and 
                predictive insights that guide your strategy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">AI-powered trend analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Target market identification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Boosters - Text Left, Graph Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Megaphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-black">🎯 Marketing Boosters</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Sponsored listings and co-branding campaigns to boost visibility. Amplify your reach 
                with strategic marketing tools that put your brand in front of the right audience at 
                the right time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Megaphone className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Sponsored listing campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Strategic co-branding opportunities</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marketingData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {marketingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center mt-4 space-x-6">
                {marketingData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTools;