
import BasketballBroadcast from '../component/BasketballBroadcast'
import CircleAppGrid from '../component/circleAppGrid'
import DreamTeamCTA from '../component/dreamTeam'
import Hero from '../component/heroSection'
import Navbar from '../component/navbar'
import PassionProfessionCard from '../component/PassionProfessionCard'
import PassionReward from '../component/PassionReward'




function LandingPage() {


  return (
    <>
      <Navbar />
      <Hero />
      <PassionProfessionCard />
      <CircleAppGrid />
      <DreamTeamCTA />
      <BasketballBroadcast />
      <PassionReward />
      
    </>
  )
}

export default LandingPage

