// import React from 'react';

// const withAuthenticate = HomePage => LoginPage =>

// class extends React.Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             loggedIn: false
//         };
//     }
//     componentDidMount(){
//         if (!localStorage.getItem('username')){
//             this.setState({ loggedIn: false })
//         }else{
//             this.setState({ loggedIn: true });
//         }
//     }
//     render(){
//         if (this.state.loggedIn) 
//         return <HomePage />;
//         return <LoginPage />;
//     }
// };

// export default withAuthenticate;