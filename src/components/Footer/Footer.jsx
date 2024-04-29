import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import isntragram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="foot-icons">
        <img src={youtube_icon} alt="youtube" />
        <img src={isntragram_icon} alt="instagram" />
        <img src={twitter_icon} alt="twitter" />
        <img src={facebook_icon} alt="facebook" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Perferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
