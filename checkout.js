// ✅ Load merchant info dynamically
async function loadInfo() {
  try {
    const res = await fetch('/merchant-info');
    const data = await res.json();
    document.getElementById('merchantName').textContent = `Merchant: ${data.name}`;
    document.getElementById('upiId').textContent = `UPI: ${data.upi}`;
    document.getElementById('note').textContent = data.note;
  } catch (error) {
    console.error("Error loading merchant info:", error);
  }
}
loadInfo();

// ✅ Handle form submission (Frontend-only)
document.getElementById('confirmForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // 👉 Directly open Thank You page (no popup)
  window.location.href = 'thankyou.html';
});