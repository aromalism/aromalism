// Schedule Data Mock
const scheduleData = {
  mon: [
    { time: '5:30 PM - 6:30 PM', title: 'Beginner Urban Hip-Hop Grooves', teacher: 'Choreographer: Leo Cruz', level: 'Beginner' },
    { time: '6:45 PM - 8:00 PM', title: 'Contemporary Floorwork & Improvisation', teacher: 'Choreographer: Elena Rostova', level: 'Intermediate' },
    { time: '8:15 PM - 9:30 PM', title: 'Heels & Commercial Jazz Performance', teacher: 'Choreographer: Sarah Jenkins', level: 'Open Level' }
  ],
  tue: [
    { time: '5:00 PM - 6:15 PM', title: 'Classical Ballet Technique & Pointe', teacher: 'Instructor: Marcus Vance', level: 'Intermediate/Pro' },
    { time: '6:30 PM - 7:45 PM', title: 'Salsa & Bachata Social Foundations', teacher: 'Instructors: Carlos & Maria', level: 'No Partner Needed' },
    { time: '8:00 PM - 9:15 PM', title: 'Advanced Hip-Hop Choreography Intensive', teacher: 'Choreographer: Leo Cruz', level: 'Advanced' }
  ],
  fri: [
    { time: '6:00 PM - 7:30 PM', title: 'Friday Night Open Jam & Cypher', teacher: 'Hosted by Pulse Crew', level: 'All Levels' },
    { time: '7:45 PM - 9:15 PM', title: 'Latin Fusion & Styling Workshop', teacher: 'Choreographer: Maria', level: 'Open Level' }
  ],
  sat: [
    { time: '10:00 AM - 11:30 AM', title: 'Junior Dance Crew (Ages 8-14)', teacher: 'Instructor: Sarah Jenkins', level: 'Kids / Youth' },
    { time: '12:00 PM - 2:00 PM', title: 'Guest Masterclass Series', teacher: 'Visiting Choreographers', level: 'Intermediate/Pro' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Load initial Monday schedule
  switchDay('mon');
});

// 1. Filter Dance Styles
function filterStyles(category) {
  const cards = document.querySelectorAll('.style-card');
  const buttons = document.querySelectorAll('.filter-bar .filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 2. Switch Schedule Day Tabs
function switchDay(day) {
  const dayTabs = document.querySelectorAll('.day-tab');
  const scheduleContainer = document.getElementById('scheduleList');

  // Update Active Tab Styling
  dayTabs.forEach(tab => tab.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  // Render Schedule Rows
  const classes = scheduleData[day] || [];
  
  if (classes.length === 0) {
    scheduleContainer.innerHTML = '<p style="text-align:center; color:#94a3b8;">No classes scheduled for this window.</p>';
    return;
  }

  scheduleContainer.innerHTML = classes.map(c => `
    <div class="schedule-row">
      <div class="class-time"><i class="fa-regular fa-clock"></i> ${c.time}</div>
      <div class="class-details">
        <h4>${c.title}</h4>
        <p>${c.teacher}</p>
      </div>
      <span class="class-level">${c.level}</span>
      <a href="#trial" class="btn btn-accent" style="padding: 8px 18px; font-size: 0.8rem;">Drop In</a>
    </div>
  `).join('');
}

// 3. Handle Free Trial Pass Request Form
function submitTrialPass(event) {
  event.preventDefault();
  const name = document.getElementById('dancerName').value;
  const style = document.getElementById('preferredStyle').value;

  alert(`Boom! Free 1-Day Pass reserved for ${name}. We sent your studio access barcode to your phone!`);
  document.getElementById('trialForm').reset();
}
