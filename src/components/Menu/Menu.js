import React, { useState } from "react";
import "./Menu.scss";
import { Disciplin } from "../Disciplin/Disciplin";
import { Link } from "react-router-dom";
import { replaceSpace } from "../../utils/functions";

const Menu = ({ disciplins, setDisciplin }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <section className="menu">
      <div className="menu__dropdown">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="menu__dropdown_btn"
        >
          Дисциплины
        </button>
        <table className="menu__table">
          <div>
            {disciplins.map((disciplin) => (
              <Link
                to={`MainPageWorkPreview/${replaceSpace(
                  disciplin.subject_title
                )}`}
              >
                <Disciplin
                  key={`disciplin-${disciplin.id}`}
                  disciplin={disciplin}
                  setDisciplin={setDisciplin}
                />
              </Link>
            ))}
          </div>
          <div className="more-disciplin">
            {dropdown &&
              disciplins.map((disciplin) => (
                <Link
                  to={`MainPageWorkPreview/${replaceSpace(
                    disciplin.subject_title
                  )}`}
                >
                  <Disciplin
                    key={`disciplin-${disciplin.id}`}
                    disciplin={disciplin}
                    setDisciplin={setDisciplin}
                  ></Disciplin>
                </Link>
              ))}
          </div>
        </table>
      </div>
    </section>
  );
};
export default Menu;
