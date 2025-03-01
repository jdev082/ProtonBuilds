import React, { useState, useEffect } from 'react';
import "./Editor.scss"
import Preview from '../../components/Preview';
import Rightbar from '../../components/Inspector';
import Sidebar from '../../components/Hierarchy';
import Topbar from '../../components/Topbar';
import AddElementDialog from '../../components/AddElementDialog';

export default function App(props) {
    const [elements, setElements] = useState([]);
    const [activeElement, setActiveElement] = useState(null);
    const [updatedState, updateState] = useState(1);
    const [darkMode, setDarkMode] = useState(0);
    const [showElementDialog, setElementDialog] = useState(false);

    // Dark mode code

    console.log(activeElement)

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(1);
        }
    }, [])

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        newColorScheme == "dark" ? setDarkMode(1) : setDarkMode(0);
    });

    return (
        <div className={`app ${darkMode == 1 ? "dark" : "light"}`}>
            <Topbar darkMode={darkMode} elements={elements} setElements={setElements} showElementDialog={showElementDialog} setElementDialog={setElementDialog} />
            <AddElementDialog show={showElementDialog} setElements={setElements} elements={elements} setElementDialog={setElementDialog} setActiveElement={setActiveElement} />
            <Sidebar darkMode={darkMode} elements={elements} setActiveElement={setActiveElement} />
            <Rightbar darkMode={darkMode} activeElement={activeElement} updateState={updateState} updatedState={updatedState} />
            <Preview darkMode={darkMode} elements={elements} />
        </div>
    )
}