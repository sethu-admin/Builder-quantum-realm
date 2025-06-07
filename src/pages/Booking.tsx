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

      {/* Hero Section - Real REDROUTE Bus */}
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

        {/* Real REDROUTE Bus - Photographic Style */}
        <div className="absolute bottom-0 left-8">
          <div
            className="w-[600px] h-64 relative"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
              backgroundImage: `
                linear-gradient(45deg, transparent 0%, rgba(0,0,0,0.1) 100%),
                linear-gradient(to right, 
                  #7F1D1D 0%, #7F1D1D 8%, 
                  #DC2626 8%, #DC2626 85%, 
                  #7F1D1D 85%, #7F1D1D 100%
                ),
                linear-gradient(to bottom, 
                  #991B1B 0%, #991B1B 15%, 
                  #DC2626 15%, #DC2626 75%, 
                  #7F1D1D 75%, #7F1D1D 100%
                )
              `,
              backgroundSize: "100% 100%",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            {/* Bus Shadow */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[580px] h-6 bg-black opacity-30 rounded-full blur-sm"></div>

            {/* Bus Windows Strip */}
            <div
              className="absolute top-6 left-12 right-16 h-12 bg-gray-900 opacity-80 rounded-lg"
              style={{
                background:
                  "linear-gradient(to right, #1E293B 0%, #334155 50%, #1E293B 100%)",
              }}
            ></div>

            {/* Individual Window Reflections */}
            <div className="absolute top-8 left-14 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-28 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-42 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-56 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-70 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-84 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-98 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-112 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>
            <div className="absolute top-8 left-126 w-11 h-8 bg-blue-200 opacity-60 rounded"></div>

            {/* Large REDROUTE Branding */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-lg shadow-lg"
              style={{ width: "300px", textAlign: "center" }}
            >
              <div className="text-4xl font-bold text-red-600 tracking-wide">
                REDROUTE
              </div>
            </div>

            {/* Front Section */}
            <div
              className="absolute top-0 right-0 w-16 h-full rounded-r-xl"
              style={{
                background:
                  "linear-gradient(to bottom, #991B1B 0%, #DC2626 50%, #7F1D1D 100%)",
              }}
            ></div>

            {/* Front Windshield */}
            <div className="absolute top-6 right-2 w-12 h-12 bg-blue-900 opacity-80 rounded-lg"></div>

            {/* Headlights */}
            <div className="absolute top-8 right-1 w-3 h-3 bg-yellow-200 rounded-full"></div>
            <div className="absolute top-14 right-1 w-3 h-3 bg-yellow-200 rounded-full"></div>
            <div className="absolute bottom-16 right-1 w-2 h-2 bg-red-300 rounded-full"></div>
            <div className="absolute bottom-12 right-1 w-2 h-2 bg-red-300 rounded-full"></div>

            {/* Wheels - Photorealistic */}
            <div className="absolute bottom-[-40px] left-20">
              <div className="w-20 h-20 rounded-full bg-black">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-black border-4 border-gray-400">
                  <div className="w-12 h-12 rounded-full bg-gray-500 m-4 border-2 border-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gray-300 m-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[-40px] right-24">
              <div className="w-20 h-20 rounded-full bg-black">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-black border-4 border-gray-400">
                  <div className="w-12 h-12 rounded-full bg-gray-500 m-4 border-2 border-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gray-300 m-3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Door */}
            <div className="absolute top-1/2 left-2 w-8 h-16 bg-red-900 rounded transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-3 w-1 h-6 bg-gray-300 rounded transform -translate-y-1/2"></div>

            {/* Side Details */}
            <div className="absolute bottom-8 left-8 right-8 h-2 bg-red-900 rounded"></div>
            <div className="absolute bottom-12 left-8 right-8 h-1 bg-yellow-200 opacity-60 rounded"></div>

            {/* Side Mirror */}
            <div className="absolute top-8 right-[-4px] w-2 h-4 bg-gray-600 rounded"></div>

            {/* Air Conditioning */}
            <div className="absolute top-1/2 right-4 w-4 h-8 bg-gray-500 rounded transform -translate-y-1/2">
              <div className="w-3 h-1 bg-gray-700 mt-1 mx-auto rounded"></div>
              <div className="w-3 h-1 bg-gray-700 mt-1 mx-auto rounded"></div>
              <div className="w-3 h-1 bg-gray-700 mt-1 mx-auto rounded"></div>
              <div className="w-3 h-1 bg-gray-700 mt-1 mx-auto rounded"></div>
            </div>
          </div>
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
