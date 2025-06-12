const buses = [
  {from:'Delhi', to:'Jaipur', operator:'Rajasthan Travels', departure:'06:00', arrival:'10:00', price:500},
  {from:'Delhi', to:'Jaipur', operator:'Morning Star', departure:'09:00', arrival:'13:00', price:650},
  {from:'Mumbai', to:'Pune', operator:'City Express', departure:'07:30', arrival:'11:00', price:450},
  {from:'Mumbai', to:'Pune', operator:'Comfort Ride', departure:'14:00', arrival:'18:00', price:480},
  {from:'Chennai', to:'Bangalore', operator:'South Lines', departure:'05:00', arrival:'11:00', price:700},
  {from:'Chennai', to:'Bangalore', operator:'Speedy', departure:'17:00', arrival:'23:00', price:750}
];

function createBusCard(bus) {
  const div = document.createElement('div');
  div.className = 'bus-card';
  div.innerHTML = `
    <div class="bus-details">
      <strong>${bus.operator}</strong>
      <span>${bus.from} &rarr; ${bus.to}</span>
      <span>${bus.departure} - ${bus.arrival}</span>
    </div>
    <div class="bus-price">₹${bus.price}</div>
  `;
  return div;
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const from = document.getElementById('from').value.trim().toLowerCase();
  const to = document.getElementById('to').value.trim().toLowerCase();

  const resultsSection = document.getElementById('results');
  const list = document.getElementById('busList');
  list.innerHTML = '';

  const matches = buses.filter(b => b.from.toLowerCase() === from && b.to.toLowerCase() === to);

  if (matches.length === 0) {
    list.textContent = 'No buses found.';
  } else {
    matches.forEach(bus => list.appendChild(createBusCard(bus)));
  }

  resultsSection.classList.remove('hidden');
});
