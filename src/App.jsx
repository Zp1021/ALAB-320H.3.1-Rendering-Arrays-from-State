/* 
Zavier Paulino
Ginellys Medina Suarez
Daijha Rabalais
Shoreman Fennell
Christopher Inyindjolohanga
*/

import { useState } from "react";
import data from "./data.js";
import Learner from "./components/Learner.jsx";


function App() {
const [learnerData, setLearnerData] = useState(data)
    return(
        learnerData.learners.map((learner =>
           <Learner
            key = {learner.name}
            name = {learner.name}
            bio = {learner.bio}
           />
          //  <Score/>
        ))
    )
}

export default App