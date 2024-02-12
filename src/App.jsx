import "./App.css";

function App() {
  const handleUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user added successfully");
          form.reset();
          console.log(data);
        }
      });
  };
  return (
    <div>
      <h1>Simple CRUD Operation</h1>
      <form onSubmit={handleUser}>
        <input type='text' name='name' id='' placeholder='Name' />
        <br />
        <input type='email' name='email' id='' placeholder='Email' />
        <br />
        <input type='submit' value='Add User' />
      </form>
    </div>
  );
}

export default App;
