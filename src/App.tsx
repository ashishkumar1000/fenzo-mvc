import { useState } from 'react'
import './App.css'

const features = [
  { id: 1, title: 'Fast', detail: 'Powered by Vite for instant HMR.' },
  { id: 2, title: 'Typed', detail: 'Built with TypeScript out of the box.' },
  { id: 3, title: 'Modern', detail: 'React 19 with the new JSX transform.' },
]

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <main className="page">
      <header className="hero">
        <h1>Fenzo MVC</h1>
        <p className="subtitle">A tiny React + Vite + TypeScript starter page.</p>
      </header>

      <section className="card" aria-labelledby="counter-heading">
        <h2 id="counter-heading">Try it out</h2>
        <div className="counter">
          <button
            type="button"
            className="btn"
            onClick={() => setCount((c) => c - 1)}
            aria-label="Decrement"
          >
            −
          </button>
          <span className="count" aria-live="polite">
            {count}
          </span>
          <button
            type="button"
            className="btn primary"
            onClick={() => setCount((c) => c + 1)}
            aria-label="Increment"
          >
            +
          </button>
        </div>
        <p className="hint">You clicked {count} time{count === 1 ? '' : 's'}.</p>
      </section>

      <section className="card" aria-labelledby="greet-heading">
        <h2 id="greet-heading">Say hello</h2>
        <label className="field">
          <span>Your name</span>
          <input
            type="text"
            value={name}
            placeholder="Ada Lovelace"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p className="hint">
          {name.trim()
            ? `Hello, ${name.trim()}!`
            : 'Type something above to be greeted.'}
        </p>
      </section>

      <section className="card" aria-labelledby="features-heading">
        <h2 id="features-heading">What you get</h2>
        <ul className="features">
          {features.map((f) => (
            <li key={f.id}>
              <strong>{f.title}</strong>
              <span>{f.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="foot">
        <small>Edit <code>src/App.tsx</code> and save to see changes live.</small>
      </footer>
    </main>
  )
}

export default App
