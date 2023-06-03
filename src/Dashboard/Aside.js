import {
  AiFillSetting,
  AiOutlineInsertRowBelow,
  AiOutlineRise,
} from "react-icons/ai";
export default function Aside() {
  return (
    <>
      <div className="contaner-aside">
        <img
          className="aside-image"
          src="https://zagnow.in/wp-content/uploads/2023/02/v3_ZAG_icon_darker_BG_cropped.png"
          alt=""
        />
        <div className="aside-buttons">
          <button className="aside-button">
            <AiOutlineRise className="aside-icon" />
            Reports
          </button>
          <button className="aside-button aside-button-btn">
            {" "}
            <AiOutlineInsertRowBelow className="aside-icon" />
            Workspaces
          </button>
          <button className="aside-button">
            <AiFillSetting className="aside-icon" />
            Settings
          </button>
        </div>
      </div>
    </>
  );
}
