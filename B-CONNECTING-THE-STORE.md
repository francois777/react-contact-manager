## CONNECTING THE STORE ##

### Notes

#### 1. The store is an input parameter to the `Provider` component.

`/src/index.js`
````
  import store from "./store";
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
````

#### 2. No reference to the store here (or in the nested components)

`/src/App.js`
````
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink ..>
          <NavLink ..>
        <Route exact path="/" component={ContactListPage} />
        <Route ..>
````

#### 3. Where store comes from:

`src/store.js`
````
import rootReducer from "./reducers";
const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));
export default createStore(rootReducer, middleware);
````

A `reducer` returns a new immutable copy of state, according to the given action.
The `rootReducer` combines all reducers:

`src/reducers/index.js`

````
const reducers = {
  contactStore: ContactReducer,
  form: formReducer
}
const rootReducer = combineReducers(reducers);
````

#### 4. The state of ContactForm is connected to props:

`/src/pages/contact-form-page`
````
function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(
  mapStateToProps, {
    newContact, saveContact, fetchContact, updateContact
  }
)(ContactFormPage);
````

#### 5. The state of ContactListPage is connected to props:

`/src/pages/contact-list-page.js`
````
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts
  }
}

export default connect(
  mapStateToProps, {fetchContacts}
)(ContactListPage);
````
