import { HashRouter } from "react-router-dom"
import AuthRouter from "@/routers/utils/authRouter"
import Router from "@/routers/index"

const App = () => (
  <HashRouter>
    <AuthRouter>
      <Router />
    </AuthRouter>
  </HashRouter>
)

export default App
