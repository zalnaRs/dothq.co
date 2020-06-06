import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton, TextButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title } from "../components/style"
import { createGlobalStyle } from "styled-components"

import * as landingScreenshotLight from '../images/landing-screenshot-light.png'
import * as landingScreenshotDark from '../images/landing-screenshot-dark.png'

import * as blockAds from '../images/features/block_ads.svg'
import * as familiarDesign from '../images/features/familiar_design.svg'
import * as syncData from '../images/features/sync_data.svg'
import * as openSource from '../images/features/open_source.svg'
import { getOS } from "../helpers/os"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  return (
    <>
      <Layout noEnding isHome>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <div dot-slideup="true" style={{ animationDelay: '0.2s' }}><Title className="hero-title">Black. Lives. Matter.</Title></div>
        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.4s' }}>The <strong>Dot HQ Community</strong> believe that Black Lives Matter. We will not stand in silence while people are being mistreated.</p>

        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.6s' }}>
          Please consider donating to <a href={"https://blacklivesmatter.com/"}><TextButton style={{ fontSize: '24px' }} isBasic>Black Lives matter</TextButton></a> and or the <a href={"https://www.gofundme.com/f/georgefloyd"}><TextButton style={{ fontSize: '24px' }} isBasic>George Floyd Memorial Fund</TextButton></a>.
          <br /><br />
          Love, The Dot Team <Emoji text={"❤️"} options={generateEmojiConfig({ className: 'blm-emoji' })} />
        </p>

      </Layout>
      <HeroSheet>
        <HSS />
      </HeroSheet>
    </>
  )
}

export default IndexPage
