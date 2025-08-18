import "./Drawer.css";
import { Link } from "react-router-dom";

const Drawer = ({ headerHeight, onOverlayClicked }) => {
  const headerStyles = {
    height: `calc(100% - ${headerHeight}px)`,
  };

  return (
    <>
      <div className={`drawer open`} style={headerStyles}>
        <div>
          <div className="drawer-content">
            <Link to={"/posts"} onClick={onOverlayClicked}>
              Posts
            </Link>
            <Link to={"#"} onClick={onOverlayClicked}>
              Sector
            </Link>
            <Link to={"#"} onClick={onOverlayClicked}>
              Insights
            </Link>
            <Link to={"spotlight"} onClick={onOverlayClicked}>
              Spotlight
            </Link>
            <Link to={"#"} onClick={onOverlayClicked}>
              Product
            </Link>
            <Link to={"/events"} onClick={onOverlayClicked}>
              Events
            </Link>
            <Link to={"/equipment"} onClick={onOverlayClicked}>
              Equipment
            </Link>
            <Link to={"/sustainability"} onClick={onOverlayClicked}>
              Sustainability
            </Link>
            <Link to={"/digitalization"} onClick={onOverlayClicked}>
              Digitalization
            </Link>
          </div>
        </div>
        <div className="drawer-overlay" onClick={onOverlayClicked}></div>
      </div>
    </>
  );
};

export default Drawer;
