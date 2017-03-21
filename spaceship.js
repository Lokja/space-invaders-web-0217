class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields

    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = !crewMembers.length
    this.phasersCharge = 'uncharged'
    this.registerCrewMembers()
  }

  registerCrewMembers(){
    let self = this
    this.crewMembers.forEach(function(member){
      member.currentShip = self
    })
  }
  
  // arrow fucntion works here too does, the let self = this passively:
  // registerCrewMembers() {
  //   this.crewMembers.forEach(function(member) =>
  //     member.currentShip = this
  //   })
  //  }
}
