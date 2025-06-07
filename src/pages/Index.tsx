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
  Star,
  Shield,
  Clock3,
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">redRoute</div>
              <div className="text-sm text-gray-500">-- across the limit</div>
            </div>

            <Button
              variant="outline"
              className="flex items-center space-x-2 rounded-xl"
            >
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Professional Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-full translate-x-40 -translate-y-40"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full translate-y-32"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  India's <span className="text-blue-400">#1</span> Online
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Bus Booking
                  </span>{" "}
                  Platform
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Book your journey with confidence. Experience seamless travel
                  with our premium bus services across India.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Secure Booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock3 className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50M+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    5000+
                  </div>
                  <div className="text-sm text-gray-400">Routes Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99%</div>
                  <div className="text-sm text-gray-400">
                    On-Time Performance
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="lg:ml-8">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Book Your Journey
                    </h3>
                    <p className="text-gray-600">
                      Find and book the perfect bus for your travel
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-6">
                    {/* From and To with Swap */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                      {/* From */}
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          From
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            value={fromCity}
                            onChange={(e) => setFromCity(e.target.value)}
                            className="pl-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            placeholder="Enter departure city"
                          />
                        </div>
                      </div>

                      {/* To */}
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          To
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            value={toCity}
                            onChange={(e) => setToCity(e.target.value)}
                            className="pl-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                            placeholder="Enter destination city"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center -my-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={swapCities}
                        className="rounded-full h-12 w-12 p-0 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                      >
                        <ArrowLeftRight className="h-5 w-5 text-blue-600" />
                      </Button>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">
                        Date of Journey
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="pl-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                          min={today}
                        />
                      </div>
                    </div>

                    {/* Booking Options */}
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-pink-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              Booking for women
                            </div>
                            <div className="text-xs text-blue-600 cursor-pointer hover:text-blue-800">
                              Know more
                            </div>
                          </div>
                        </div>
                        <Switch
                          checked={freeCancellation}
                          onCheckedChange={setFreeCancellation}
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <Button
                      onClick={handleSearch}
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Search className="h-6 w-6 mr-3" />
                      Search Buses
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl border-0 shadow-md hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div
                  className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${feature.color} text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Book With redRoute Section */}
        <Card className="mb-16 p-8 rounded-3xl border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-0">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Why Choose redRoute
                </h2>
                <p className="text-gray-600">
                  Experience the difference with our premium services
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-2xl border-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyBookFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Offers Section */}
        <Card className="p-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white rounded-3xl border-0 shadow-xl">
          <CardContent className="p-0 text-center">
            <h2 className="text-4xl font-bold mb-4">HAPPY JOURNEY!</h2>
            <p className="text-xl opacity-95 mb-6">
              Discover amazing deals and offers for your next adventure
            </p>
            <Button className="bg-white text-red-500 hover:bg-gray-100 rounded-2xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Explore Offers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
