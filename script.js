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

const form = document.getElementById("booking-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const date = form.date.value;

  if (!name || !phone || !date) {
    alert("يرجى ملء جميع الحقول.");
    return;
  }

  const message = `أهلاً، اسمي ${name} وأرغب في حجز موعد بتاريخ ${date}. رقم تواصلي: ${phone}`;
  const whatsappNumber = "966546793425";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
  form.reset();
});
