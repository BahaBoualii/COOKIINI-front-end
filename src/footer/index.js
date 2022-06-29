import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights  } from './FooterElements';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <FooterContainer>  
       <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to='/who'>Who are We?</FooterLink><br />
                            <FooterLink to='/contact'>Contact Us</FooterLink><br />
                            <FooterLink to='/community'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Services </FooterLinkTitle>
                            <FooterLink to='/plans'>Plans</FooterLink> <br />
                            <FooterLink to='/community'>Community</FooterLink><br />
                            <FooterLink to='/signup'>Sign Up</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/'> 
                <img src={require('../assets/logo2.png')} alt='logo' height={"70px"} width={"70px"} />
                </SocialLogo>
                <WebsiteRights>Cookiini &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                  <SocialIconLink href="//www.facebook.com/Cookiini-114400711240520" target="_blank" area-label="Facebook">
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href="//www.instagram.com/cookiini__/" target="_blank" area-label="Instagram">
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="//www.linkedin.com/company/cookiini/" target="_blank" area-label="Linkedin">
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap> 
    </FooterContainer>
  )
}

export default Footer