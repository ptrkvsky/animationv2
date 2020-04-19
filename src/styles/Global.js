import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'
import mediaQueries from './mediaQueries'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* -------------- */
        /*  TWEAK GATSBY  */
        /* -------------- */
        .tl-edges {
          min-height: 100vh;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */
        @font-face {
          font-family: 'Druk Wide Web Bold';
          src: url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.eot');
          src: url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/29800a9e7d146302b8ed9ad2f848db63.svg#Druk Wide Web Bold')
              format('svg');
        }
        @font-face {
          font-family: 'Druk Wide Web Medium';
          src: url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.eot');
          src: url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.eot?#iefix')
              format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.woff2')
              format('woff2'),
            url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.woff')
              format('woff'),
            url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.ttf')
              format('truetype'),
            url('//db.onlinewebfonts.com/t/5796fb1b44e3c87b7f3d5ff57994f7b3.svg#Druk Wide Web Medium')
              format('svg');
        }
        body {
          background: ${theme.bg.main};
          color: ${theme.colors.main};
          font-size: 18px;
          font-family: ${theme.fonts.primary};
          min-height: 100vh;
        }

        img {
          max-width: 100%;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        /* HELPERS */
        .max-container {
          width: ${theme.maxWidth};
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        .v-hidden {
          visibility: hidden;
        }

        .hide-text {
          position: relative;
          display: block;
          overflow: hidden;
        }

        .d-block {
          display: block;
        }
      `}
    />
  )
}
