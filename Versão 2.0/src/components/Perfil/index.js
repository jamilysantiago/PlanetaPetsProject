import "./perfil.css";
import profileImg from '../../assets/img/P1.png'
import profileFundo from '../../assets/img/heroimg.jpg'

export default function Perfil() {

  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={profileFundo}
              alt=""
            />
            <img
              className="profileUserImg"
              src={profileImg}
              alt=""
            />
          </div>
          <div className="profileInfo">

            <h4 className="profileInfoName">
              {localStorage.getItem('users_bd')}
            </h4>
            <span className="profileInfoDesc"></span>
          </div>
        </div>
        <div className="profileRightBottom">
        </div>
      </div>
    </div>
  );
}