import { UserList } from "./usersList";
import { RegisterForm } from "./registerForm";
import "./css/main.css";

function App() {
  return (
    <>
      <main className="main">
          <RegisterForm />
          <UserList/>
      </main>
    </>
  )
}

export default App
