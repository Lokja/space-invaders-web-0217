
// class CrewMember {
//   constructor(position) {
//     this.position = position
//     this.currentShip = "Looking for a Rig"
//   }
//   engageWarpDrive(){
//     if (this.position == "Pilot" && this.currentShip != "Looking for a Rig") {
//       this.currentShip.warpDrive = "engaged!"
//     } else {
//       return "had no effect"
//     }
//   }
//   setsInvisibility(){
//     if (this.position == "Defender" && this.currentShip != "Looking for a Rig") {
//       this.currentShip.cloaked = true
//     } else {
//       return "had no effect"
//     }
//   }
//   chargePhasers(){
//     if (this.position == "Gunner" && this.currentShip != "Looking for a Rig") {
//       this.currentShip.phasersCharge = "charged!"
//     } else {
//       return "had no effect"
//     }
//   }
// }

// Extracting with inherentance below:

class CrewMember {
  constructor(position) {
    let role;
    if (position == "Gunner") {
      role = Gunner
    } else if (position == "Pilot") {
      role = Pilot
    } else if (position == "Defender"){
      role = Defender
    }
    role.position = position
    role.currentShip = "Looking for a Rig"
    return role
  }
}

class Gunner extends CrewMember {
  chargePhasers(){
    if (this.currentShip != "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!"
    } else {
      return "had no effect"
    }
  }
}

class Pilot extends CrewMember {
  engageWarpDrive(){
    if (this.currentShip != "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged!"
    } else {
      return "had no effect"
    }
  }
}

class Defender extends CrewMember {
  setsInvisibility(){
    if (this.currentShip != "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }
}
