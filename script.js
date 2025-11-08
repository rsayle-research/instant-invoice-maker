document.getElementById("generateBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const fromName = document.getElementById("fromName").value || "Your Name";
  const clientName = document.getElementById("clientName").value || "Client";
  const description = document.getElementById("description").value || "Service description";
  const amount = document.getElementById("amount").value || "0.00";
  const date = new Date().toLocaleDateString();

  // Simple PDF layout
  doc.setFontSize(20);
  doc.text("INVOICE", 20, 20);

  doc.setFontSize(12);
  doc.text(`Date: ${date}`, 150, 20);
  doc.text(`From: ${fromName}`, 20, 40);
  doc.text(`To: ${clientName}`, 20, 50);

  doc.text("Description:", 20, 70);
  doc.text(description, 20, 80, { maxWidth: 170 });

  doc.text(`Amount Due: $${amount}`, 20, 110);

  doc.setFontSize(10);
  doc.text("Thank you for your business!", 20, 130);

  doc.save(`Invoice-${clientName.replace(/\s+/g, "_")}.pdf`);
});
