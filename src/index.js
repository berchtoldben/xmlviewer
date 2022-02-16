import React from "react";
import ReactDOM from "react-dom";
import XMLViewer from "react-xml-viewer";

const xml =
  '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/"><soap:Body><tem:getEntities><tem:entitiesInfo><BizAgiWSParam><EntityData><EntityName>testWeb</EntityName></EntityData></BizAgiWSParam></tem:entitiesInfo></tem:getEntities></soap:Body></soap:Envelope>';
const customTheme = {
  attributeKeyColor: "#0074D9",
  attributeValueColor: "#2ECC40"
};

function App() {
  return (
    <div>
      <XMLViewer xml={xml} theme={customTheme} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
