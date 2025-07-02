const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

function parseDate(dateString) {
  if (!dateString) return admin.firestore.Timestamp.now();
  const d = new Date(dateString);
  if (isNaN(d.getTime())) {
    console.warn(`⚠️ Invalid date: ${dateString} → using now`);
    return admin.firestore.Timestamp.now();
  }
  return admin.firestore.Timestamp.fromDate(d);
}

const quotes = JSON.parse(fs.readFileSync("quotes.json", "utf8"));

async function importQuotes() {
  for (const quote of quotes) {
    const { title, message, date } = quote;

    await db.collection("Quote").add({
      title,
      message,
      date: parseDate(date),
    });

    console.log(`✅ Imported: ${title}`);
  }
  console.log("🚀 All quotes imported with Firestore auto-ids.");
  process.exit();
}

importQuotes().catch(console.error);