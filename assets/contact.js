const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#contact-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  if (String(data.get("website") ?? "").trim()) {
    statusMessage.textContent = "Vielen Dank. Ihre Nachricht wurde vorbereitet.";
    return;
  }

  const name = String(data.get("name") ?? "").trim().slice(0, 120);
  const email = String(data.get("email") ?? "").trim().slice(0, 254);
  const topic = String(data.get("topic") ?? "Allgemeine Anfrage").trim().slice(0, 100);
  const message = String(data.get("message") ?? "").trim().slice(0, 5000);
  const subject = `[Weltbeobachter] ${topic}`;
  const body = [
    `Name: ${name}`,
    `Antwortadresse: ${email}`,
    "",
    message,
    "",
    `Betroffene Seite: ${window.location.origin}`
  ].join("\n");

  statusMessage.textContent =
    "Ihr E-Mail-Programm wird geöffnet. Die Nachricht wird erst versendet, wenn Sie sie dort bestätigen.";
  window.location.href = `mailto:weltbeobacter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
