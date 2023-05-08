"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function UpdateTodo({ id, username, password }) {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState(username)
  const [pw, setPw] = useState(password)

  const router = useRouter()

  async function handleUpdate(e) {
    e.preventDefault()

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: pw,
      }),
    })

    router.refresh()
    setModal(false)
    setName("")
    setPw("")
  }

  const handleChange = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold">Ubah data ke {id}</h3>
          <form>
            <div className="form-control my-3">
              <label className="label">username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">password</label>
              <input
                type="text"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="input w-full input-bordered"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
