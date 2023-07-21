import '../styles/content-style.css'
import textData from '../assets/Data-text.jsx'
console.log(textData[0].content);


export default function Content(props) {
    return (
        <div className='main-container'>
            <div className='section-title' id='section-title'>
                <h5 className='side-title' id='side-title'>{props.contentTitle}</h5>
            </div>
            <div className='content-container'>
                <div className='section-content'>
                    {textData[0].content}
                </div>
            </div>
        </div>
    )
}