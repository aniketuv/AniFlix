:root {
    --bg: #0f0f0f;
    --card: #1e1e1e;
    --primary: #E50914; /* Netflix Red */
    --text: #fff;
    --header-h: 60px;
}

* { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }

body {
    background-color: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0; padding-top: var(--header-h);
    overflow-x: hidden; user-select: none;
}

/* Header */
header {
    position: fixed; top: 0; left: 0; right: 0;
    height: var(--header-h);
    background: rgba(15, 15, 15, 0.95);
    backdrop-filter: blur(10px);
    padding: 0 4%; z-index: 1000;
    border-bottom: 1px solid #333;
    display: flex; align-items: center; justify-content: space-between;
}

.logo { 
    color: var(--primary); 
    font-size: 22px; 
    font-weight: 900; 
    letter-spacing: 1px; 
    text-transform: uppercase;
}

.nav-actions button {
    background: none; border: none; color: #ccc; font-size: 18px; 
    margin-left: 15px; cursor: pointer; transition: color 0.2s;
}
.nav-actions button:hover { color: white; }

/* Controls */
.controls {
    position: sticky; top: var(--header-h); z-index: 900;
    background: var(--bg); padding: 15px 4%;
    border-bottom: 1px solid #222;
    display: flex; flex-wrap: wrap; gap: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.control-group { flex: 1; min-width: 140px; }
.label { font-size: 11px; color: #888; margin-bottom: 4px; display: block; font-weight: 600; text-transform: uppercase; }

select, input, button {
    width: 100%; background: #222; border: 1px solid #333; color: white;
    padding: 10px 12px; border-radius: 6px; outline: none; font-size: 14px; height: 42px;
}

.btn-go {
    background: var(--primary); border: none; font-weight: bold; cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
}

/* Grid */
.grid {
    padding: 20px 4% 80px 4%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px; min-height: 60vh;
}

.card {
    background: var(--card); border-radius: 8px; overflow: hidden;
    aspect-ratio: 16/9; cursor: pointer; position: relative;
    animation: fadeIn 0.4s ease; border: 1px solid transparent;
}
.card:hover { border-color: #444; }

.card img { width: 100%; height: 100%; object-fit: contain; background: #000; }
.card-meta {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.95));
    padding: 8px 10px;
}
.card-title { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* Status */
.status-area { grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #666; display: flex; flex-direction: column; align-items: center; gap: 15px; }
.spinner { width: 30px; height: 30px; border: 3px solid #333; border-top: 3px solid var(--primary); border-radius: 50%; animation: spin 1s infinite linear; }
@keyframes spin { 100% { transform: rotate(360deg); } }

/* Player Modal */
#player { position: fixed; inset: 0; background: black; z-index: 2000; display: none; flex-direction: column; }
.p-head { padding: 15px; background: rgba(0,0,0,0.8); display: flex; justify-content: space-between; align-items: center; }
.close-btn { background: #333; border: none; color: white; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }
video { width: 100%; height: 100%; flex: 1; background: black; }

/* About Modal */
.about-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 3000;
    display: none; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(5px);
}
.about-card {
    background: #1a1a1a; max-width: 400px; width: 100%; border-radius: 12px;
    padding: 30px; text-align: center; border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.about-title { font-size: 24px; font-weight: 900; color: var(--primary); margin-bottom: 10px; letter-spacing: 1px; }
.about-text { color: #ccc; font-size: 14px; line-height: 1.6; margin-bottom: 25px; }
.social-links { display: flex; gap: 15px; justify-content: center; margin-bottom: 25px; }
.social-btn {
    width: 45px; height: 45px; border-radius: 50%; background: #333; color: white;
    display: flex; align-items: center; justify-content: center; font-size: 20px;
    text-decoration: none; transition: 0.2s;
}
.social-btn:hover { background: var(--primary); transform: translateY(-3px); }
.credits { font-size: 12px; color: #666; border-top: 1px solid #333; padding-top: 15px; }
.credits a { color: #888; text-decoration: none; }
.btn-close-modal { margin-top:20px; background:#333; border:none; color:white; padding:8px 20px; border-radius:4px; cursor:pointer; width: auto; }

#toast {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: #333; padding: 12px 25px; border-radius: 50px;
    font-size: 13px; display: none; z-index: 4000;
}
