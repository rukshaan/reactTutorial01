
import './App.css';
import Header from './component/Header.js';
import Content from './component/Content.js';
import Footer from './component/Footer.js';
import Profile from './component/Profile.js';
import Skills from './component/Skills.js';
import subHeader from './component/subHeader.js';
function App() {
  const textColor={"color":"red"};

  return (
    <>
      {/*<Header> </Header>
      <hr></hr>
      <Content></Content>
      <hr></hr>
      <Footer></Footer>*/}
      <subHeader headingColor={textColor} 
      subHeading="this is my University Profile"></subHeader>
      <hr></hr>
          <Profile name="Robert" regno="2019ICT01" 
    course="ICT" gender="Male">
    <Skills mylang="Java"> </Skills></Profile>
    </>
  )
}

export default App;
