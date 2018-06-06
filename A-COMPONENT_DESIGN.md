## COMPONENT DESIGN ##

### Notes

1. The outer components are `BrowserRouter` -> `Provider` -> `App`
2. The navigation links are inside `<div className="ui two item menu">`

> /src/index.js
````
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
````

> /src/app.js
````
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}
````
