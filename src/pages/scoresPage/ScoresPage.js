import  { useEffect,useState} from 'react'
import {
    StyledPlayerContainer,
    StyledPlayerName,
      StyledScoreContainer,
    StyledScoreTitle, StyledScoreValue,
     StyledWrapper
} from "./ScoresPage.styled";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useCollection} from "../../hooks/useCollection";





const Player=({name,score})=>{

    return (
        <StyledPlayerContainer>
            <StyledPlayerName>{name}</StyledPlayerName>
            <StyledScoreValue>{score}</StyledScoreValue>
        </StyledPlayerContainer>
    )
}

export const ScoresPage = () => {
    const {user} = useAuthContext()
const {documents,error} = useCollection('scores')
    const [orderScores,setOrderScores] = useState([])


useEffect(()=> {
    if(documents) {
        setOrderScores(documents.sort((a,b)=> b.score-a.score))
    }
},[documents])



    return(
        <StyledWrapper>
            <StyledScoreTitle>Score List</StyledScoreTitle>
            <StyledScoreContainer>
            {orderScores.map((item)=> (
                <Player  key={item.id} score={item.score} name={item.name}/>
            ))}
            </StyledScoreContainer>

        </StyledWrapper>
    )

}
