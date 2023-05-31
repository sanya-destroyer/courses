import {memo} from 'react'

import logoImage from '../../../../assets/logo.png'

import './Logo.css'

const Logo = () => <img data-testid="header-logo" className='app-logo' src={logoImage} alt='Courses Logo' />


export default memo(Logo)
