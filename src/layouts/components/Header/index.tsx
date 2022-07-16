import { Layout } from "antd"
import AvatarIcon from "./components/AvatarIcon"
import CollapseIcon from "./components/CollapseIcon"
import BreadcrumbNav from "./components/BreadcrumbNav"
import Theme from "./components/Theme"
import Fullscreen from "./components/Fullscreen"
import "./index.less"

const LayoutHeader = () => {
  const { Header } = Layout

  return (
    <Header>
      <div className="header-lf">
        <CollapseIcon />
        <BreadcrumbNav />
      </div>
      <div className="header-ri">
        <Theme />
        <Fullscreen />
        <span className="username">Hooks</span>
        <AvatarIcon />
      </div>
    </Header>
  )
}

export default LayoutHeader
