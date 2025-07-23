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

function isValidSaudiNumber(phone) {
  // رقم يبدأ بـ 0 وبعدها 9 أرقام (بالمجموع 10 أرقام)
  const saudiRegex = /^0\d{9}$/;
  return saudiRegex.test(phone);
}

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

  if (!isValidSaudiNumber(phone)) {
    alert("يرجى إدخال رقم هاتف سعودي صحيح يبدأ بالرقم 0 ويتكون من 10 أرقام.");
    return;
  }

  // نحول الرقم الدولي من الشكل 0546793425 إلى 966546793425 قبل إرسال الواتساب
  const internationalPhone = "966" + phone.slice(1);

  const message = `أهلاً، اسمي ${name} وأرغب في حجز موعد بتاريخ ${date}. رقم تواصلي: ${phone}`;
  const whatsappURL = `https://wa.me/${internationalPhone}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
  form.reset();
});
