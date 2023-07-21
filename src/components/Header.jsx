import LinkedinLogo from '../assets/icons/icons8-linkedin-bw-96.png'
import GithubLogo from '../assets/icons/icons8-github-96.png'
import InstagramLogo from '../assets/icons/icons8-instagram-96.png'
import '../styles/header-style.css'

export default function Header() {
    return (
        <header>
            <div className='container' id='header-container'>
                <div className='profile-pic'>Profile</div>
                <div className='title'>
                    <h2 className='first-name'>MATHIEU</h2>
                    <h1>HUGUET</h1>
                    <h2 className='pro-title'>Développeur Web et Web mobile</h2>
                    <h3 className='subpro-title'>Fullstack</h3>
                </div>
                <div className='social'>
                    <ul className='social-list'>
                        <li className='social-list-item github'>
                            <a href='https://github.com/MatHuguet' target='_blank' rel='noreferrer'>
                            <img src={GithubLogo}/>
                            </a>
                        </li>
                        <li className='social-list-item linkedin'>
                            <a href='https://www.linkedin.com/in/mathieu-huguet-b954371b9/' target='_blank' rel='noreferrer'>
                            <img src={LinkedinLogo}/>
                            </a>
                        </li>
                        <li className='social-list-item instagram'>
                            <a href='https://www.instagram.com/nuggyrocks/' target='_blank' rel='noreferrer'>
                            <img src={InstagramLogo}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}