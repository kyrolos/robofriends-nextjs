const Header = () => (
  <div>
    <h1>RoboFriends</h1>
    <style jsx>{`
      @font-face {
        font-display: swap;
        font-family: 'SEGA LOGO FONT';
        font-style: normal;
        font-weight: normal;
        src: local('SEGA LOGO FONT'), url('../static/SEGA.woff') format('woff');
      }
      
      h1 {
        font-family: 'SEGA LOGO FONT';
        font-weight: 200;
        color: #0ccac4;
      }
    `}</style>
  </div>
);

export default Header;
