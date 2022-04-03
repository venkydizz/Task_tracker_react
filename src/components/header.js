import PropTypes from 'prop-types'
import Button from './Buttton'
import {useLocation} from 'react-router-dom'

const Header = ({title, showForm, isshowFrom}) =>{
    const location = useLocation()
    return(
        <header className= "header">
        <h1>{title}</h1>
        {location.pathname === "/" && <Button onClick={showForm} text={isshowFrom? "Close" : "Add"} />}
        </header>
    )
}

Header.defaultProps ={
    title : "Default sub heading"
}

Header.propTypes = {
    title: PropTypes.string,
}

// const sub_head_style = {
//     color:  'red',
//     backgroundColor: "green"
// }

export default Header