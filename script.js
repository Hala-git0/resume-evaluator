// =================================================================
// 1. تحديد العناصر من صفحة HTML باستخدام الـ ID الخاص بكل عنصر
// =================================================================

const form = document.getElementById("my-form");
const jobDescriptionInput = document.getElementById("job-description");
const resumeInput = document.getElementById("resume");
const resultsDiv = document.getElementById("results");

// =================================================================
// 2. إضافة مستمع الأحداث (Event Listener) عند إرسال الفورم (Submit)
// =================================================================
form.addEventListener("submit", function(event) {
  // منع الصفحة من إعادة التحميل الافتراضية عند إرسال النموذج
  event.preventDefault();

  // قراءة القيم التي أدخلها المستخدم

  const jobDescriptionValue = jobDescriptionInput.value.trim(); // .trim() تحذف المسافات الزائدة من البداية والنهاية
  const filesList = resumeInput.files; 
  
  // =================================================================
  // 3. التحقق من الشروط (Validation) وعرض الرسائل المناسبة
  // =================================================================
  
  // الشرط الأول: التأكد من أن حقل وصف الوظيفة ليس فارغاً
if (jobDescriptionValue ==="") {
    resultsDiv.innerHTML = `<span style="color: #ef4444; font-weight: bold;">❌ Please enter a job description.</span>`;
    return; // إيقاف تنفيذ الدالة هنا وعدم الانتقال للخطوات التالية
}
  // الشرط الثاني: التأكد من أن المستخدم قام برفع ملف واحد على الأقل
  if (filesList.length === 0) {
    resultsDiv.innerHTML = `<span style="color: #ef4444; font-weight: bold;">❌ Please upload a PDF resume.</span>`;
    return; // إيقاف تنفيذ الدالة
  }

  // في حال نجاح الشروط السابقة (الحقول ممتلئة):
  const fileName = filesList[0].name; // جلب اسم الملف المرفوع

  // عرض رسالة النجاح داخل منطقة النتائج
  resultsDiv.innerHTML = `
    <div style="color: #10b981; font-weight: bold; margin-bottom: 8px;">✅ Form submitted successfully!</div>
    <p>Evaluating <strong>${fileName}</strong> against the job description... <br>
    <small style="color: #6b7280;">(ChatGPT integration coming in Stage 5)</small></p>
  `;
});

