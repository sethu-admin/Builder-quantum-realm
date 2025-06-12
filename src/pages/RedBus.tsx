import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

const RedBus = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState<Date | undefined>(new Date());

  const handleSearch = () => {
    if (!fromCity || !toCity || !travelDate) {
      alert("Please fill all fields");
      return;
    }
    alert(`Searching buses from ${fromCity} to ${toCity} on ${format(travelDate, "dd MMM yyyy")}`);
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1505731132302-97d476a964b9?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
      <div className="bg-white/80 backdrop-blur-sm">
        <header className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-600">redBus</h1>
        </header>
        <main className="max-w-3xl mx-auto py-10 px-4">
          <Card className="p-6 rounded-xl shadow-lg">
            <CardContent className="p-0 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Book Bus Tickets</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="From"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                />
                <Input
                  placeholder="To"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                />
                <div className="relative">
                  <Calendar mode="single" selected={travelDate} onSelect={setTravelDate} className="absolute z-10 bg-white" />
                  <Input
                    readOnly
                    value={travelDate ? format(travelDate, "dd MMM yyyy") : "Select date"}
                    onClick={() => {}}
                  />
                </div>
              </div>
              <div className="text-right">
                <Button onClick={handleSearch}>Search Buses</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default RedBus;
