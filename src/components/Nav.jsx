// import React from 'react'
// import '../styles/nav-style.css'

// export default function Nav() {

//     const [navItem, setNavItem] = React.useState(
//         {
//             itemValue: ''
//         }
//     )

//     console.log(navItem);

//     function handleClick(e) {
//         setNavItem(prevItem => {
//             return {
//                 ...prevItem,
//                 itemValue: e.target.innerText
//             }
//         })
//     }

//     return (
//         <nav>
//             <div className='nav-container' id='nav-container'>
//                 <ul id='navlist'>
//                     <li
//                         className='nav-item apropos active'
//                         id='apropos item'
//                         onClick={handleClick}>
//                         <h4>A PROPOS</h4>
//                     </li>
//                     <li
//                         className='nav-item cv'
//                         id='cv item'
//                         onClick={handleClick}>
//                         <h4>CV</h4>
//                     </li>
//                     <li
//                         className='nav-item competences'
//                         id='competences item'
//                         onClick={handleClick}>
//                         <h4>COMPETENCES</h4>
//                     </li>
//                     <li
//                         className='nav-item portfolio'
//                         id='portfolio item'
//                         onClick={handleClick}>
//                         <h4>PORTFOLIO</h4>
//                     </li>
//                     <li
//                         className='nav-item contact'
//                         id='contact item'
//                         onClick={handleClick}>
//                         <h4>CONTACT</h4>
//                     </li>
//                 </ul>
//             </div>
//         </nav>  
//     )
// }