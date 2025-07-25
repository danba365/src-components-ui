import { useState } from 'react';
import { BarChart3, Zap, TrendingUp, Users, ChevronDown } from 'lucide-react';

function VideoPreview() {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-80 h-[600px] mx-auto">
        {/* iPhone Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] border-8 border-gray-700 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-10"></div>
            
            {/* Video Container */}
            <div className="absolute inset-0 pt-8 pb-12 px-2">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-2xl"
                poster="https://via.placeholder.com/300x600/1b2326/ffffff?text=Video+Loading"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </div>
          
          {/* Side Button */}
          <div className="absolute top-20 -right-1 w-1 h-8 bg-gray-600 rounded-l-full"></div>
          
          {/* Volume Buttons */}
          <div className="absolute top-32 -left-1 w-1 h-6 bg-gray-600 rounded-r-full"></div>
          <div className="absolute top-40 -left-1 w-1 h-6 bg-gray-600 rounded-r-full"></div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1279ff]/20 to-[#fffa00]/20 rounded-[3rem] blur-xl -z-10 scale-110"></div>
      
      {/* Play Button Overlay (optional) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-16 h-16 bg-[#1279ff]/80 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ 
  icon: Icon, 
  title, 
  description, 
  detailedContent, 
  isExpanded, 
  onToggle 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  detailedContent: string,
  isExpanded: boolean,
  onToggle: () => void
}) {
  return (
    <div 
      className="cursor-pointer p-4 rounded-lg bg-gradient-to-r from-[#242d33]/50 to-[#1b2326]/50 border border-[#3d4549]/50 hover:border-[#1279ff]/50 transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1279ff] to-[#fffa00] rounded-lg flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-[#080e12]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[#f9fafa] font-medium mb-1">{title}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-[#b3b9bb] transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
          <p className="text-[#b3b9bb] text-sm leading-relaxed">{description}</p>
          
          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-3 border-t border-[#3d4549]/30">
              <p className="text-[#9ea2a4] text-sm leading-relaxed">{detailedContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SellingPoint({ title, description }: { title: string, description: string }) {
  return (
    <div className="text-center p-6 rounded-lg bg-gradient-to-b from-[#242d33]/30 to-[#1b2326]/30 border border-[#3d4549]/30">
      <h3 className="text-[#fffa00] font-medium mb-2">{title}</h3>
      <p className="text-[#b3b9bb] text-sm">{description}</p>
    </div>
  );
}

export default function App() {
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set());

  const toggleFeature = (index: number) => {
    const newExpanded = new Set(expandedFeatures);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFeatures(newExpanded);
  };

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Shot Maps",
      description: "Interactive visualization of shot locations, success rates, and tactical patterns with live match data integration.",
      detailedContent: "Our advanced shot mapping technology uses machine learning algorithms to analyze shooting patterns, expected goals (xG), and heat maps. Features include: real-time position tracking, shot outcome prediction, tactical zone analysis, player-specific shooting tendencies, and historical comparison tools. The system processes over 1000 data points per shot to provide unprecedented accuracy in football analytics."
    },
    {
      icon: BarChart3,
      title: "Advanced Statistics",
      description: "Comprehensive match analytics including possession, passes, tackles, and performance metrics for detailed analysis.",
      detailedContent: "Deep dive into comprehensive metrics including: passing accuracy by field zones, progressive passes, key passes leading to shots, defensive actions per zone, sprint distances, heart rate monitoring integration, and custom performance indicators. Our AI engine correlates over 200 statistical parameters to generate actionable insights for coaches, analysts, and performance specialists."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor player and team performance trends across seasons with predictive analytics and insights.",
      detailedContent: "Longitudinal performance analysis featuring: injury risk assessment, fatigue monitoring, form prediction models, seasonal trend analysis, and peer comparison matrices. Our predictive algorithms use historical data spanning 10+ seasons to forecast performance drops, optimal rotation strategies, and identify emerging talent patterns across different leagues and playing styles."
    },
    {
      icon: Zap,
      title: "Live Match Updates",
      description: "Real-time notifications, score updates, and critical match events delivered instantly to your device.",
      detailedContent: "Ultra-low latency data delivery system featuring: sub-second event notifications, customizable alert preferences, multi-league simultaneous tracking, social sentiment analysis, and intelligent event prioritization. Our global network of data collectors ensures 99.9% accuracy in event timing and details, with advanced filtering to deliver only the most relevant updates to each user."
    },
    {
      icon: Users,
      title: "Team Comparison",
      description: "Side-by-side analysis of team statistics, head-to-head records, and tactical formation insights.",
      detailedContent: "Comprehensive team analysis tools including: formation effectiveness matrices, tactical transition analysis, set-piece success rates, home/away performance variations, and weather/pitch condition impacts. Advanced visualization tools help identify tactical weaknesses, optimal playing styles against specific opponents, and strategic advantages based on historical matchup data and current form metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080e12] via-[#1b2326] to-[#242d33] text-[#f9fafa]">
      {/* Header */}
      <header className="text-center py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#f9fafa] via-[#1279ff] to-[#fffa00] bg-clip-text text-transparent">
            Stats and Score Version 2.0
          </h1>
          <p className="text-xl text-[#b3b9bb] max-w-2xl mx-auto">
            Advanced football analytics platform delivering real-time insights and comprehensive match data
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left Column - Video Preview */}
          <div className="flex justify-center lg:justify-start">
            <VideoPreview />
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-[#f9fafa]">Key Features</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1279ff] to-[#fffa00] rounded"></div>
            </div>
            
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                detailedContent={feature.detailedContent}
                isExpanded={expandedFeatures.has(index)}
                onToggle={() => toggleFeature(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section - Selling Points */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <SellingPoint
              title="99.9% Uptime"
              description="Industry-leading reliability ensures you never miss critical match moments"
            />
            <SellingPoint
              title="50+ Leagues"
              description="Comprehensive coverage of major football leagues and tournaments worldwide"
            />
            <SellingPoint
              title="< 1s Latency"
              description="Lightning-fast data delivery for the most up-to-date match information"
            />
          </div>

          {/* Footer */}
          <footer className="text-center pt-8 border-t border-[#3d4549]/50">
            <p className="text-[#b3b9bb] text-sm">
              © 2024 DAZN Sports Analytics. Professional sports analytics platform trusted by teams, analysts, and fans worldwide.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}