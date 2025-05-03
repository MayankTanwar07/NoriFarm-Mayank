document.getElementById("submit-btn").addEventListener("click", submitHandler);

async function submitHandler() {
  const input = document.getElementById("inp-val").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";

  if (!input) {
    resultDiv.innerHTML = "Please enter a crop name or ID.";
    return;
  }

  try {
    const response = await fetch(
      `/api/match?crop=${encodeURIComponent(input)}`
    );
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
    } else {
      const resultHTML = `
          <h3>${data.matchedProduct.title}</h3>
          <p>Price: ${data.matchedProduct.price}</p>
          <img src="${data.matchedProduct.image}" alt="${data.matchedProduct.title}" width="200"/>
          <p><a href="${data.matchedProduct.buyLink}" target="_blank">Buy Now</a></p>
        `;
      showResultModal(resultHTML);
      resultDiv.innerHTML = ""; // clear old result
    }
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Something went wrong. Please try again later.</p>`;
    console.error(error);
  }
}

function showResultModal(htmlContent) {
  document.getElementById("resultText").innerHTML = htmlContent;
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Optional: Close modal when clicking outside the modal box
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
document.getElementById("submit-btn").addEventListener("click", () => {
  const crop = document.getElementById("inp-val").value;
  const resultText = document.getElementById("resultText");

  if (crop) {
    resultText.innerHTML = `🌿 You selected: <strong>${crop}</strong>`;
    document.getElementById("modal").style.display = "flex";
  } else {
    resultText.innerHTML = `<span style="color:#ff6b6b;">Please select a crop first.</span>`;
    document.getElementById("modal").style.display = "flex";
  }
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.style.display = "none";
    });
  });
});
