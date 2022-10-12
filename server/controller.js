

pokemon =  [ "bulbasaur",  "venusaur", "charmander", "charmeleon", "charizard" ]

// const newUsers = [ 
// ]




module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getMyFortune: (req, res) =>{
        const yourfunute = ["a grand piano will fall out of the sky and land on top of you on your way to work", "A beautiful, smart, and loving person will be coming into your life", "you will be attacked by a pack of hyenas", "A friend is a present you give yourself", "your celebrity crush will never fall in love with you","A lifetime of happiness lies ahead of you", " tonight spider will crawl into your mouth while you sleep"];
        let randomIndex = Math.floor(Math.random() * yourfunute.length);
        let theFortune= yourfunute[randomIndex];

        res.status(200).send(theFortune)
    },
    theMirror: (req, res) => {
        const theAnswer = "never gonna happen pal"
          const results = req.body.truth
        if(results === results){
            res.status(200).send(theAnswer)

        }else{
            res.status(403).send({})
        }

    },

    theToDolist: (req, res) =>{
        const listItem = req.body.todoItem
        res.status(200).send(listItem)
   
    },

    theCoinfilp: (req,res) =>{
        const filp = ['heads', 'tails']
        let headOrTails = Math.floor(Math.random() * filp.length)
        let decision = filp[headOrTails]
        res.status(200).send(decision)



    },
    signMeUp: (req,res) => res.status(200).send(req.body),
   
    listpokemon: (req,res) => {
        for(let i = 0; i < pokemon.length; i++){
            res.status(200).send(pokemon)
        }
    },
    byebyepokemon: (req,res) => {
           const newlist = pokemon.splice(4, 1)
            res.status(200).send(newlist)
        }
    
    
    
}

