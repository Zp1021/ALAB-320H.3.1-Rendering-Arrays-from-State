import Score from "./Score"
export default function Learner({name, bio}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            <Score/>
        </div>
    )
}