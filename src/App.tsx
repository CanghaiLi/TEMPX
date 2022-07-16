import { connect } from "react-redux"
import { HashRouter } from "react-router-dom"
import AuthRouter from "@/routers/utils/authRouter"
import Router from "@/routers/index"

const App = () => {
  return (
    <HashRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </HashRouter>
  )
}

const mapStateToProps = (state: any) => state.global
export default connect(mapStateToProps)(App)
