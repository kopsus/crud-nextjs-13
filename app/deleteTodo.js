"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function DeleteTodo({ username, id }) {
  const [modal, setModal] = useState(false)

  const router = useRouter()

  async function handleDelete() {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })

    router.refresh()
    setModal(false)
  }

  const handleChange = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleChange}
      >
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3>Are You Sure Delete data {username}?</h3>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
