
import './App.css'

  export const HomeView = {
  home :{  width: "90rem",
    height: "64rem",
    padding: "0 0 6.125rem",
    backgroundColor: "#fcfcfc"},
    rectangle:{
      width: "90rem",
      height:" 7.125rem",
      margin: "0 0 4.375rem",
      padding: "2.75rem 67.625rem 2.625rem 9.375rem",
      boxShadow: "0 1px 4px 0 var(--navy-12)",
      backgroundImage: "linear-gradient(to bottom, #ececec -32%, #fff 124%)",
     },
     title:
      {
        width: '13rem',
        height: '1.75rem',
        objectFit: 'contain',
        fontFamily: 'Baskerville',
        fontSize: '1.75rem',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: '#3b3b3b',
      
      }
     }
  


function App() {
  

  return (
    <>
    <div style={HomeView.home}>

<div style={HomeView.rectangle}>
  <span style={HomeView.title}>HELLOWORLD</span>
  </div>
    </div>
    </>
  )
}

export default App
