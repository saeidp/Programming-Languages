import { memo, useState, useTransition } from 'react'
import ReactDOM from 'react-dom/client'
import { sleep } from "./utils"
import products from "./data"

// The useTransition hook in React is used to handle state transitions that might take time,
// such as filtering a large dataset or updating the UI with non-critical updates.
// It allows you to defer rendering updates and show a fallback state (like a loading indicator)
// while the transition is in progress

function App() {
  const [tab, setTab] = useState("home")
  const [isPending, startTransition] = useTransition()
  function switchTab(tab) {
    startTransition(() => {
      setTab(tab)
    })
  }

  function setStyles(thisTab) {
    return {
      backgroundColor: tab === thisTab ? "#262626" : "white",
      color: tab === thisTab ? "white" : "black"
    }
  }

  return (
    <main>
      <nav>
        <button
          onClick={() => switchTab("home")}
          style={setStyles("home")}
        >Home</button>
        <button
          onClick={() => switchTab("products")}
          style={setStyles("products")}
        >Products</button>
        <button
          onClick={() => switchTab("about")}
          style={setStyles("about")}
        >About</button>
      </nav>
      <div>
        {isPending && <p>Loading...</p>}
        {!isPending && tab === "home" && <h1>Home page</h1>}
        {!isPending && tab === "products" && <Products />}
        {!isPending && tab === "about" && <h1>About page</h1>}
      </div>
    </main>
  )
}

// Wrapping this in memo so the list only renders once
// The actual slowdown happens in the SlowProduct component
const Products = memo(function () {
  let productsList = products.map((product, i) => (
    <SlowProduct key={product.id} product={product} />
  ))

  return (
    <>
      <h1>Products page</h1>
      <ul>{productsList}</ul>
    </>
  )
});

function SlowProduct({ product }) {
  sleep(1)
  return <li>Product {product.name}</li>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)