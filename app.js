document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  const resultsSection = document.getElementById('results');
  const list = document.getElementById('busList');
  list.innerHTML = '';

  const dummyBuses = [
    { id: 1, operator: 'Express Travels', time: '08:00 AM', price: '₹500' },
    { id: 2, operator: 'Comfort Bus', time: '10:00 AM', price: '₹650' },
    { id: 3, operator: 'Night Rider', time: '11:00 PM', price: '₹700' }
  ];

  dummyBuses.forEach(bus => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${bus.operator}</strong> - ${bus.time} - ${bus.price}`;
    list.appendChild(li);
  });

  resultsSection.classList.remove('hidden');
});
