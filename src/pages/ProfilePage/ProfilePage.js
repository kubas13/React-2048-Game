import {StyledProfileContent, StyledProfileText, StyledProfileTitle, StyledProfileWrapper} from "./ProfilePage.styled"
import {StyledButton} from "../../components/Button/Button.styled";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCollection} from "../../hooks/useCollection";

const collectionName = 'scores'


export const ProfilePage = () => {
    const [highestScore,setHighestScore] =useState('')
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const {documents,error} = useCollection(collectionName,['id','==',user.uid])

        useEffect(()=>{

            if(documents) {
                const highestScoreResult = documents.map(item=> item.score)

                setHighestScore(Math.max(...highestScoreResult).toString())
            }


            },[documents])



    return (
        <StyledProfileWrapper>
            <StyledProfileTitle>Your Profile</StyledProfileTitle>
            <StyledProfileContent>
                <StyledProfileText>Name: {user.displayName}</StyledProfileText>
                <StyledProfileText>Email: {user.email}</StyledProfileText>
                <StyledProfileText>Your highest score: {highestScore}</StyledProfileText>
                <StyledButton onClick={()=> navigate('/scores')}>Other players highest score</StyledButton>
            </StyledProfileContent>
        </StyledProfileWrapper>
    )
}