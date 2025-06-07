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

        {/* Real REDROUTE Bus Image */}
        <div className="absolute bottom-0 left-8">
          <div
            className="relative w-[600px] h-64"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
          >
            {/* Bus Image - Replace this URL with your actual REDROUTE bus image */}
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="REDROUTE Bus"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: "hue-rotate(0deg) saturate(1.2) brightness(1.1)",
              }}
            />

            {/* REDROUTE Branding Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-lg shadow-xl border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 tracking-wide">
                REDROUTE
              </div>
            </div>

            {/* Red Color Overlay to make bus appear red */}
            <div
              className="absolute inset-0 rounded-xl mix-blend-multiply opacity-40"
              style={{
                background:
                  "linear-gradient(45deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
              }}
            ></div>

            {/* Bus Shadow */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[580px] h-6 bg-black opacity-30 rounded-full blur-sm"></div>
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
