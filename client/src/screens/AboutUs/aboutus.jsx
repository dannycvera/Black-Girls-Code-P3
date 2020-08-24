import React from "react";
import "./aboutus.css";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "client/src/components/shared/Footer/Footer.jsx"
import Nav "from client/src/components/shared/Nav/Nav.jsx"

//flex box 
const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width:
}

const Flex = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || 'auto',
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || 'nowrap',
      padding: props.padding || '0',
      width: props.width || 'auto',
      height: props.height || 'auto',
      maxWidth: props.maxWidth || 'none'
    }}
  >
    {props.children}
  </div> 