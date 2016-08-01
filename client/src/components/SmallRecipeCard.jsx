class SmallRecipeCard extends React.Component {
  //props: recipe - the recipe data to be shown; taken from the API
  //       searchSummary - function with ajax call to retrieve the description of the
  //                       recipe
  constructor(props){
    super(props);
    this.state = {
      id: this.props.recipe.id
    };
  }

  //runs when component is rendered (react calls this function before rendering)
  componentWillMount () {
    //ingredients as future functionality? this can be obtained
    //from "Get Product Data" endpoint and searchIngredients has
    //already been added to the searchSpontacular.js with that endpoint

    //retrieves the summary/description for this recipe
    this.props.searchSummary(this.state.id, (data)=>{
      this.setState({ summary: JSON.stringify(data.summary) })
    })
  }

  render(){
    return(
      <div className="recipe-list">
        <div className="recipeImg newCard col-md-6 col-xs-6 col-sm-4">
          <div className="recipeTitle">{this.props.recipe.title}</div>
          <img className="center-block" src={this.props.recipe.image} />
          <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
        </div>

          {/* react does not like html being added from unknown sources to its rendered
            pages. This is to protect from attacks. In our case, we're forcing it to
            accept html from the Ajax query to the API. This could likely be implemented
            in a different way */
            // <div dangerouslySetInnerHTML={{__html: this.state.summary}} />
          }

      </div>
    )
  }
}

window.SmallRecipeCard = SmallRecipeCard;
