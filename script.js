const toggleBtn = document.getElementById("lang-toggle");
const arabicEls = ["slogan-ar"];
const englishEls = ["slogan-en"];

toggleBtn.addEventListener("click", () => {
  const isAr = toggleBtn.textContent === "EN";
  arabicEls.forEach((id) =>
    document.getElementById(id).classList.toggle("hidden", !isAr)
  );
  englishEls.forEach((id) =>
    document.getElementById(id).classList.toggle("hidden", isAr)
  );
  toggleBtn.textContent = isAr ? "AR" : "EN";
});

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const date = e.target.date.value;
  alert(`شكراً ${name}! تم إرسال طلب حجز موعد في ${date}. سيتواصل معك قريباً.`);
  e.target.reset();
});
