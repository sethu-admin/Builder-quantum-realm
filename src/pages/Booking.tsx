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

      {/* Hero Section - Realistic Red Bus Scene like FlixBus */}
      <div
        className="relative h-96 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)),
                         url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect width='1200' height='400' fill='%2398A2B3'/%3E%3Cpath d='M0,400 L1200,400 L1200,200 Q600,150 0,200 Z' fill='%2322C55E'/%3E%3Cpath d='M0,400 L1200,400 L1200,250 Q600,200 0,250 Z' fill='%2316A34A'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Natural Environment Details */}
        <div className="absolute inset-0">
          {/* Trees scattered in background */}
          <div className="absolute bottom-32 left-12 w-8 h-16 bg-green-800 rounded-full opacity-80"></div>
          <div className="absolute bottom-28 left-24 w-6 h-12 bg-green-700 rounded-full opacity-70"></div>
          <div className="absolute bottom-30 left-40 w-10 h-20 bg-green-800 rounded-full opacity-85"></div>
          <div className="absolute bottom-32 left-60 w-7 h-14 bg-green-700 rounded-full opacity-75"></div>

          <div className="absolute bottom-28 right-80 w-9 h-18 bg-green-800 rounded-full opacity-80"></div>
          <div className="absolute bottom-30 right-100 w-8 h-16 bg-green-700 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 right-120 w-11 h-22 bg-green-800 rounded-full opacity-85"></div>

          {/* Road surface */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-700"></div>
          <div className="absolute bottom-6 left-0 right-0 h-1 bg-yellow-300 opacity-80"></div>
        </div>

        {/* Large Realistic Red REDROUTE Bus */}
        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
          <svg
            className="w-96 h-56"
            viewBox="0 0 480 280"
            style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
          >
            {/* Bus Shadow on ground */}
            <ellipse
              cx="240"
              cy="260"
              rx="220"
              ry="15"
              fill="rgba(0,0,0,0.4)"
            />

            {/* Main Bus Body - Red Theme */}
            <rect
              x="20"
              y="90"
              width="400"
              height="140"
              rx="12"
              fill="#DC2626"
            />
            <rect
              x="25"
              y="95"
              width="390"
              height="130"
              rx="10"
              fill="#EF4444"
            />

            {/* Lower Body Panel */}
            <rect
              x="25"
              y="180"
              width="390"
              height="45"
              rx="8"
              fill="#B91C1C"
            />

            {/* Large Window Strip */}
            <rect
              x="40"
              y="105"
              width="340"
              height="45"
              rx="6"
              fill="#1E3A8A"
              opacity="0.85"
            />

            {/* Individual Window Segments */}
            <rect
              x="45"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="88"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="131"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="174"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="217"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="260"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="303"
              y="110"
              width="38"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />
            <rect
              x="346"
              y="110"
              width="30"
              height="35"
              rx="3"
              fill="#DBEAFE"
              opacity="0.9"
            />

            {/* Front Section */}
            <path
              d="M 420 90 Q 460 100 470 140 L 470 210 Q 460 230 420 230 Z"
              fill="#DC2626"
            />
            <path
              d="M 420 100 Q 450 110 458 145 L 458 195 Q 450 215 420 215 Z"
              fill="#EF4444"
            />

            {/* Front Windshield */}
            <path
              d="M 420 110 Q 445 120 452 150 L 452 185 Q 445 205 420 205 Z"
              fill="#BFDBFE"
              opacity="0.9"
            />

            {/* Large REDROUTE Branding */}
            <rect
              x="100"
              y="155"
              width="240"
              height="35"
              rx="6"
              fill="#FFFFFF"
            />
            <text
              x="220"
              y="180"
              textAnchor="middle"
              fill="#DC2626"
              fontSize="28"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              REDROUTE
            </text>

            {/* Realistic Wheels */}
            <circle cx="90" cy="240" r="35" fill="#1F2937" />
            <circle cx="90" cy="240" r="28" fill="#374151" />
            <circle cx="90" cy="240" r="20" fill="#6B7280" />
            <circle cx="90" cy="240" r="12" fill="#9CA3AF" />
            <circle cx="90" cy="240" r="6" fill="#D1D5DB" />

            <circle cx="350" cy="240" r="35" fill="#1F2937" />
            <circle cx="350" cy="240" r="28" fill="#374151" />
            <circle cx="350" cy="240" r="20" fill="#6B7280" />
            <circle cx="350" cy="240" r="12" fill="#9CA3AF" />
            <circle cx="350" cy="240" r="6" fill="#D1D5DB" />

            {/* Door */}
            <rect x="30" y="165" width="30" height="60" rx="4" fill="#7C2D12" />
            <rect x="35" y="190" width="5" height="20" rx="2" fill="#D1D5DB" />

            {/* Side Details */}
            <rect x="25" y="200" width="390" height="8" fill="#7C2D12" />
            <rect
              x="30"
              y="190"
              width="380"
              height="3"
              fill="#FEF3C7"
              opacity="0.8"
            />

            {/* Headlights */}
            <circle cx="455" cy="130" r="10" fill="#FEF3C7" />
            <circle cx="455" cy="155" r="10" fill="#FEF3C7" />
            <circle cx="455" cy="180" r="8" fill="#FCA5A5" />

            {/* Side Mirror */}
            <ellipse cx="475" cy="135" rx="4" ry="10" fill="#374151" />

            {/* Roof and Details */}
            <rect x="25" y="85" width="390" height="10" fill="#991B1B" />

            {/* Air Vents */}
            <rect
              x="400"
              y="160"
              width="15"
              height="25"
              rx="2"
              fill="#6B7280"
            />
            <rect x="402" y="162" width="11" height="3" fill="#374151" />
            <rect x="402" y="167" width="11" height="3" fill="#374151" />
            <rect x="402" y="172" width="11" height="3" fill="#374151" />
            <rect x="402" y="177" width="11" height="3" fill="#374151" />
          </svg>
        </div>

        {/* 20% off Coupon Badge */}
        <div className="absolute top-8 right-8">
          <div className="bg-white rounded-full p-6 shadow-xl border-2 border-gray-200">
            <div className="text-center">
              <div className="text-red-600 font-bold text-xl">20% off</div>
              <div className="text-gray-600 text-sm mt-1">coupon code:</div>
              <div className="text-red-600 font-bold text-lg">summer21</div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-16 left-8 text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-2xl">
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
