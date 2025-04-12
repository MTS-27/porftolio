const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Git', 'Chart.js'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 80, 70, 65],
      backgroundColor: '#4c9aff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
