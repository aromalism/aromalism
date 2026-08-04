// Classical Dance Timetable Data
const scheduleBatches = [
  { day: 'Sat & Sun', time: '8:00 AM - 9:30 AM', title: 'Bharatanatyam (Beginner Adavu)', level: 'Kids (Ages 5-10)', cat: 'kids' },
  { day: 'Sat & Sun', time: '10:00 AM - 11:30 AM', title: 'Mohiniyattam Kerala Style Foundations', level: 'Kids & Teens', cat: 'kids' },
  { day: 'Mon & Wed', time: '5:00 PM - 6:30 PM', title: 'Bharatanatyam Repertoire (Varnam & Tillana)', level: 'Intermediate', cat: 'teens' },
  { day: 'Tue & Thu', time: '6:30 PM - 8:00 PM', title: 'Mohiniyattam Performance & Sopanam', level: 'Adults Open Batch', cat: 'adults' },
  { day: 'Friday Special', time: '6:00 PM - 8:00 PM', title: 'Nattuvangam & Carnatic Rhythm Masterclass', level: 'Senior Students', cat: 'teens' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderSchedule('all');
});

// Render Timetable Rows
function renderSchedule(filter) {
  const container = document.getElementById('scheduleContainer');
  const filtered = filter === 'all' ? scheduleBatches : scheduleBatches.filter(b => b.cat === filter);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#655648;">No batches matching this category.</p>';
    return;
  }

  container.innerHTML = filtered.map(b => `
    <div class="sched-row">
      <div>
        <div class="sched-time"><i class="fa-regular fa-clock"></i> ${b.day} | ${b.time}</div>
        <div class="sched-title">${b.title}</div>
        <div class="sched-meta">Target: <strong>${b.level}</strong></div>
      </div>
      <a href="#trial" class="btn btn-temple-gold" style="padding: 8px 16px; font-size: 0.8rem;">Request Audit</a>
    </div>
  `).join('');
}

// Filter Button Click Handler
function filterSchedule(category) {
  const buttons = document.querySelectorAll('.sched-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  renderSchedule(category);
}

// Enrollment Form Handler
function handleEnrollment(event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value;
  const art = document.getElementById('artForm').value;

  alert(`Namaste! Registration received for ${name} in ${art.toUpperCase()}. Our Guru will get in touch shortly with trial class details.`);
  document.getElementById('classicalEnrollForm').reset();
}
