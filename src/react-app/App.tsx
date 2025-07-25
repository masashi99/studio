// src/App.tsx

import { useState } from "react";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./global.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>
			<div className="bg-red-500">
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://hono.dev/" target="_blank" rel="noopener">
					<img src={honoLogo} className="logo cloudflare" alt="Hono logo" />
				</a>
				<a
					href="https://workers.cloudflare.com/"
					target="_blank"
					rel="noopener"
				>
					<img
						src={cloudflareLogo}
						className="logo cloudflare"
						alt="Cloudflare logo"
					/>
				</a>
			</div>
			<h1>Vite + React + Hono + Cloudflare</h1>
			<div className="card">
				<button
					type="button"
					onClick={() => setCount((count) => count + 1)}
					aria-label="increment"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="card">
				<button
					type="button"
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
				<p>
					Edit <code>worker/index.ts</code> to change the name
				</p>
			</div>
			<p className="read-the-docs">Click on the logos to learn more</p>
		</>
	);
}

export default App;
