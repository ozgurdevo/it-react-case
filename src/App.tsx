import logo from "./assets/izenerji-logo.svg";
import searchBarIcon from "./assets/search-bar-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";
import youtubeIcon from "./assets/youtube-icon.svg";
import notificationIcoon from "./assets/notification-icon.svg";
import menuIcon from "./assets/menu-icon.svg";

function App() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={logo} />
      </div>

      <div className="header__right">
        <div className="search-bar">
          <div className="search-bar-text">
            Arama Yap
            {/* <input type="text" value="Arama Yap" /> TODO */}
          </div>
          <img className="search-bar-icon" src={searchBarIcon} />
        </div>

        <button className="sign-up-button">Uye Ol</button>

        <div className="social-icons">
          <img src={facebookIcon} alt="facebook-icon" />
          <img src={instagramIcon} alt="instagram-icon" />
          <img src={twitterIcon} alt="twitter-icon" />
          <img src={linkedinIcon} alt="linkedin-icon" />
          <img src={youtubeIcon} alt="youtube-icon" />
        </div>

        <div className="notification-icon">
          <div className="icon-badge">6</div>
          <img
            src={notificationIcoon}
            alt="notification-icon"
            className="icon-img"
          />
        </div>

        <img className="menu-icon" src={menuIcon} alt="menu-icon" />
      </div>
    </div>
  );
}

export default App;
