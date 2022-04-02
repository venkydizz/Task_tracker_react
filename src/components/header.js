import PropTypes from 'prop-types'
import Button from './Buttton'

const Header = ({title, showForm, isshowFrom}) =>{
    return(
        <header className= "header">
        <h1>{title}</h1>
        <Button onClick={showForm} text={isshowFrom? "Close" : "Add"} />
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