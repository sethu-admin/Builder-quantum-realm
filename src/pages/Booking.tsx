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
      <div className="relative h-96 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-700 overflow-hidden">
        {/* Starry Night Sky */}
        <div className="absolute inset-0">
          {/* Dense Star Field */}
          <div className="absolute top-4 left-8 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-6 left-16 w-1 h-1 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-8 left-28 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-10 left-40 w-0.5 h-0.5 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-12 left-52 w-1 h-1 bg-white rounded-full opacity-75"></div>
          <div className="absolute top-14 left-64 w-0.5 h-0.5 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-16 left-76 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
          <div className="absolute top-18 left-88 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-20 left-100 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>

          <div className="absolute top-5 right-8 w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>
          <div className="absolute top-7 right-20 w-1 h-1 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-9 right-32 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-11 right-44 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-13 right-56 w-1 h-1 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-15 right-68 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
          <div className="absolute top-17 right-80 w-0.5 h-0.5 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-19 right-92 w-1 h-1 bg-white rounded-full opacity-75"></div>

          <div className="absolute top-22 left-12 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-24 left-32 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-26 left-48 w-0.5 h-0.5 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-28 right-16 w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>
          <div className="absolute top-30 right-36 w-1 h-1 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-32 right-52 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>

          <div className="absolute top-34 left-20 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-36 left-44 w-1 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-38 right-28 w-0.5 h-0.5 bg-white rounded-full opacity-85"></div>
          <div className="absolute top-40 right-48 w-0.5 h-0.5 bg-white rounded-full opacity-75"></div>
        </div>

        {/* Crescent Moon */}
        <div className="absolute top-16 left-32">
          <svg className="w-20 h-20" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="18" fill="#F8FAFC" opacity="0.95" />
            <circle cx="45" cy="40" r="15" fill="#1E293B" opacity="1" />
          </svg>
        </div>

        {/* Clean City Silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-40"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            {/* Building Silhouettes - Pure Black */}
            <rect x="0" y="120" width="60" height="40" fill="#0F172A" />
            <rect x="70" y="110" width="45" height="50" fill="#0F172A" />
            <rect x="125" y="90" width="55" height="70" fill="#0F172A" />
            <rect x="190" y="70" width="40" height="90" fill="#0F172A" />
            <rect x="240" y="50" width="65" height="110" fill="#0F172A" />
            <rect x="315" y="30" width="50" height="130" fill="#0F172A" />
            <rect x="375" y="20" width="70" height="140" fill="#0F172A" />
            <rect x="455" y="10" width="60" height="150" fill="#0F172A" />
            <rect x="525" y="25" width="80" height="135" fill="#0F172A" />
            <rect x="615" y="40" width="55" height="120" fill="#0F172A" />
            <rect x="680" y="60" width="70" height="100" fill="#0F172A" />
            <rect x="760" y="80" width="45" height="80" fill="#0F172A" />
            <rect x="815" y="100" width="60" height="60" fill="#0F172A" />
            <rect x="885" y="90" width="50" height="70" fill="#0F172A" />
            <rect x="945" y="105" width="65" height="55" fill="#0F172A" />
            <rect x="1020" y="115" width="55" height="45" fill="#0F172A" />
            <rect x="1085" y="125" width="45" height="35" fill="#0F172A" />
            <rect x="1140" y="135" width="60" height="25" fill="#0F172A" />

            {/* Ground Level Street Lights */}
            <circle cx="50" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
            <circle cx="120" cy="155" r="2" fill="#FCD34D" opacity="0.7" />
            <circle cx="200" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
            <circle cx="280" cy="155" r="2" fill="#FCD34D" opacity="0.8" />
            <circle cx="360" cy="155" r="2" fill="#FCD34D" opacity="0.7" />
            <circle cx="440" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
            <circle cx="520" cy="155" r="2" fill="#FCD34D" opacity="0.8" />
            <circle cx="600" cy="155" r="2" fill="#FCD34D" opacity="0.7" />
            <circle cx="680" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
            <circle cx="760" cy="155" r="2" fill="#FCD34D" opacity="0.8" />
            <circle cx="840" cy="155" r="2" fill="#FCD34D" opacity="0.7" />
            <circle cx="920" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
            <circle cx="1000" cy="155" r="2" fill="#FCD34D" opacity="0.8" />
            <circle cx="1080" cy="155" r="2" fill="#FCD34D" opacity="0.7" />
            <circle cx="1160" cy="155" r="2" fill="#FCD34D" opacity="0.9" />
          </svg>
        </div>

        {/* Waterline Reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-800"></div>

        {/* Hero Text */}
        <div className="absolute top-16 left-8 text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-xl">
            India's No.1 online
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-xl">
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
