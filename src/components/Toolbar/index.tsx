import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPrint,
  faUndo,
  faRedo,
  faTable,
  faFilter,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faHighlighter,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

interface ToolbarComponentProps {
  cellFormating: (classNameToAppend: string) => void;
  setIsFilterEnable: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterEnable: boolean;
}
const Toolbar = (props: ToolbarComponentProps) => {
  const { cellFormating, setIsFilterEnable, isFilterEnable } = props;
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const toggleColorDropdown = () => {
    setColorDropdownOpen(!colorDropdownOpen);
  };
  const colors = ["!bg-red-500", "!bg-green-500", "!bg-blue-500"];
  const handleColorClick = (color: string) => {
    console.log(color);
    cellFormating(`${color}`);
    setColorDropdownOpen(false);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center p-2 border-b bg-white">
        <FontAwesomeIcon icon={faSave} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faPrint} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faUndo} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faRedo} className="mx-2 text-gray-600" />
        <span className="border-l h-6 mx-2"></span>
        <FontAwesomeIcon icon={faTable} className="mx-2 text-gray-600" />
        <FontAwesomeIcon
          icon={faFilter}
          className="mx-2 text-gray-600"
          onClick={() => setIsFilterEnable(!isFilterEnable)}
        />
        <span className="border-l h-6 mx-2"></span>
        <select className="mx-2 text-gray-600">
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <select className="mx-2 text-gray-600">
          <option>10</option>
          <option>12</option>
          <option>14</option>
        </select>
        <span className="border-l h-6 mx-2"></span>
        <FontAwesomeIcon
          icon={faBold}
          className="mx-2 text-gray-600"
          onClick={() => cellFormating("font-bold")}
        />
        <FontAwesomeIcon
          icon={faItalic}
          className="mx-2 text-gray-600"
          onClick={() => cellFormating("italic")}
        />
        <FontAwesomeIcon
          icon={faUnderline}
          className="mx-2 text-gray-600"
          onClick={() => cellFormating("underline")}
        />
        <FontAwesomeIcon
          icon={faStrikethrough}
          className="mx-2 text-gray-600"
        />
        <span className="border-l h-6 mx-2"></span>
        <FontAwesomeIcon icon={faAlignLeft} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faAlignCenter} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faAlignRight} className="mx-2 text-gray-600" />
        <FontAwesomeIcon icon={faAlignJustify} className="mx-2 text-gray-600" />
        <span className="border-l h-6 mx-2"></span>
        <FontAwesomeIcon icon={faHighlighter} className="mx-2 text-gray-600" />
        <div className="relative">
          <FontAwesomeIcon
            icon={faPalette}
            className="mx-2 text-gray-600 cursor-pointer"
            onClick={toggleColorDropdown}
          />
          {colorDropdownOpen && (
            <div className="absolute z-50 top-full left-0 mt-2 w-24 bg-white border rounded shadow-lg z-10">
              <div className="flex justify-around p-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer ${color}`}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
