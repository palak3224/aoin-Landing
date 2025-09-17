import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Megaphone, Activity, Eye, Target, Zap, Users, Award, ArrowUp, Play, Pause } from 'lucide-react';

const GrowthTools = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedData, setAnimatedData] = useState([]);
  const [liveInsights, setLiveInsights] = useState([]);
  const [marketingProgress, setMarketingProgress] = useState([]);

  // Enhanced sample data for charts with more realistic values
  const dashboardData = [
    { month: 'Jan', sales: 4000, performance: 2400, target: 5000 },
    { month: 'Feb', sales: 3000, performance: 3200, target: 4500 },
    { month: 'Mar', sales: 5200, performance: 4800, target: 5500 },
    { month: 'Apr', sales: 6780, performance: 5908, target: 6000 },
    { month: 'May', sales: 7890, performance: 6800, target: 7500 },
    { month: 'Jun', sales: 8390, performance: 7800, target: 8000 }
  ];

  const insightsDataBase = [
    { name: 'Week 1', trend: 65, growth: 12, predictions: 70 },
    { name: 'Week 2', trend: 59, growth: -5, predictions: 75 },
    { name: 'Week 3', trend: 80, growth: 21, predictions: 82 },
    { name: 'Week 4', trend: 81, growth: 1, predictions: 85 },
    { name: 'Week 5', trend: 76, growth: -5, predictions: 88 },
    { name: 'Week 6', trend: 95, growth: 19, predictions: 92 }
  ];

  const marketingDataBase = [
    { name: 'Sponsored', value: 45, color: '#ff6b35', growth: '+12%' },
    { name: 'Co-branding', value: 35, color: '#ff8c42', growth: '+8%' },
    { name: 'Organic', value: 20, color: '#ffad5a', growth: '+15%' }
  ];

  // Initialize data immediately
  useEffect(() => {
    setAnimatedData([...dashboardData]);
    setLiveInsights([...insightsDataBase]);
    setMarketingProgress([...marketingDataBase]);
  }, []);

  // Simulate live data updates with safer state management
  useEffect(() => {
    if (!isPlaying || animatedData.length === 0) return;

    const interval = setInterval(() => {
      // Animate dashboard data
      setAnimatedData(prevData => {
        if (prevData.length === 0) return [...dashboardData];
        
        return prevData.map(item => ({
          ...item,
          sales: Math.max(1000, item.sales + (Math.random() * 400 - 200)),
          performance: Math.max(800, item.performance + (Math.random() * 300 - 150))
        }));
      });

      // Animate insights data
      setLiveInsights(prevData => {
        if (prevData.length === 0) return [...insightsDataBase];
        
        return prevData.map(item => ({
          ...item,
          trend: Math.max(10, Math.min(100, item.trend + (Math.random() * 10 - 5))),
          predictions: Math.max(10, Math.min(100, item.predictions + (Math.random() * 8 - 4)))
        }));
      });

      // Animate marketing data
      setMarketingProgress(prevData => {
        if (prevData.length === 0) return [...marketingDataBase];
        
        return prevData.map(item => ({
          ...item,
          value: Math.max(10, Math.min(70, item.value + (Math.random() * 6 - 3)))
        }));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying, animatedData.length]);

  const tools = [
    {
      icon: BarChart3,
      title: "Smart Dashboard",
      description: "Track real-time sales & performance with our intuitive dashboard. Get comprehensive insights into your business metrics, monitor key performance indicators, and make data-driven decisions that drive exponential growth.",
      features: [
        { icon: Activity, text: "Real-time performance tracking" },
        { icon: Eye, text: "Visual analytics & reports" },
        { icon: Zap, text: "Automated insights generation" }
      ],
      stats: [
        { value: "99.9%", label: "Uptime", trend: "+0.1%" },
        { value: "2.3s", label: "Load Time", trend: "-15%" },
        { value: "24/7", label: "Support", trend: "Always" }
      ]
    },
    {
      icon: TrendingUp,
      title: "AI Market Insights",
      description: "Discover what's trending in your target markets with AI-powered analytics. Stay ahead of the competition with intelligent market research, consumer behavior analysis, and predictive insights that guide your strategic decisions.",
      features: [
        { icon: TrendingUp, text: "AI-powered trend analysis" },
        { icon: Target, text: "Target market identification" },
        { icon: Users, text: "Consumer behavior insights" }
      ],
      stats: [
        { value: "94%", label: "Accuracy", trend: "+2%" },
        { value: "50+", label: "Markets", trend: "+5" },
        { value: "Real-time", label: "Updates", trend: "Live" }
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing Boosters",
      description: "Sponsored listings and co-branding campaigns to boost visibility. Amplify your reach with strategic marketing tools that put your brand in front of the right audience at precisely the right moment for maximum impact.",
      features: [
        { icon: Megaphone, text: "Sponsored listing campaigns" },
        { icon: Target, text: "Strategic co-branding opportunities" },
        { icon: Award, text: "Performance optimization" }
      ],
      stats: [
        { value: "3.2x", label: "ROI Boost", trend: "+25%" },
        { value: "180%", label: "Visibility", trend: "+45%" },
        { value: "67%", label: "Conversion", trend: "+12%" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Safe chart rendering function
  const renderChart = (index, data) => {
    if (!data || data.length === 0) {
      return (
        <div className="flex items-center justify-center h-[350px] text-gray-500">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p>Loading chart data...</p>
          </div>
        </div>
      );
    }

    if (index === 0) {
      return (
        <AreaChart data={data} key="area-chart">
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff6b35" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8c42" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#ff8c42" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            className="text-gray-600 text-sm"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            className="text-gray-600 text-sm"
            tickFormatter={(value) => `${Math.round(value / 1000)}k`}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#ff6b35"
            strokeWidth={3}
            fill="url(#salesGradient)"
            dot={{ fill: '#ff6b35', strokeWidth: 2, r: 4 }}
            animationDuration={1500}
          />
          <Area
            type="monotone"
            dataKey="performance"
            stroke="#ff8c42"
            strokeWidth={2}
            fill="url(#performanceGradient)"
            dot={{ fill: '#ff8c42', strokeWidth: 2, r: 3 }}
            animationDuration={1500}
          />
        </AreaChart>
      );
    }

    if (index === 1) {
      return (
        <LineChart data={data} key="line-chart">
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            className="text-gray-600 text-sm"
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            className="text-gray-600 text-sm"
            domain={[0, 100]}
          />
          <Line 
            type="monotone" 
            dataKey="trend" 
            stroke="#ff6b35" 
            strokeWidth={4}
            dot={{ fill: '#ff6b35', strokeWidth: 3, r: 6 }}
            activeDot={{ r: 8, stroke: '#ff6b35', strokeWidth: 2 }}
            animationDuration={1500}
          />
          <Line 
            type="monotone" 
            dataKey="predictions" 
            stroke="#ff8c42" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#ff8c42', strokeWidth: 2, r: 4 }}
            animationDuration={1500}
          />
        </LineChart>
      );
    }

    if (index === 2) {
      return (
        <PieChart key="pie-chart">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            paddingAngle={8}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {data.map((entry, entryIndex) => (
              <Cell 
                key={`cell-${entryIndex}`} 
                fill={entry.color}
              />
            ))}
          </Pie>
        </PieChart>
      );
    }

    return null;
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-bl from-orange-300/25 to-amber-300/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-orange-300/10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <BarChart3 size={120} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-amber-300/10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <TrendingUp size={100} />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 px-8 py-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.2)" }}
          >
            <span className="text-orange-700 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap size={16} />
              Powered by AI & Analytics
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Growth Tools
            </span>
            <br />
            <span className="text-gray-900">You'll Love</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed to accelerate your business growth and maximize your potential with cutting-edge technology
          </p>

          {/* Live Status Indicator */}
          <motion.div 
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-700 font-semibold text-sm">Live Data</span>
            </div>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span className="text-orange-700 font-semibold text-sm">
                {isPlaying ? 'Pause' : 'Play'} Animation
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Enhanced Tools Grid */}
        <motion.div 
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tools.map((tool, index) => {
            // Determine which data to use for each chart
            let chartData = [];
            if (index === 0) chartData = animatedData;
            if (index === 1) chartData = liveInsights;
            if (index === 2) chartData = marketingProgress;

            return (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={itemVariants}
              >
                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl shadow-lg"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 10,
                        boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <tool.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {tool.title}
                    </h3>
                  </motion.div>

                  <motion.p 
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {tool.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {tool.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100/50 shadow-sm"
                        whileHover={{ 
                          x: 10, 
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          boxShadow: "0 10px 20px rgba(251, 146, 60, 0.1)"
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                      >
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Stats Cards */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {tool.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200/30 shadow-sm"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 15px 30px rgba(251, 146, 60, 0.15)"
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 + idx * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                        <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                          <ArrowUp size={10} />
                          {stat.trend}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Chart Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    className="relative p-8 bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm rounded-3xl border border-orange-200/30 shadow-xl"
                    variants={chartVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 30px 60px rgba(251, 146, 60, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Live Indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-500 rounded-full">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-white text-xs font-semibold">LIVE</span>
                    </div>

                    <ResponsiveContainer width="100%" height={350}>
                      {renderChart(index, chartData)}
                    </ResponsiveContainer>

                    {/* Chart Legend for Pie Chart */}
                    {index === 2 && marketingProgress.length > 0 && (
                      <motion.div 
                        className="flex justify-center mt-6 space-x-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {marketingDataBase.map((item, itemIndex) => (
                          <motion.div 
                            key={itemIndex} 
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div 
                              className="w-4 h-4 rounded-full shadow-sm" 
                              style={{ backgroundColor: item.color }}
                            />
                            <div>
                              <span className="text-sm font-medium text-gray-800">{item.name}</span>
                              <div className="text-xs text-green-600">{item.growth}</div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://aoinstore.com/register-business" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="group relative bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 hover:from-orange-600 hover:via-orange-500 hover:to-amber-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(251, 146, 60, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-3">
              Experience These Tools Today
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="rotate-45" size={24} />
              </motion.div>
            </span>
          </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GrowthTools;