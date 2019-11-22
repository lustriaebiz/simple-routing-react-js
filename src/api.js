const PlayerAPI = {
    players: [
      { number: 1, name: "Dele Alli", position: "AMC" },
      { number: 2, name: "De Gea", position: "GK" },
      { number: 3, name: "Jesse Lingard", position: "RW" },
      { number: 4, name: "Harry Kane", position: "CF" },
      { number: 5, name: "Eriksen", position: "LW" },
      { number: 6, name: "Nemanja Matic", position: "DMC" }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }
  
  export default PlayerAPI
  