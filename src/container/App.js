import React, { useState, useEffect } from 'react';
import {robots} from '../components/robots.js'
import SearchBox from '../components/SearchBox'
import CardsList from '../components/CardsList'
import Scroll from '../components/Scroll'

function App()
{
    // constructor(){
    //     super()
    //     this.state = {
    //         robots : robots,
    //         searchField : ''
    //     }

    // }

    const [myrobots,setRobot] = useState([])
    const [searchField,setSearchField] = useState('')


    useEffect(()=>{
        // fetch('http://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => {setRobot(users)});
        setRobot(robots)
    },[])

    const onSearchChange = (event) =>
    {
        setSearchField(event.target.value) 
    }

    const searchList = myrobots.filter(robot => {
    return robot.username.toLowerCase().includes(searchField.toLowerCase())
    })

        return(
            <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
            <CardsList robots={searchList}  />
            </Scroll>
            </div>
        )
}

export default App