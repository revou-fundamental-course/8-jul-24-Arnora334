document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const resultDiv = document.getElementById("result");
  const bmiValueText = document.getElementById("bmi-value");
  const bmiSuggestionText = document.getElementById("bmi-suggestion");

  // Event listener untuk tombol Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
      alert("Silakan pilih jenis kelamin.");
      return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    bmiValueText.innerHTML = `MBI Anda:<br><p class="bmi">${bmi}</p>`;

    // Memberikan gaya pada teks hasil BMI
    bmiValueText.style.color = "#333"; // Contoh: mengubah warna teks menjadi hitam
    bmiValueText.style.fontSize = "24px"; // Contoh: mengatur ukuran font menjadi 24px
    bmiValueText.style.fontWeight = "bold"; // Contoh: membuat teks menjadi tebal

    let suggestion = "";
    if (bmi < 18.5) {
      suggestion = "Anda termasuk ke dalam kategori berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 25) {
      suggestion =
        "Anda memiliki berat badan normal, pertahankan pola makan dan gaya hidup sehat.";
    } else if (bmi >= 25 && bmi < 30) {
      suggestion =
        "Anda termasuk ke dalam kategori overweight, pertimbangkan untuk mengatur pola makan dan olahraga.";
    } else {
      suggestion =
        "Anda termasuk ke dalam kategori obesitas, konsultasikan dengan dokter atau ahli gizi untuk nasihat lebih lanjut.";
    }
    bmiSuggestionText.textContent = suggestion;

    resultDiv.style.display = "block";
  });

  // Event listener untuk tombol Reset
  const resetButton = form.querySelector('button[type="reset"]');
  resetButton.addEventListener("click", function () {
    form.reset();
    bmiValueText.textContent = "";
    bmiSuggestionText.textContent = "";
    resultDiv.style.display = "none";
  });
});
