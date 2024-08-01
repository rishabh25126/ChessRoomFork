import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

function MenuBar({ exportBtnClicked, setExportBtnClicked }) {
    const [sheetName, setSheetName] = React.useState('New Sheet');
    const [isEditing, setIsEditing] = React.useState(false);
    const [newSheetName, setNewSheetName] = React.useState(sheetName);
    const [dropdownOpen, setDropdownOpen] = React.useState(null);

    const dropdownRef = useRef(null); // Ref for the dropdown menu

    const handleSheetNameChange = () => {
        setIsEditing(true);
    };

    const handleSheetNameSave = () => {
        setSheetName(newSheetName);
        setIsEditing(false);
    };

    const handleSheetNameCancel = () => {
        setNewSheetName(sheetName); // Reset input field to current sheetName
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setNewSheetName(event.target.value);
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    const menuItems = {
        file: ['New', 'Open', 'Save'],
        automation: ['Run', 'Schedule', 'Logs'],
        forms: ['Create Form', 'Edit Form', 'Delete Form'],
        connections: ['Connect', 'Disconnect', 'Manage'],
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative bg-white p-2 w-full flex justify-between items-center shadow-md">
            <div className="flex space-x-4" ref={dropdownRef}>
                {Object.keys(menuItems).map((menu) => (
                    <div key={menu} className="relative">
                        <button
                            className="flex items-center space-x-2 hover:text-teal-500 cursor-pointer"
                            onClick={() => toggleDropdown(menu)}
                        >
                            <span className="capitalize">{menu}</span>
                        </button>
                        {dropdownOpen === menu && (
                            <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                                <ul>
                                    {menuItems[menu].map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setDropdownOpen(null)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex mr-40 items-center space-x-4 max-w-3xl">
                <div className="flex items-center space-x-2 w-full">
                    <FontAwesomeIcon icon={faFileCirclePlus} className="text-xl cursor-pointer hover:text-teal-500" onClick={handleSheetNameChange} />
                    <div className="flex items-center space-x-2 ml-2 w-full">
                        {isEditing ? (
                            <div className="flex items-center space-x-2 w-full">
                                <input
                                    type="text"
                                    value={newSheetName}
                                    onChange={handleInputChange}
                                    className="border p-1 rounded w-full"
                                />
                                <button onClick={handleSheetNameSave} className="text-green-500">Save</button>
                                <button onClick={handleSheetNameCancel} className="text-red-500">Cancel</button>
                            </div>
                        ) : (
                            <span className="w-full">{sheetName}</span>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={() => setExportBtnClicked(!exportBtnClicked)}
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
                Export
            </button>
        </div>
    );
}

export default MenuBar;
