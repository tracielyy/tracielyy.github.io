import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './Navigation.js'



const Header = ({ title }) => {
    return (
        <header>
            <Navigation/>
        </header>
    );

}

Header.defaultProps = {
    title: 'Test Default Title Props',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header