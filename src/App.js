// Look up to next time : youtube : Nested Routes Tutorial - React Router Dom V6
// https://www.youtube.com/watch?v=PWi9V9d_Jsc
import Navigate from './components/Navigate';
import { createContext,useState, useEffect } from 'react';
// only made for pc screens
import './css/Home.css'
import './css/Kodehode.css'
import './css/TheRandomizer.css'

// MasterCard pc - mobile
import './css/MasterCard.css'
import './css/Mobile/MasterCardMobile.css'
// Pokemone pc - mobile
import './css/Pokemon.css'
import './css/Mobile/PokemonMobile.css'
// Products pc - mobile
import './css/Products.css'
import './css/StoreBaskit.css'
import './css/Mobile/ProductsMobile.css'

//SpaceToursim App - pc screens
import './css/SpaceTourism-nav.css'
import './css/SpaceTourism/Technology-pc.css'
import './css/SpaceTourism/Destination-pc.css'
import './css/SpaceTourism/Crew-pc.css'
import './css/SpaceTourism/Space-pc.css'
//SpaceToursim App - tablet screens
import './css/SpaceTourism/tablet/Technology-tablet.css'
import './css/SpaceTourism/tablet/Destination-tablet.css'
import './css/SpaceTourism/tablet/Crew-tablet.css'
import './css/SpaceTourism/tablet/Space-tablet.css'
//SpaceToursim App - mobile screens
import './css/SpaceTourism/mobile/Technology-mobile.css'
import './css/SpaceTourism/mobile/Destination-mobile.css'
import './css/SpaceTourism/mobile/Space-mobile.css'
import './css/SpaceTourism/mobile/Crew-mobile.css'

// Ecommerce
import './css/Ecommerce/Ecommerce.css'

//Bookmark pc and mobile screens
import './css/Bookmark/Bookmark.css'
import './css/Bookmark/BookmarkMobile.css'




// Making a globalState from createContext / exporting it to others FunctionComponent's
export const StateContext = createContext();
//global state for Ecommerce page
export const EcommerceContext = createContext();
/* Wrapping StateContext.Provider around the App return 'section', so all child can be able to use the globalState that's will be send by " props ", 
and destructed with useContext inside the diffrent FunctionComponent's  */
function App() {
  const [ state, setState ] = useState( {count: 0, item: [] } )
  const [ states, setStates] = useState({price: 0, count: 0, total: 0, title: ""})
  //console the state when the state changes
  useEffect( () => {
    console.log( state )
  },[state])

  return (
    <EcommerceContext.Provider value={ {states: states, setStates: setStates} } >
    <StateContext.Provider value={ { state: state, setState: setState } }>
        <Navigate />
    </StateContext.Provider>
    </EcommerceContext.Provider>
  );
}

export default App;


