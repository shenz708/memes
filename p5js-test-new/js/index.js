var LikeBox = React.createClass({ displayName: "LikeBox",

  getInitialState: function getInitialState() {
    return {
      Likes: 0,
      ShowLikes: false };

  },

  IncreaseLikes: function IncreaseLikes() {
    this.setState({ Likes: this.state.Likes + 1 },
    function () {
      if (this.state.Likes >= 1) {
        this.setState({ ShowLikes: true });
      }
    });
  },

  DecreaseLikes: function DecreaseLikes() {
    this.setState({ Likes: this.state.Likes - 1 },
    function () {
      if (this.state.Likes <= 0) {
        this.setState({ ShowLikes: false });
      }
    });
  },

  render: function render() {

    return (
      React.createElement("div", { className: "like-container" },
        React.createElement("div", { className: "heart fa fa-heart", "data-showing": this.state.ShowLikes },
          React.createElement(LikeCounter, { Likes: this.state.Likes, ShowLikes: this.state.ShowLikes })),

        React.createElement(LikeButtons, { likeClick: this.IncreaseLikes, dislikeClick: this.DecreaseLikes })));


  } });


var LikeCounter = React.createClass({ displayName: "LikeCounter",
  render: function render() {
    return (
      React.createElement("div", { className: "counter", "data-showing": this.props.ShowLikes },
        this.props.Likes));


  } });


var LikeButtons = React.createClass({ displayName: "LikeButtons",
  render: function render() {
    return (
      React.createElement("div", { className: "button-container" },
        React.createElement("button", { className: "btn", onClick: this.props.likeClick }, "Like"),
        React.createElement("button", { className: "btn", onClick: this.props.dislikeClick }, "Dislike")));


  } });




ReactDOM.render(
React.createElement(LikeBox, null),
document.getElementById('app'));