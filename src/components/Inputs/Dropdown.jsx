import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Dropdown = ({ options, placeholder, label, value, onChange, errors }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const openMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  

  const handleValue = (item) => {
    setSelectedValue(item);
    onChange(item);
  };

  return (
    <div className={`dropdown ${errors ? "invalid" : ""}`} tabIndex={-1}   onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMenuOpen(false);
              }
            }}>
      <label htmlFor="">{label}</label>
      <div className=" dd" onClick={openMenuHandler}>
        {selectedValue ? (
          <input
            type="text"
            className="dd__selected-value"
            readOnly
            value={selectedValue || ""}
          
          />
        ) : (
          <input
            type="text"
            className="dd__selected-value"
            placeholder={placeholder}
            value={selectedValue || ""}
            readOnly
          />
        )}
        {menuOpen && (
          <div className="dd__options">
            {options?.length > 0 ? (
              <ul className="dd__menu">
                {options.map((item) => (
                  <li
                    key={item}
                    className="dd__menu-item"
                    onClick={(e) => handleValue(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="dd__no-data">No data to show</div>
            )}
          </div>
        )}
        <div className="dd__arrow">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>

      </div>
      {errors && <div className="input-error">{errors}</div>}
    </div>
  );
};

export default Dropdown;
