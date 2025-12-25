### `README.md`

```markdown
# ⚡ NEURAL VAULT // SECURE NOTE ARCHIVE

A high-performance, cyberpunk-themed note-taking application built with the **MERN** stack. Features a neon-on-black aesthetic, real-time bulk operations, and crypt-style UI feedback.

https://github.com/Sandesh-k18/kaotes/blob/main/docs/navbar.png
https://github.com/Sandesh-k18/kaotes/blob/main/docs/header.png

## 🛠 SYSTEM SPECIFICATIONS

* **Frontend:** React 19 + Tailwind CSS + Lucide Icons
* **Backend:** Node.js + Express
* **Database:** MongoDB (via Mongoose)
* **Security:** JWT Authentication + Rate Limiting Protocols
* **UI/UX:** Framer Motion (animations) + React Hot Toast (notifications)

---

## 🛰 CORE PROTOCOLS

### 🟢 SECURE WORKSPACE
Custom-designed dashboard with neon-glow borders and glassmorphism cards. Sort notes by `NEWEST` or `OLDEST` timestamps with optimized `useMemo` hooks.



### 🔴 SYSTEM PURGE (BULK DELETE)
Execute multi-node deletion with an integrated custom confirmation protocol. Eliminates browser-blocking `window.confirm` for a seamless neural interface experience.



### 🛡 FIREWALL & PROTECTION
Built-in rate limiting to prevent brute-force entry. The UI shifts from **Neon Green** to **Hazard Red** when security protocols are triggered.



### 🧩 ZERO-NODE STANDBY
Themed empty states featuring custom illustrations and terminal-style prompts to initialize your first data log.



---

## ⚙️ INITIALIZATION

### 1. Clone the Node
```bash
git clone https://github.com/Sandesh-k18/kaotes
cd kaotes

```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_top_secret_key

```

### 3. Install Dependencies

```bash
# Install Server dependencies
npm install

# Install Client dependencies
cd client
npm install

```

### 4. Boot System

```bash
# Run from root (using concurrently or separately)
npm run dev

```

---

## 📡 API ENDPOINTS

| METHOD | ENDPOINT | FUNCTION |
| --- | --- | --- |
| `GET` | `/api/notes` | Fetch all user-owned nodes |
| `POST` | `/api/notes` | Initialize new data entry |
| `DELETE` | `/api/notes/:id` | Purge specific node |
| `POST` | `/api/notes/bulk-delete` | Execute mass system purge |

---

## 🎨 THEME SPECIFICATIONS

* **Background:** `#000000` (Void Black)
* **Primary Accent:** `#00FF9D` (Neural Green)
* **Alert Accent:** `#EF4444` (Hazard Red)
* **Typography:** System Mono / Inter

---

> **Disclaimer:** This archive is for authorized personnel only. Neural paths are monitored for security.

```

---

https://github.com/Sandesh-k18/kaotes/blob/main/docs/NoteCard.png
https://github.com/Sandesh-k18/kaotes/blob/main/docs/selectedNoteCard.png
https://github.com/Sandesh-k18/kaotes/blob/main/docs/UserCard.png


```
