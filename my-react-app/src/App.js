
import React, { Component } from 'react';
import CardProfil from './CardProfil';

class App extends Component {

  person = {
    fullName: "François Pied Lescalier",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque adipisci repellat facilis soluta esse quos reprehenderit mollitia at minima et consequuntur, cumque, veniam non, commodi quisquam magni laboriosam dicta inventore!",
    imgSrc: "https://img.freepik.com/photos-gratuite/rendu-3d-avatar-appel-zoom_23-2149556783.jpg?t=st=1717628699~exp=1717632299~hmac=9592c0f28273ec5bf320d1665c04905a6d780ee7537bbe482d774a9c53673cb3&w=1380",
    profession: "Développeur Full-Stack"
  };

  state = {
    isShow: true,
  };

  handleTrueClick = () => this.setState({isShow: true});
  handleFalseClick = () => this.setState({isShow: false});

  render() {
    if (!this.state.isShow) {
      return (
        <div>
          <button style={{padding: 10, margin: 20, backgroundColor: '#ff6348', color: 'white', fontWeight: 'bold', fontSize: 20}} onClick={this.handleTrueClick}>Masquer le profil</button>
          <CardProfil 
            fullName={this.person.fullName}
            bio={this.person.bio}
            imgSrc={this.person.imgSrc}
            profession={this.person.profession}
          />
      </div>      
      )
    }
    else {
      return (
        <button style={{padding: 10, margin: 20, backgroundColor: '#2ed573', color: 'white', fontWeight: 'bold', fontSize: 20}} onClick={this.handleFalseClick}>Afficher le profil</button>
      )
    }
  }
}

export default App;