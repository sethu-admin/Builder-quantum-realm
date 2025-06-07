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

      {/* Hero Section with Realistic Tokyo Night City */}
      <div className="relative h-96 bg-gradient-to-b from-slate-800 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Realistic Night Sky */}
        <div className="absolute inset-0">
          {/* Static Stars */}
          <div className="absolute top-8 left-20 w-1 h-1 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-12 left-40 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-6 right-32 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-16 right-60 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-10 left-80 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>
          <div className="absolute top-14 left-60 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
          <div className="absolute top-4 right-80 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-18 left-100 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
        </div>

        {/* Realistic Tokyo City Skyline */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-72"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
          >
            {/* Detailed Building Silhouettes */}

            {/* Far Background Buildings */}
            <rect x="0" y="200" width="50" height="80" fill="#0F1419" />
            <rect x="60" y="190" width="40" height="90" fill="#1A202C" />
            <rect x="110" y="180" width="60" height="100" fill="#2D3748" />
            <rect x="180" y="170" width="45" height="110" fill="#0F1419" />
            <rect x="235" y="160" width="70" height="120" fill="#1A202C" />

            {/* Mid Background Buildings */}
            <rect x="315" y="140" width="55" height="140" fill="#2D3748" />
            <rect x="380" y="120" width="80" height="160" fill="#0F1419" />
            <rect x="470" y="100" width="60" height="180" fill="#1A202C" />
            <rect x="540" y="80" width="90" height="200" fill="#2D3748" />
            <rect x="640" y="60" width="70" height="220" fill="#0F1419" />
            <rect x="720" y="40" width="100" height="240" fill="#1A202C" />

            {/* Foreground Buildings */}
            <rect x="830" y="90" width="80" height="190" fill="#2D3748" />
            <rect x="920" y="110" width="60" height="170" fill="#0F1419" />
            <rect x="990" y="130" width="70" height="150" fill="#1A202C" />
            <rect x="1070" y="150" width="50" height="130" fill="#2D3748" />
            <rect x="1130" y="170" width="70" height="110" fill="#0F1419" />

            {/* Building Details and Architectural Features */}
            <rect x="315" y="140" width="55" height="20" fill="#374151" />
            <rect x="380" y="120" width="80" height="15" fill="#374151" />
            <rect x="540" y="80" width="90" height="25" fill="#374151" />
            <rect x="720" y="40" width="100" height="30" fill="#374151" />

            {/* Realistic Window Grid Patterns */}

            {/* Building 1 Windows */}
            <rect x="65" y="195" width="3" height="4" fill="#FCD34D" />
            <rect x="75" y="200" width="3" height="4" fill="#93C5FD" />
            <rect x="85" y="205" width="3" height="4" fill="#FCD34D" />

            {/* Building 2 Windows */}
            <rect x="120" y="185" width="4" height="5" fill="#F87171" />
            <rect x="130" y="190" width="4" height="5" fill="#FCD34D" />
            <rect x="140" y="195" width="4" height="5" fill="#93C5FD" />
            <rect x="150" y="200" width="4" height="5" fill="#34D399" />

            {/* Building 3 Windows */}
            <rect x="190" y="175" width="3" height="6" fill="#A78BFA" />
            <rect x="200" y="180" width="3" height="6" fill="#FCD34D" />
            <rect x="210" y="185" width="3" height="6" fill="#F87171" />
            <rect x="220" y="190" width="3" height="6" fill="#93C5FD" />

            {/* Building 4 Windows - Pattern */}
            <rect x="245" y="165" width="5" height="7" fill="#34D399" />
            <rect x="255" y="170" width="5" height="7" fill="#FCD34D" />
            <rect x="265" y="175" width="5" height="7" fill="#A78BFA" />
            <rect x="275" y="180" width="5" height="7" fill="#F87171" />
            <rect x="285" y="185" width="5" height="7" fill="#93C5FD" />

            {/* Tall Building Windows - Grid Pattern */}
            <rect x="325" y="145" width="4" height="8" fill="#FCD34D" />
            <rect x="335" y="150" width="4" height="8" fill="#93C5FD" />
            <rect x="345" y="155" width="4" height="8" fill="#34D399" />
            <rect x="355" y="160" width="4" height="8" fill="#F87171" />

            <rect x="325" y="170" width="4" height="8" fill="#A78BFA" />
            <rect x="335" y="175" width="4" height="8" fill="#FCD34D" />
            <rect x="345" y="180" width="4" height="8" fill="#93C5FD" />
            <rect x="355" y="185" width="4" height="8" fill="#34D399" />

            {/* Central Skyscraper Windows */}
            <rect x="390" y="125" width="6" height="10" fill="#F87171" />
            <rect x="405" y="130" width="6" height="10" fill="#FCD34D" />
            <rect x="420" y="135" width="6" height="10" fill="#93C5FD" />
            <rect x="435" y="140" width="6" height="10" fill="#A78BFA" />
            <rect x="450" y="145" width="6" height="10" fill="#34D399" />

            <rect x="390" y="155" width="6" height="10" fill="#93C5FD" />
            <rect x="405" y="160" width="6" height="10" fill="#F87171" />
            <rect x="420" y="165" width="6" height="10" fill="#FCD34D" />
            <rect x="435" y="170" width="6" height="10" fill="#34D399" />
            <rect x="450" y="175" width="6" height="10" fill="#A78BFA" />

            {/* Tallest Building Windows */}
            <rect x="550" y="85" width="8" height="12" fill="#FCD34D" />
            <rect x="570" y="90" width="8" height="12" fill="#93C5FD" />
            <rect x="590" y="95" width="8" height="12" fill="#F87171" />
            <rect x="610" y="100" width="8" height="12" fill="#34D399" />

            <rect x="550" y="115" width="8" height="12" fill="#A78BFA" />
            <rect x="570" y="120" width="8" height="12" fill="#FCD34D" />
            <rect x="590" y="125" width="8" height="12" fill="#93C5FD" />
            <rect x="610" y="130" width="8" height="12" fill="#F87171" />

            <rect x="550" y="155" width="8" height="12" fill="#34D399" />
            <rect x="570" y="160" width="8" height="12" fill="#A78BFA" />
            <rect x="590" y="165" width="8" height="12" fill="#FCD34D" />
            <rect x="610" y="170" width="8" height="12" fill="#93C5FD" />

            {/* Distinctive Neon Signs */}
            <rect x="320" y="220" width="45" height="8" fill="#FF0080" />
            <rect x="480" y="180" width="40" height="6" fill="#00FFFF" />
            <rect x="650" y="200" width="35" height="7" fill="#FFFF00" />
            <rect x="840" y="240" width="50" height="8" fill="#FF4500" />
            <rect x="1000" y="210" width="35" height="6" fill="#00FF80" />

            {/* Building Rooftop Details */}
            <rect x="540" y="75" width="90" height="5" fill="#6B7280" />
            <rect x="720" y="35" width="100" height="5" fill="#6B7280" />
            <rect x="380" y="115" width="80" height="5" fill="#6B7280" />

            {/* Antenna and Communication Towers */}
            <rect x="585" y="65" width="2" height="15" fill="#9CA3AF" />
            <rect x="770" y="25" width="2" height="15" fill="#9CA3AF" />
            <rect x="420" y="105" width="2" height="15" fill="#9CA3AF" />
          </svg>
        </div>

        {/* Realistic City Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-500/15 via-purple-500/10 to-transparent"></div>

        {/* Atmospheric Haze */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-600/20 to-transparent"></div>

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
