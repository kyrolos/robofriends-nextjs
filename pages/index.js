import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
  
  render() {
    return <div>
      <h1>Hello</h1>
      <p>93, 93/93</p>
      <style jsx>{`
       h1 {
         font-weight: 300;
         color: #333;
       }
     `}</style>
    </div>
  }
}

export default Index;
