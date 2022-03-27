import PropTypes from 'prop-types'

const Button = ({onClick, text}) => {
    return(
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    text: "button"
}
Button.propTypes = {
    text : PropTypes.string,
    onclick: PropTypes.func
}

export default Button