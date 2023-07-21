import Content from "./Content"
import React from 'react'
import '../styles/main-style.css'
import '../styles/nav-style.css'
import datas from '../assets/Data-text.jsx'


// console.log(datas.length);


    for (let i = 0; i < datas.length; i++) {
        console.log(datas[i].title);
    }








export default function Main() {

    const [navItem, setNavItem] = React.useState(
        {
            itemValue: '',
            isActiv: true
        }
    )

        let toggleActivItem = navItem.isActiv ? 'nav-item active' : 'nav-item'

    // console.log(navItem);

    function handleClick(e) {
        // console.log(e.target.id);
        setNavItem(prevItem => ({
            ...prevItem,
            itemValue: e.target.innerText,
            isActiv: !prevItem.isActiv
        })
        
        )
    }

    return (
        <main>
            <nav>
                <div className='nav-container' id='nav-container'>
                    <ul id='navlist'>
                        <li
                            className='nav-item apropos active'
                            id='apropos item'
                            onClick={handleClick}>
                            <h4>A PROPOS</h4>
                        </li>
                        <li
                            className={toggleActivItem}
                            id='cv item'
                            onClick={handleClick}>
                            <h4>CV</h4>
                        </li>
                        <li
                            className={toggleActivItem}
                            id='competences item'
                            onClick={handleClick}>
                            <h4>COMPETENCES</h4>
                        </li>
                        <li
                            className='nav-item portfolio'
                            id='portfolio item'
                            onClick={handleClick}>
                            <h4>PORTFOLIO</h4>
                        </li>
                        <li
                            className='nav-item contact'
                            id='contact item'
                            onClick={handleClick}>
                            <h4>CONTACT</h4>
                        </li>
                    </ul>
                </div>
            </nav>  
            <Content
                contentTitle={navItem.itemValue}
            />
        </main>
    )
}