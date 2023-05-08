"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function AddTodo() {
  const [name, setName] = useState("")
  const [pw, setPw] = useState("")

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: pw,
      }),
    })

    router.refresh()
    setName("")
    setPw("")
  }

  return (
    <div className="modal-box mx-auto border">
      <h3 className="font-bold">user login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control my-3">
          <label className="label">username</label>
          <input
            type="text"
            value={name}
            className="input w-full input-bordered"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">password</label>
          <input
            type="password"
            value={pw}
            className="input w-full input-bordered"
            onChange={(e) => setPw(e.target.value)}
            required
          />
        </div>
        <div className="modal-action">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}
