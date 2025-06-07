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

      {/* Hero Section - Photorealistic Red Bus Scene */}
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-green-100 via-green-200 to-green-300">
        {/* Realistic Background Environment */}
        <div className="absolute inset-0">
          {/* Sky */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-100 to-green-100"></div>

          {/* Distant Trees and Vegetation */}
          <div className="absolute bottom-20 left-0 right-0 h-32 bg-gradient-to-t from-green-600 via-green-500 to-green-400 opacity-80"></div>

          {/* Building/Wall in Background */}
          <div className="absolute top-20 right-0 w-64 h-48 bg-gradient-to-l from-gray-300 via-gray-200 to-transparent opacity-70"></div>

          {/* Grass and Foliage */}
          <div className="absolute bottom-16 left-0 right-0 h-20 bg-gradient-to-t from-green-700 via-green-600 to-green-500"></div>

          {/* Road Surface */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-600 to-gray-500"></div>
        </div>

        {/* Photorealistic Red REDROUTE Bus */}
        <div
          className="absolute bottom-0 left-8"
          style={{ filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.4))" }}
        >
          <svg className="w-[600px] h-64" viewBox="0 0 600 320">
            {/* Bus Shadow */}
            <ellipse
              cx="300"
              cy="300"
              rx="280"
              ry="18"
              fill="rgba(0,0,0,0.3)"
            />

            {/* Main Bus Body - Red Theme */}
            <rect
              x="25"
              y="80"
              width="500"
              height="160"
              rx="15"
              fill="#DC2626"
            />
            <rect
              x="30"
              y="85"
              width="490"
              height="150"
              rx="12"
              fill="#EF4444"
            />

            {/* Lower Dark Section */}
            <rect
              x="30"
              y="200"
              width="490"
              height="35"
              rx="8"
              fill="#7F1D1D"
            />

            {/* Black Tinted Window Strip */}
            <rect
              x="50"
              y="95"
              width="420"
              height="50"
              rx="8"
              fill="#1E293B"
              opacity="0.9"
            />

            {/* Individual Windows */}
            <rect
              x="55"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="108"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="161"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="214"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="267"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="320"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="373"
              y="100"
              width="48"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />
            <rect
              x="426"
              y="100"
              width="40"
              height="40"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />

            {/* Front Section */}
            <path
              d="M 525 80 Q 570 90 580 130 L 580 220 Q 570 240 525 240 Z"
              fill="#DC2626"
            />
            <path
              d="M 525 90 Q 565 100 575 135 L 575 205 Q 565 225 525 225 Z"
              fill="#EF4444"
            />

            {/* Front Windshield */}
            <path
              d="M 525 100 Q 560 110 570 140 L 570 190 Q 560 210 525 210 Z"
              fill="#1E3A8A"
              opacity="0.8"
            />

            {/* Large REDROUTE Branding */}
            <rect
              x="120"
              y="155"
              width="300"
              height="40"
              rx="8"
              fill="#FFFFFF"
            />
            <text
              x="270"
              y="185"
              textAnchor="middle"
              fill="#DC2626"
              fontSize="36"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              REDROUTE
            </text>

            {/* Realistic Large Wheels */}
            <circle cx="110" cy="260" r="40" fill="#1A1A1A" />
            <circle cx="110" cy="260" r="32" fill="#2D2D2D" />
            <circle cx="110" cy="260" r="24" fill="#404040" />
            <circle cx="110" cy="260" r="16" fill="#5A5A5A" />
            <circle cx="110" cy="260" r="8" fill="#808080" />

            <circle cx="430" cy="260" r="40" fill="#1A1A1A" />
            <circle cx="430" cy="260" r="32" fill="#2D2D2D" />
            <circle cx="430" cy="260" r="24" fill="#404040" />
            <circle cx="430" cy="260" r="16" fill="#5A5A5A" />
            <circle cx="430" cy="260" r="8" fill="#808080" />

            {/* Door */}
            <rect x="35" y="170" width="35" height="65" rx="5" fill="#7F1D1D" />
            <rect x="40" y="200" width="6" height="25" rx="2" fill="#D1D5DB" />

            {/* Side Body Details */}
            <rect x="30" y="225" width="490" height="10" fill="#7F1D1D" />
            <rect
              x="35"
              y="215"
              width="480"
              height="4"
              fill="#FEF3C7"
              opacity="0.6"
            />

            {/* Front Lights */}
            <circle cx="565" cy="120" r="12" fill="#FEF3C7" />
            <circle cx="565" cy="145" r="12" fill="#FEF3C7" />
            <circle cx="565" cy="170" r="10" fill="#FCA5A5" />
            <circle cx="565" cy="190" r="10" fill="#FCA5A5" />

            {/* Side Mirror */}
            <ellipse cx="585" cy="125" rx="5" ry="12" fill="#374151" />

            {/* Roof Details */}
            <rect x="30" y="75" width="490" height="10" fill="#991B1B" />

            {/* Air Conditioning Unit */}
            <rect
              x="480"
              y="170"
              width="20"
              height="30"
              rx="3"
              fill="#6B7280"
            />
            <rect x="482" y="173" width="16" height="4" fill="#374151" />
            <rect x="482" y="179" width="16" height="4" fill="#374151" />
            <rect x="482" y="185" width="16" height="4" fill="#374151" />
            <rect x="482" y="191" width="16" height="4" fill="#374151" />

            {/* Registration Plate */}
            <rect
              x="540"
              y="200"
              width="25"
              height="12"
              rx="2"
              fill="#FFFFFF"
            />
            <rect
              x="541"
              y="201"
              width="23"
              height="10"
              rx="1"
              fill="#000000"
            />
          </svg>
        </div>

        {/* 20% off Coupon Badge - Exactly like FlixBus */}
        <div className="absolute top-6 right-6">
          <div className="bg-white rounded-full p-5 shadow-2xl border border-gray-300">
            <div className="text-center">
              <div className="text-red-600 font-bold text-lg">20% off</div>
              <div className="text-gray-700 text-xs font-medium">
                coupon code:
              </div>
              <div className="text-red-600 font-bold text-base">summer21</div>
            </div>
          </div>
        </div>

        {/* Hero Text - Exactly like FlixBus */}
        <div className="absolute bottom-6 left-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-2xl">
            Low cost travel in India by bus
          </h1>
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
