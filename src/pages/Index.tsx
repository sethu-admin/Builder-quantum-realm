import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Search,
  ArrowLeftRight,
  Calendar,
  CreditCard,
  MapPin,
  Utensils,
  Clock,
  HelpCircle,
  User,
  List,
  CheckCircle,
  Ticket,
  Train,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const [fromCity, setFromCity] = useState("New Delhi");
  const [toCity, setToCity] = useState("New York");
  const [selectedDate, setSelectedDate] = useState("");
  const [freeCancellation, setFreeCancellation] = useState(true);

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = () => {
    if (!fromCity || !toCity || !selectedDate) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically navigate to search results
    console.log(
      "Searching buses from",
      fromCity,
      "to",
      toCity,
      "on",
      selectedDate,
    );
    alert(`Searching buses from ${fromCity} to ${toCity} on ${selectedDate}`);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const featureCards = [
    {
      icon: <List className="h-6 w-6" />,
      title: "Check PNR status",
      color: "bg-blue-500",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Live train status",
      color: "bg-green-500",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Order Food",
      color: "bg-orange-500",
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Rail Madad",
      color: "bg-purple-500",
    },
  ];

  const whyBookFeatures = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "redRoute confirm",
      description: "Confirm ticket on waitlisted trains",
    },
    {
      icon: <Ticket className="h-8 w-8 text-blue-500" />,
      title: "Seat Guarantee",
      description: "on waitlisted tickets or 3X refund",
    },
    {
      icon: <Train className="h-8 w-8 text-purple-500" />,
      title: "Connecting trains",
      description: "Connecting trains option available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">redRoute</div>
              <div className="text-sm text-gray-500">-- across the limit</div>
            </div>

            {/* Account Button */}
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Professional Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-600 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white transform rotate-45 -translate-x-32 -translate-y-32"></div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-white transform rotate-12 translate-x-24 -translate-y-24"></div>
        </div>

        {/* Landscape Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Hills */}
          <svg
            className="absolute bottom-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 L0,60 Q300,20 600,40 T1200,50 L1200,120 Z"
              fill="rgba(34, 197, 94, 0.4)"
            />
          </svg>

          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 L0,40 Q400,10 800,30 T1200,25 L1200,80 Z"
              fill="rgba(34, 197, 94, 0.6)"
            />
          </svg>

          {/* Road */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-800"></div>
          <div className="absolute bottom-3 left-0 right-0 h-0.5 bg-yellow-300 opacity-80"></div>
        </div>

        {/* Static Trees */}
        <div className="absolute bottom-8 left-20">
          <svg className="w-6 h-10" viewBox="0 0 30 50">
            <rect x="13" y="35" width="4" height="15" fill="#4A5568" />
            <circle cx="15" cy="25" r="10" fill="#22C55E" />
          </svg>
        </div>

        <div className="absolute bottom-8 left-40">
          <svg className="w-5 h-8" viewBox="0 0 25 40">
            <rect x="11" y="28" width="3" height="12" fill="#4A5568" />
            <circle cx="12.5" cy="20" r="8" fill="#16A34A" />
          </svg>
        </div>

        <div className="absolute bottom-8 right-40">
          <svg className="w-6 h-10" viewBox="0 0 30 50">
            <rect x="13" y="35" width="4" height="15" fill="#4A5568" />
            <circle cx="15" cy="25" r="10" fill="#22C55E" />
          </svg>
        </div>

        {/* Static Professional Bus */}
        <div className="absolute bottom-8 right-20">
          <svg className="w-20 h-12" viewBox="0 0 120 70">
            {/* Bus Shadow */}
            <ellipse cx="60" cy="65" rx="50" ry="3" fill="rgba(0,0,0,0.2)" />

            {/* Bus Body */}
            <rect x="10" y="20" width="90" height="35" rx="8" fill="#EC4899" />
            <rect x="15" y="25" width="80" height="25" rx="4" fill="#BE185D" />

            {/* Windows */}
            <rect x="20" y="28" width="14" height="10" rx="2" fill="#DBEAFE" />
            <rect x="36" y="28" width="14" height="10" rx="2" fill="#DBEAFE" />
            <rect x="52" y="28" width="14" height="10" rx="2" fill="#DBEAFE" />
            <rect x="68" y="28" width="14" height="10" rx="2" fill="#DBEAFE" />

            {/* Front Windshield */}
            <rect x="85" y="28" width="10" height="18" rx="2" fill="#BFDBFE" />

            {/* Wheels */}
            <circle cx="25" cy="52" r="10" fill="#374151" />
            <circle cx="80" cy="52" r="10" fill="#374151" />
            <circle cx="25" cy="52" r="6" fill="#6B7280" />
            <circle cx="80" cy="52" r="6" fill="#6B7280" />

            {/* Headlights */}
            <circle cx="98" cy="35" r="3" fill="#FEF3C7" />
            <circle cx="98" cy="45" r="3" fill="#FCA5A5" />

            {/* Door */}
            <rect x="16" y="40" width="8" height="12" rx="1" fill="#7C2D12" />
          </svg>
        </div>

        {/* Professional Hero Text */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="text-left text-white max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                India's No.1 online
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-200 leading-tight">
                bus ticket booking site
              </h2>
              <p className="text-lg text-blue-100 mt-4 opacity-90">
                Book your journey with confidence and comfort
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Clouds */}
        <div className="absolute top-6 right-32">
          <svg className="w-16 h-8 opacity-30" viewBox="0 0 80 40">
            <circle cx="20" cy="20" r="12" fill="white" />
            <circle cx="35" cy="18" r="15" fill="white" />
            <circle cx="50" cy="20" r="12" fill="white" />
          </svg>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">REDROUTE</h1>
          <p className="text-lg text-gray-600">
            Bookings open for summer holidays
          </p>
        </div>
        {/* Search Form */}
        <Card className="mb-8 p-6 shadow-lg rounded-3xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
              {/* From */}
              <div className="space-y-2">
                <Label htmlFor="from" className="text-sm font-medium">
                  From
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="from"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={swapCities}
                  className="rounded-full h-10 w-10 p-0"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>

              {/* To */}
              <div className="space-y-2">
                <Label htmlFor="to" className="text-sm font-medium">
                  To
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="to"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Date of Journey
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Select date"
                    min={today}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-1">
                <Button
                  onClick={handleSearch}
                  className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 rounded-2xl"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search bus
                </Button>
              </div>
            </div>

            {/* Free Cancellation */}
            <div className="flex items-center justify-between mt-6 p-4 bg-green-50 rounded-2xl">
              <div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="free-cancellation"
                    checked={freeCancellation}
                    onCheckedChange={setFreeCancellation}
                  />
                  <Label htmlFor="free-cancellation" className="font-medium">
                    Free Cancellation
                  </Label>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ₹0 cancellation fee
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featureCards.map((feature, index) => (
            <Card
              key={index}
              className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer rounded-2xl"
            >
              <CardContent className="p-0">
                <div
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl ${feature.color} text-white mb-3 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Book With redRoute Section */}
        <Card className="mb-8 p-6 rounded-3xl">
          <CardContent className="p-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Why Book With redRoute</h2>
              <Button variant="outline" className="rounded-2xl">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyBookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Offers Section */}
        <Card className="p-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-3xl">
          <CardContent className="p-0 text-center">
            <h2 className="text-3xl font-bold mb-2">HAPPY JOURNEY !!</h2>
            <p className="text-lg opacity-90">
              Special offers and deals available for your next trip
            </p>
            <Button className="mt-4 bg-white text-orange-500 hover:bg-gray-100 rounded-2xl">
              View Offers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
