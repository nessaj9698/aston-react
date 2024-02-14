import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { Provider } from "react-redux"

import { RouterProvider } from "react-router-dom"

import App from "./App"
import { store } from "./store/store"

import { router } from "./routes/routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>,
)
