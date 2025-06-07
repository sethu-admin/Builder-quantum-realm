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
  ArrowLeft,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
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
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - RedBus Style */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-red-600">redRoute</div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-red-600 border-b-2 border-red-600 pb-4">
                  <Bus className="h-5 w-5" />
                  <span className="font-medium">Bus tickets</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:text-red-600 pb-4">
                  <Train className="h-5 w-5" />
                  <span className="font-medium">Train tickets</span>
                </div>
              </div>
            </div>

            {/* Right side - User Actions */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <Menu className="h-4 w-4" />
                <span className="text-sm">Bookings</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm">Help</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <User className="h-4 w-4" />
                <span className="text-sm">Account</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Minimalist Night City */}
      <div className="relative h-96 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-800 overflow-hidden">
        {/* Night Sky with Stars */}
        <div className="absolute inset-0">
          {/* Scattered Stars */}
          <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-16 left-32 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-12 left-48 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-20 left-64 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-6 left-80 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-14 left-96 w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>

          <div className="absolute top-10 right-12 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
          <div className="absolute top-18 right-28 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-4 right-44 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-22 right-60 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-8 right-76 w-0.5 h-0.5 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-16 right-92 w-1 h-1 bg-white rounded-full opacity-75"></div>

          <div className="absolute top-24 left-24 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-28 left-56 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-32 right-36 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-36 right-68 w-1 h-1 bg-white rounded-full opacity-80"></div>
        </div>

        {/* Crescent Moon */}
        <div className="absolute top-12 left-24">
          <svg className="w-16 h-16" viewBox="0 0 64 64">
            <path
              d="M 25 8 A 20 20 0 0 0 25 56 A 16 16 0 0 1 25 8 Z"
              fill="#F1F5F9"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* Minimalist City Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-48"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            {/* Simple Building Silhouettes */}
            <rect x="0" y="160" width="80" height="40" fill="#0A0F1C" />
            <rect x="90" y="140" width="60" height="60" fill="#0A0F1C" />
            <rect x="160" y="120" width="50" height="80" fill="#0A0F1C" />
            <rect x="220" y="100" width="70" height="100" fill="#0A0F1C" />
            <rect x="300" y="80" width="60" height="120" fill="#0A0F1C" />
            <rect x="370" y="60" width="80" height="140" fill="#0A0F1C" />
            <rect x="460" y="40" width="50" height="160" fill="#0A0F1C" />
            <rect x="520" y="20" width="90" height="180" fill="#0A0F1C" />
            <rect x="620" y="30" width="70" height="170" fill="#0A0F1C" />
            <rect x="700" y="50" width="60" height="150" fill="#0A0F1C" />
            <rect x="770" y="70" width="80" height="130" fill="#0A0F1C" />
            <rect x="860" y="90" width="50" height="110" fill="#0A0F1C" />
            <rect x="920" y="110" width="70" height="90" fill="#0A0F1C" />
            <rect x="1000" y="130" width="60" height="70" fill="#0A0F1C" />
            <rect x="1070" y="150" width="50" height="50" fill="#0A0F1C" />
            <rect x="1130" y="170" width="70" height="30" fill="#0A0F1C" />

            {/* Simple Street Level Lights */}
            <rect
              x="30"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="80"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="130"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
            <rect
              x="180"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.7"
            />
            <rect
              x="230"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="280"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="330"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
            <rect
              x="380"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.7"
            />
            <rect
              x="430"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="480"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="530"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
            <rect
              x="580"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.7"
            />
            <rect
              x="630"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="680"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="730"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
            <rect
              x="780"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.7"
            />
            <rect
              x="830"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="880"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="930"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
            <rect
              x="980"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.7"
            />
            <rect
              x="1030"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.8"
            />
            <rect
              x="1080"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.6"
            />
            <rect
              x="1130"
              y="195"
              width="2"
              height="5"
              fill="#FCD34D"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Subtle Atmospheric Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

        {/* Hero Text */}
        <div className="absolute top-16 left-8 text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-lg">
            India's No.1 online
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            bus ticket booking site
          </h2>
        </div>
      </div>
      {/* Booking Form - Overlapping */}
      <div className="relative z-10 -mt-20">
        <div className="max-w-6xl mx-auto px-8">
          <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
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
                      className="pl-10 h-14 text-lg rounded-xl border-gray-200"
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
                      className="pl-10 h-14 text-lg rounded-xl border-gray-200"
                      placeholder="To"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="lg:col-span-2 space-y-2">
                  <Label className="text-sm font-medium text-gray-600">
                    Date of Journey
                  </Label>
                  <div className="space-y-3">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-xl border-gray-200"
                        min={today}
                      />
                    </div>

                    {/* Today/Tomorrow buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                        onClick={() => setSelectedDate(today)}
                      >
                        Today
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-gray-200 hover:bg-gray-50"
                        onClick={() => setSelectedDate(tomorrowStr)}
                      >
                        Tomorrow
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Booking for women */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        Booking for women
                      </div>
                      <div className="text-xs text-blue-600 cursor-pointer">
                        Know more
                      </div>
                    </div>
                    <Switch
                      checked={freeCancellation}
                      onCheckedChange={setFreeCancellation}
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6">
                <Button
                  onClick={handleSearch}
                  className="w-full h-14 text-lg bg-red-600 hover:bg-red-700 rounded-2xl font-semibold"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search buses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
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
          ].map((feature, index) => (
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
              {[
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
              ].map((feature, index) => (
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

export default Booking;
