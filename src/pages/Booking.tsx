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

      {/* Hero Section - Realistic Red Bus Scene */}
      <div className="relative h-96 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
        {/* Background Landscape */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-green-100 to-green-200">
          {/* Sky with Clouds */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-200 to-blue-100">
            {/* Clouds */}
            <div className="absolute top-4 left-20 w-16 h-8 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-6 left-60 w-12 h-6 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-8 right-32 w-20 h-10 bg-white rounded-full opacity-75"></div>
            <div className="absolute top-12 right-80 w-14 h-7 bg-white rounded-full opacity-65"></div>
          </div>

          {/* Trees and Nature */}
          <div className="absolute bottom-20 left-0 right-0 h-32">
            {/* Tree Silhouettes */}
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <rect x="0" y="80" width="1200" height="40" fill="#22C55E" />

              {/* Trees */}
              <circle cx="100" cy="70" r="15" fill="#16A34A" />
              <rect x="98" y="70" width="4" height="20" fill="#A16207" />

              <circle cx="200" cy="65" r="18" fill="#16A34A" />
              <rect x="198" y="65" width="4" height="25" fill="#A16207" />

              <circle cx="300" cy="75" r="12" fill="#15803D" />
              <rect x="298" y="75" width="4" height="15" fill="#A16207" />

              <circle cx="450" cy="60" r="20" fill="#16A34A" />
              <rect x="448" y="60" width="4" height="30" fill="#A16207" />

              <circle cx="600" cy="70" r="16" fill="#15803D" />
              <rect x="598" y="70" width="4" height="20" fill="#A16207" />

              <circle cx="750" cy="65" r="14" fill="#16A34A" />
              <rect x="748" y="65" width="4" height="25" fill="#A16207" />

              <circle cx="900" cy="75" r="17" fill="#15803D" />
              <rect x="898" y="75" width="4" height="15" fill="#A16207" />

              <circle cx="1050" cy="70" r="19" fill="#16A34A" />
              <rect x="1048" y="70" width="4" height="20" fill="#A16207" />
            </svg>
          </div>

          {/* Road */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-600">
            {/* Road markings */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-yellow-300"></div>
            <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-white opacity-80"></div>
          </div>
        </div>

        {/* Large Red REDROUTE Bus */}
        <div className="absolute bottom-0 right-20">
          <svg className="w-80 h-48" viewBox="0 0 400 240">
            {/* Bus Shadow */}
            <ellipse
              cx="200"
              cy="220"
              rx="180"
              ry="12"
              fill="rgba(0,0,0,0.3)"
            />

            {/* Main Bus Body - Red Theme */}
            <rect
              x="20"
              y="80"
              width="320"
              height="120"
              rx="8"
              fill="#DC2626"
            />
            <rect
              x="25"
              y="85"
              width="310"
              height="110"
              rx="6"
              fill="#B91C1C"
            />

            {/* Bus Windows */}
            <rect
              x="40"
              y="95"
              width="260"
              height="35"
              rx="4"
              fill="#1E3A8A"
              opacity="0.8"
            />

            {/* Individual Window Segments */}
            <rect
              x="45"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="80"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="115"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="150"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="185"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="220"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="255"
              y="100"
              width="30"
              height="25"
              rx="2"
              fill="#DBEAFE"
              opacity="0.9"
            />

            {/* Front Section */}
            <path
              d="M 340 80 Q 375 90 385 120 L 385 180 Q 375 200 340 200 Z"
              fill="#DC2626"
            />
            <path
              d="M 340 90 Q 370 100 378 130 L 378 170 Q 370 190 340 190 Z"
              fill="#B91C1C"
            />

            {/* Front Windshield */}
            <path
              d="M 340 100 Q 365 110 372 135 L 372 165 Q 365 185 340 185 Z"
              fill="#BFDBFE"
              opacity="0.9"
            />

            {/* REDROUTE Branding */}
            <rect
              x="80"
              y="140"
              width="200"
              height="25"
              rx="4"
              fill="#FFFFFF"
            />
            <text
              x="180"
              y="158"
              textAnchor="middle"
              fill="#DC2626"
              fontSize="20"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              REDROUTE
            </text>

            {/* Wheels */}
            <circle cx="80" cy="210" r="30" fill="#1F2937" />
            <circle cx="80" cy="210" r="24" fill="#374151" />
            <circle cx="80" cy="210" r="16" fill="#6B7280" />
            <circle cx="80" cy="210" r="8" fill="#9CA3AF" />

            <circle cx="280" cy="210" r="30" fill="#1F2937" />
            <circle cx="280" cy="210" r="24" fill="#374151" />
            <circle cx="280" cy="210" r="16" fill="#6B7280" />
            <circle cx="280" cy="210" r="8" fill="#9CA3AF" />

            {/* Door */}
            <rect x="30" y="140" width="25" height="55" rx="3" fill="#7C2D12" />
            <rect x="33" y="165" width="4" height="15" rx="1" fill="#D1D5DB" />

            {/* Side Details */}
            <rect x="25" y="170" width="310" height="6" fill="#7C2D12" />

            {/* Headlights */}
            <circle cx="375" cy="130" r="8" fill="#FEF3C7" />
            <circle cx="375" cy="160" r="8" fill="#FEF3C7" />

            {/* Side Mirror */}
            <ellipse cx="390" cy="125" rx="3" ry="8" fill="#374151" />

            {/* Roof Details */}
            <rect x="25" y="75" width="310" height="10" fill="#991B1B" />
          </svg>
        </div>

        {/* 20% off Coupon Badge */}
        <div className="absolute top-8 right-8">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <div className="text-center">
              <div className="text-red-600 font-bold text-lg">20% off</div>
              <div className="text-gray-600 text-sm">coupon code:</div>
              <div className="text-red-600 font-bold">summer21</div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-24 left-8 text-gray-800 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-lg">
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
