import AddTodo from "./addTodo"
import DeleteTodo from "./deleteTodo"
import UpdateTodo from "./updateTodo"

async function getData() {
  const res = await fetch("http://localhost:5000/users", {
    cache: "no-store",
  })
  return res.json()
}

export default async function Home() {
  const datas = await getData()

  return (
    <>
      <AddTodo />
      <div className="overflow-x-auto my-10">
        <h2 className="font-bold text-center my-5">List User Login</h2>
        <table className="table table-zebra w-[75%] m-auto rounded-[10px] shadow-md">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {datas.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                  <td className="flex gap-5">
                    <div>
                      <UpdateTodo {...data} />
                    </div>
                    <div>
                      <DeleteTodo {...data} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
