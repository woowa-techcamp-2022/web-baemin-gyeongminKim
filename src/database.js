import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const fakeUsers = [
  {
    nickname: "경민",
    email: "a9120a@gmail.com",
    password: "0110",
    birthday: "19970110",
    mobile: "01091204649",
  },
  {
    nickname: "우캠",
    email: "woowa@gmail.com",
    password: "0110",
    birthday: "19970110",
    mobile: "01091204649",
  },
];

db.data ||= { account: fakeUsers };

export default db;
