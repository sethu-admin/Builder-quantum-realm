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
  Bus,
} from "lucide-react";

const Index = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">redRoute</div>
              <div className="text-sm text-gray-500">-- across the limit</div>
            </div>

            <Button
              variant="outline"
              className="flex items-center space-x-2 rounded-lg"
            >
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Integrated Booking Form */}
      <div className="relative">
        {/* Background Landscape */}
        <div className="relative h-80 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-600 overflow-hidden">
          {/* Hills Background */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Back Hills */}
            <svg
              className="absolute bottom-0 w-full h-48"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0,200 L0,80 Q300,30 600,60 T1200,70 L1200,200 Z"
                fill="rgba(34, 197, 94, 0.3)"
              />
            </svg>

            {/* Front Hills */}
            <svg
              className="absolute bottom-0 w-full h-32"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,120 L0,50 Q400,20 800,40 T1200,35 L1200,120 Z"
                fill="rgba(34, 197, 94, 0.5)"
              />
            </svg>

          {/* Trees */}
          <div className="absolute bottom-24 left-32">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568"/>
              <circle cx="20" cy="35" r="12" fill="#22C55E"/>
            </svg>
          </div>

          <div className="absolute bottom-24 left-60">
            <svg className="w-6 h-10" viewBox="0 0 30 50">
              <rect x="13" y="35" width="4" height="15" fill="#4A5568"/>
              <circle cx="15" cy="25" r="10" fill="#16A34A"/>
            </svg>
          </div>

          <div className="absolute bottom-24 right-48">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568"/>
              <circle cx="20" cy="35" r="12" fill="#22C55E"/>
            </svg>
          </div>

          <div className="absolute bottom-24 right-72">
            <svg className="w-7 h-11" viewBox="0 0 35 55">
              <rect x="15" y="40" width="4" height="15" fill="#4A5568"/>
              <circle cx="17" cy="30" r="11" fill="#16A34A"/>
            </svg>
          </div>

          {/* City Skyline in Distance */}
          <div className="absolute top-12 left-0 right-0">
            <svg className="w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
              {/* City Buildings Silhouette */}
              <rect x="100" y="40" width="30" height="40" fill="rgba(15, 23, 42, 0.6)"/>
              <rect x="140" y="30" width="25" height="50" fill="rgba(15, 23, 42, 0.5)"/>
              <rect x="170" y="35" width="35" height="45" fill="rgba(15, 23, 42, 0.6)"/>
              <rect x="210" y="25" width="20" height="55" fill="rgba(15, 23, 42, 0.7)"/>
              <rect x="240" y="20" width="40" height="60" fill="rgba(15, 23, 42, 0.6)"/>
              <rect x="290" y="30" width="25" height="50" fill="rgba(15, 23, 42, 0.5)"/>
              <rect x="320" y="35" width="30" height="45" fill="rgba(15, 23, 42, 0.6)"/>

              {/* More buildings on right */}
              <rect x="800" y="45" width="25" height="35" fill="rgba(15, 23, 42, 0.5)"/>
              <rect x="830" y="35" width="30" height="45" fill="rgba(15, 23, 42, 0.6)"/>
              <rect x="870" y="25" width="35" height="55" fill="rgba(15, 23, 42, 0.7)"/>
              <rect x="915" y="40" width="20" height="40" fill="rgba(15, 23, 42, 0.5)"/>
              <rect x="945" y="30" width="40" height="50" fill="rgba(15, 23, 42, 0.6)"/>

              {/* Building lights */}
              <rect x="110" y="45" width="3" height="3" fill="#FDE047" opacity="0.8"/>
              <rect x="115" y="50" width="3" height="3" fill="#FDE047" opacity="0.6"/>
              <rect x="180" y="40" width="3" height="3" fill="#FDE047" opacity="0.7"/>
              <rect x="250" y="30" width="3" height="3" fill="#FDE047" opacity="0.8"/>
              <rect x="260" y="35" width="3" height="3" fill="#FDE047" opacity="0.6"/>
              <rect x="875" y="35" width="3" height="3" fill="#FDE047" opacity="0.7"/>
              <rect x="885" y="40" width="3" height="3" fill="#FDE047" opacity="0.8"/>
              <rect x="955" y="40" width="3" height="3" fill="#FDE047" opacity="0.6"/>
            </svg>
          </div>

          {/* Highway with Buses Coming from City */}
          <div className="absolute top-16 left-0 right-0">
            {/* Highway extending into distance */}
            <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
              <path d="M0,50 Q600,40 1200,30" stroke="rgba(75, 85, 99, 0.6)" strokeWidth="4" fill="none"/>
              <path d="M0,54 Q600,44 1200,34" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Small Buses Coming from Distance */}
          <div className="absolute top-20 left-1/4">
            <svg className="w-4 h-2" viewBox="0 0 20 10">
              <rect x="1" y="3" width="16" height="5" rx="1" fill="#FF8A80"/>
              <rect x="1" y="2" width="16" height="2" rx="1" fill="#0F172A"/>
              <circle cx="4" cy="8" r="1" fill="#374151"/>
              <circle cx="14" cy="8" r="1" fill="#374151"/>
            </svg>
          </div>

          <div className="absolute top-24 left-1/3">
            <svg className="w-5 h-3" viewBox="0 0 25 12">
              <rect x="1" y="4" width="20" height="6" rx="1" fill="#60A5FA"/>
              <rect x="1" y="3" width="20" height="3" rx="1" fill="#1E3A8A"/>
              <circle cx="5" cy="10" r="1" fill="#374151"/>
              <circle cx="18" cy="10" r="1" fill="#374151"/>
            </svg>
          </div>

          <div className="absolute top-28 left-2/5">
            <svg className="w-6 h-3" viewBox="0 0 30 15">
              <rect x="2" y="5" width="24" height="7" rx="1" fill="#34D399"/>
              <rect x="2" y="4" width="24" height="3" rx="1" fill="#065F46"/>
              <circle cx="7" cy="12" r="1.5" fill="#374151"/>
              <circle cx="21" cy="12" r="1.5" fill="#374151"/>
            </svg>
          </div>

          {/* Trees */}
          <div className="absolute bottom-6 left-32">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568" />
              <circle cx="20" cy="35" r="12" fill="#22C55E" />
            </svg>
          </div>

          <div className="absolute bottom-6 left-60">
            <svg className="w-6 h-10" viewBox="0 0 30 50">
              <rect x="13" y="35" width="4" height="15" fill="#4A5568" />
              <circle cx="15" cy="25" r="10" fill="#16A34A" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-48">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568" />
              <circle cx="20" cy="35" r="12" fill="#22C55E" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-72">
            <svg className="w-7 h-11" viewBox="0 0 35 55">
              <rect x="15" y="40" width="4" height="15" fill="#4A5568" />
              <circle cx="17" cy="30" r="11" fill="#16A34A" />
            </svg>
          </div>

          {/* Exact Reference Image Bus */}
          <div className="absolute bottom-6 right-16">
            <svg className="w-64 h-34" viewBox="0 0 320 170">
              {/* Bus Shadow */}
              <ellipse
                cx="160"
                cy="155"
                rx="130"
                ry="12"
                fill="rgba(0,0,0,0.3)"
              />

              {/* Main Bus Body - Coral Pink */}
              <rect
                x="25"
                y="60"
                width="210"
                height="75"
                rx="2"
                fill="#FF8A80"
              />

              {/* Dark Top Section */}
              <rect
                x="25"
                y="45"
                width="210"
                height="25"
                rx="2"
                fill="#0F172A"
              />
              <rect x="25" y="60" width="210" height="10" fill="#0F172A" />

              {/* Front Section */}
              <path
                d="M 235 45 Q 260 50 268 75 L 268 120 Q 260 135 235 135 Z"
                fill="#FF8A80"
              />
              <path
                d="M 235 45 Q 255 50 262 70 L 262 105 Q 255 115 235 115 Z"
                fill="#0F172A"
              />

              {/* Long Tinted Window Strip */}
              <rect
                x="35"
                y="50"
                width="190"
                height="16"
                rx="1"
                fill="#1E3A8A"
              />

              {/* Front Windshield */}
              <path
                d="M 235 50 Q 250 52 257 70 L 257 105 Q 250 112 235 112 Z"
                fill="#1E3A8A"
              />

              {/* Wheels */}
              <circle cx="70" cy="145" r="25" fill="#1F2937" />
              <circle cx="70" cy="145" r="19" fill="#374151" />
              <circle cx="70" cy="145" r="11" fill="#9CA3AF" />

              <circle cx="200" cy="145" r="25" fill="#1F2937" />
              <circle cx="200" cy="145" r="19" fill="#374151" />
              <circle cx="200" cy="145" r="11" fill="#9CA3AF" />

              {/* Door */}
              <rect
                x="30"
                y="80"
                width="24"
                height="50"
                rx="2"
                fill="#0F172A"
              />

              {/* Red Accent Stripe */}
              <rect x="25" y="95" width="210" height="6" fill="#DC2626" />

              {/* Front Grille */}
              <rect
                x="255"
                y="65"
                width="12"
                height="40"
                rx="1"
                fill="#B91C1C"
              />

              {/* Headlight */}
              <circle cx="262" cy="85" r="10" fill="#FDE047" />

              {/* Side Mirror */}
              <ellipse cx="270" cy="75" rx="2" ry="7" fill="#374151" />

              {/* Route Number */}
              <rect
                x="45"
                y="40"
                width="55"
                height="10"
                rx="2"
                fill="#FDE047"
              />
            </svg>
          </div>
          {/* Hero Text */}
          <div className="absolute top-12 left-8 text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
              India's No.1 online
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              bus ticket booking site
            </h2>
          </div>
        </div>

        {/* Integrated Booking Form */}
        <div className="relative z-10 -mt-20">
          <div className="max-w-5xl mx-auto px-8">
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                {/* Input Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* From */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      From
                    </Label>
                    <div className="relative">
                      <Bus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        placeholder="From"
                      />
                    </div>
                  </div>

                  {/* To */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      To
                    </Label>
                    <div className="relative">
                      <Bus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        placeholder="To"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      Date of Journey
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        min={today}
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button and Booking Options Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Search Button */}
                  <div className="w-full md:w-auto">
                    <Button
                      onClick={handleSearch}
                      className="w-full md:w-auto h-14 px-12 text-lg bg-red-600 hover:bg-red-700 rounded-2xl"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                  </div>

                  {/* Booking for women toggle */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Booking for women
                      </div>
                      <div className="text-xs text-blue-600 cursor-pointer">
                        Know more
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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