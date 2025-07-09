// Demo data for stories and dates
const stories = [
  "Dreams are the seeds of change. Nothing ever grows without a seed, and nothing ever changes without a dream.",
  "Sunsets are proof that no matter what happens, every day can end beautifully.",
  "Exploring new places with old souls.",
  "Nature always wears the colors of the spirit.",
  "Memories made together, moments captured forever.",
  "Happiness is a quiet walk in the wild."
];
// Example upload dates, you can edit these
const uploadDates = [
  "2025-07-04",
  "2025-07-05",
  "2025-07-06",
  "2025-07-07",
  "2025-07-08",
  "2025-07-09"
];

const gallery = document.getElementById('gallery');
for (let i = 1; i <= 6; i++) {
  const col = document.createElement('div');
  col.className = 'col';
  col.innerHTML = `
    <div class="card h-100">
      <img src="${i}.jpeg" class="card-img-top" alt="Image ${i}" loading="lazy" />
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="card-text">${stories[i-1]}</div>
        <div class="upload-date">Uploaded: ${uploadDates[i-1]}</div>
      </div>
    </div>
  `;
  gallery.appendChild(col);
}
