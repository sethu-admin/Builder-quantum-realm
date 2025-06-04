import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-4">
        {/* Hamburger Menu */}
        <Button variant="ghost" size="sm" className="p-2">
          <Menu className="h-5 w-5 text-gray-600" />
        </Button>

        {/* Search Bar */}
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm">
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
};
