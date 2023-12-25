import React from 'react';
import './CardViewer.css';
import { Link, Switch, Route } from 'react-router-dom';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFrontVisible: true,
    };
  }

  handleCardClick = () => {
    this.setState((prevState) => ({ isFrontVisible: !prevState.isFrontVisible }));
  };

  render() {
    const {
      cardIndex,
      totalCards,
      currentCard,
      goToNextCard,
      goToPrevCard,
    } = this.props;

    console.log(this.props.cards[0]);

    return (
      <div>
        <h2>Card Viewer</h2>
        <hr />
        <div>
          <div>
            {/* Previous and Next buttons */}
            {/* Use Link instead of button for navigation */}
            <Link to={`/editor`}>Go to card editor</Link>
          </div>
        </div>
        <hr />
        <div className={`flashcard ${this.state.isFrontVisible ? 'front' : 'back'}`} onClick={this.handleCardClick}>
          <div className="flashcard-content">
            <div className="text">
              {this.state.isFrontVisible ? (
                <React.Fragment>
                  <div className="front-content">
                    <h3 className="flashcard-title">Front card</h3>
                    <p>{this.props.cards[0].front}</p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="back-content">
                    <h3 className="flashcard-title">Back card</h3>
                    <p>{this.props.cards[0].back}</p>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>

        {/* Define your routes outside of the main component */}
        <Switch>
          <Route path="/editor" render={() => <span>Go to card editor</span>} />
        </Switch>
      </div>
    );
  }
}

export default CardViewer;
