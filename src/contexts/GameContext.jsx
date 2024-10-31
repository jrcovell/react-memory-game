import { createContext, useContext, useEffect, useReducer } from "react";

// createContext is a function that creates a context object. This object contains a Provider and a Consumer component. The Provider component is used to wrap the components that need access to the context. The Consumer component is used to access the context within the wrapped components.
const GameContext = createContext();


const initialState = {
    cards: [],
    highScore: [],
    index: 0, 
    firstCard: null,
    secondCard: null,
    status: 'initial',
    disableCards: false,
    timeRemaining: 2000,
    numTries: 0,
    // force useEffect renders?
    dataFetch: false,
    test: 'hey there!',
    difficulty: 'intermediate',
}

// handles state transitions (need to be pure functions - no side effects, no async code, no mutations of state)
function reducer(state, action) {
switch (action.type) {
    case "game/started":
    return {...state, status: 'start'}

       case "game/reset":
    return {...initialState, difficulty: 'intermediate', dataFetch: !state.dataFetch}

      case "game/difficulty":
    return {...state, difficulty: action.payload.difficulty, timeRemaining: action.payload.time}

          case "game/gameOver":
    return {state: initialState, status: 'gameOver'}

// successfully get card data 
       case "game/difficultyData":
    return {...state, cards: action.payload}
// successfully get high score data
case 'game/highScoreData':
    return {...state, highScore: action.payload}

    case "game/dataFailed":
          return {...state, status: 'error',}

case "game/addScore":
    return {...state, highScore: [...state.highScore, action.payload]}

    case "game/scoreDeleted":
        return {...state, highScore: state.highScore.filter((score) => score.id !== action.payload)}

    case "firstCard/selected":
        return {...state, firstCard: action.payload, cards: state.cards.map((card) => card.id === action.payload.id ? {...card, flipped: !card.flipped} : card)} 

    case "secondCard/selected":
        return {...state, secondCard: action.payload, cards: state.cards.map((card) => card.id === action.payload.id ? {...card, flipped: !card.flipped} : card)}

case "cards/disableCards":
    return {...state, disableCards: !state.disableCards}

  case "cards/matched":
    // return console.log('match2')
        return {...state,  numTries: state.numTries + 1,  
        cards: state.cards.map((card, index) => 
            card.id === state.firstCard.id || card.id === state.secondCard.id ? { ...card, active: !card.active} : card), firstCard: null, secondCard: null, }

    case "cards/not-matched":
        return {
            ...state,
            
            numTries: state.numTries + 1,
            cards: state.cards.map((card, index) =>
                card.id === state.firstCard.id || card.id === state.secondCard.id
                    ? { ...card, flipped: !card.flipped }
                    : card
            ),
            firstCard: null,
            secondCard: null, 
        }

        case "game/finish":
            return {...state, status: 'gameOver'}

        case "tick": 
        return {...state, timeRemaining: state.timeRemaining - 1, status: state.timeRemaining === 0 ? 'gameOver' : state.status}

    default: 
    throw new Error('Unknown action type')
}
}



// top level component that provides the context to all the components in the app
function GameProvider({ children}) {
    // useReducer is a hook that is used to manage state in a component. It takes a reducer function and an initial state as arguments and returns an array with the current state and a dispatch function. The dispatch function is used to update the state.
    // can destructure state immediately here (state = {firstCard, secondCard, test})
    const [{firstCard, secondCard, test, timeRemaining, numTries, status, difficulty, disableCards, cards, dataFetch, highScore}, dispatch] = useReducer(reducer, initialState)


//^ fetch difficulty level from the server
useEffect(function () {
    console.log(difficulty)
    async function fetchData() {
fetch(`http://localhost:9000/${difficulty}` || (`https://w4tshzz1-9000.use.devtunnels.ms/${difficulty}`))
// fetch(`https://w4tshzz1-9000.use.devtunnels.ms/${difficulty}`)
.then((res) => res.json())
.then(data=> dispatch({type: 'game/difficultyData', payload: data}))
.catch((err) => dispatch({type: 'game/dataFailed'}));
    }
fetchData();
}, [difficulty, dataFetch])

//^ fetch high scores from the server
useEffect(function () {
    fetch('http://localhost:9000/high-scores')
    // fetch(`https://w4tshzz1-9000.use.devtunnels.ms/high-scores`)
    .then((res) => res.json())
    .then(data => dispatch({type: 'game/highScoreData', payload: data}))
    
    .catch((err) => dispatch({type: 'game/dataFailed'}))
}, [dataFetch])





//^ post high score to the server
async function postScore(newScore) {
    try {
        fetch('http://localhost:9000/high-scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newScore)
        })
        // update the state by adding the new score to the highScore array (allows the new score to be added to the UI without refreshing the page)
    dispatch({type: 'game/addScore', payload: newScore})
    dispatch({type: 'game/reset'})
    
    } catch (error) {
        console.log(error)
    }
}

//^ delete high score from the server and update the state
async function handleDeleteScore(id) {
    try {
        fetch(`http://localhost:9000/high-scores/${id}`, {
            method: 'DELETE',
        })
         // update the state by removing the score with the id that was passed in (allows the score to be removed from the UI without refreshing the page)
    dispatch({type: 'game/scoreDeleted', payload: id})
       
    } catch (error) {
        console.log(error)
    }
}


//^ timer that will end the game when time runs out
useEffect(function () {
    let intervalId;
    if (status === 'start') {
       intervalId = setInterval(function() {
            dispatch({type: 'tick'});
        }, 1000);
        // cleanup function - a function that runs when the component is unmounted or when the dependency array changes. It is used to clean up any resources or side effects created by the component.
    return () => clearInterval(intervalId)
    
    }
}, [status]);

//^ check if two cards are flipped, if so, check if they match
 useEffect(function () {
if (firstCard && secondCard) {
    console.log('exist')
    if (firstCard.name === secondCard.name) {
        dispatch({ type: 'cards/disableCards'})
        setTimeout(() => {
        console.log('match')
        dispatch ({ type: 'cards/matched'})
        dispatch({ type: 'cards/disableCards'})

        }, 500);   

    } else {
        dispatch({ type: 'cards/disableCards'})
      setTimeout(() => {
         console.log('not match')
          dispatch({ type: "cards/not-matched"})
          dispatch({ type: 'cards/disableCards'})
      }, 1000)
 
    }
}
 },[firstCard, secondCard] )


//^ check if all cards are active, if so, end the game
useEffect(function () {
    if (status === 'start') {
    if (cards.every((card) => card.active)) {
        console.log('game over')
        dispatch({type: 'game/finish'})
    }
}
}, [cards, status])

//^ shuffle the cards and start the game
  function handleStart() {
    cards.sort(() => Math.random() - 0.5)
    console.log('start')
  dispatch({ type: 'game/started' })
  }

  function handleReset() {
  dispatch({ type: 'game/reset'})
   
  }

function handleDifficulty({difficulty, time}) {
dispatch({ type: 'game/difficulty', payload:{time, difficulty} });
}




function handleFlip(card) {
    if (firstCard === null) {
        console.log('flip 1');
        console.log(card);
        dispatch({ type: 'firstCard/selected', payload: card });
    }
}


function handleFlipTwo(card) {
    console.log('flip 2')
    dispatch({ type: 'secondCard/selected', payload: card });
    }

    
    return <GameContext.Provider value={{firstCard, secondCard, test, status, timeRemaining, numTries, difficulty, disableCards, cards, highScore, handleFlip, handleFlipTwo, handleDifficulty, handleDeleteScore, handleStart, handleReset, postScore,  dispatch}}>
        {children}
    </GameContext.Provider> 
}

function useGame() {
    const context = useContext(GameContext)
    // if trying to access context outside of the provider(not a child component of the provider), throw an error 
    if ( context === undefined) {
        throw new Error("useGame must be used within a GameProvider")
    }
    return context;
}

export {GameProvider, useGame}