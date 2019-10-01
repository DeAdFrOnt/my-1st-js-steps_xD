
/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

//Say how much hours should sleep per each day of week
const getSleepHours=day=>{
    if(day==='monday'){
      return 8
    } else if(day==='tuesday'){
      return 8
    }else if(day==='wednesday'){
      return 8
    }else if(day==='thursday'){
      return 8
    }else if(day==='friday'){
      return 8
    }else if(day==='saturday'){
      return 8
    }else if(day==='sunday'){
      return 8
    }
  }
  //Sum normal week hours sleep
  const getActualSleepHours=()=>getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
  //How much i sleep per week at all, random number from 5-9
  const getIdealSleepHours=()=>{
    let idealHours=Math.floor(Math.random()*(9-5)+5)
    return idealHours*7
  }
  //Say what u need depends of ur overweek sleep time and says ur sleep debt
  const calculateSleepDebt=()=>{
    let actualSleepHours=getActualSleepHours()
      let currentSleepHours=getIdealSleepHours()
    if(getIdealSleepHours()===actualSleepHours){
      console.log('perfect amount of sleep')
    }else if(getIdealSleepHours()<actualSleepHours){
      console.log('You got ' + (actualSleepHours - currentSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
    }else{
      console.log('got more sleep than needed')
    }
  }
  calculateSleepDebt()