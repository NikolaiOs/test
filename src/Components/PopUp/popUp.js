import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './popUp.css'

export const PopUp = ({ active, setActive, children }) => {
    // let navigate = useNavigate();
    // let location = useLocation();

    const ckickHandler = () => {
        setActive(false);
        // if (location.pathname === SIGN_UP_LINK) { navigate('/', { replace: true }) }
        // else
        //     // почему-то не хочет направлять на /reader, а направляет на главную страницу, поэтому пришлось сделать костыль
        //     if (location.pathname === NOAUTH_LINK) { navigate(READER_LINK, { replace: true }) }
        //     else { navigate(-1); }
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} >
            <div className={`modal__content ${active ? 'active' : ''}`} >
                <div className='cross' onClick={() => ckickHandler()}><FontAwesomeIcon icon="fa-solid fa-xmark" /></div>
                {active && children}
            </div>
        </div>
    )
}