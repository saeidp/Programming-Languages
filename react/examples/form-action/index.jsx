// a sample code from Scrimba tutorial
import ReactDOM from "react-dom/client"
import { useState } from "react"
import { updateNameInDB } from "./api"

function App() {
  const [name, setName] = useState(
    () => JSON.parse(localStorage.getItem("name")) || "Anonymous user"
  )
  
  // In your React code, the action={formAction} does not send the data to a server URL. Instead:
  // It assigns a callback function (formAction) to handle the form submission.
  // React intercepts the form submission event, preventing the default browser behavior of navigating 
  // to a new page.
  // The formAction function is executed when the user submits the form.
  
  async function formAction(formData) {
    try {
      const newName = await updateNameInDB(formData.get("name"))
      setName(newName)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <p className="username">
        Current user: <span>{name}</span>
      </p>
      <form action={formAction}>
        <input
          type="text"
          name="name"
          required
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)