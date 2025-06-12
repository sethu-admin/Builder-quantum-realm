import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const SeatBooking = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [boarding, setBoarding] = useState("");
  const [dropping, setDropping] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const seats = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  const handleSubmit = () => {
    if (!selectedSeat) {
      alert("Select a seat");
      return;
    }
    if (!boarding || !dropping) {
      alert("Enter boarding and dropping points");
      return;
    }
    if (!name || !email) {
      alert("Fill passenger details");
      return;
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen p-8 space-y-6 bg-gray-50">
      <Button onClick={() => setDialogOpen(true)}>Choose Seat</Button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <div className="grid grid-cols-4 gap-2 p-4">
            {seats.map((s) => (
              <Button
                key={s}
                variant={selectedSeat === s ? "default" : "outline"}
                onClick={() => setSelectedSeat(s)}
                className="h-10"
              >
                {s}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Boarding point</label>
          <Input
            value={boarding}
            onChange={(e) => setBoarding(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Dropping point</label>
          <Input
            value={dropping}
            onChange={(e) => setDropping(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Passenger name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button className="mt-4" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SeatBooking;
