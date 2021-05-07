async function story() {

    let kolobok = {
        name: 'Kolobok',
        age: 0.003, //1 day
        characteristic: 'nimble',
        isAlive: true,
        becameAlive: function() {
            this.isAlive = true;
            console.log(`${this.name} became alive`);
        },        
        say: function(phrase) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(this.isAlive) {
                        console.log(`${this.name} says: ` + phrase);
                        return resolve(this.isAlive);                        
                    };
                    return reject(this.isAlive);          
                }, 5000);
            });                      
        },
        tiredOfRoutine: function() {
            console.log(`${this.name} tired of routine and decided to explore the world`);
        },
        leftHome: function() {
            console.log(`${this.name} left home`);
        },
        roll: function() {
            console.log(`${this.name} is rolling down the road`);
        },
        meetRabbit: function(name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        leftRabbit: function(name) {
            console.log(`${this.name} left ${name} and continue his journey`);
        },
        sing: function(song) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`${this.name} sings: "I\'m ${this.name}, ${this.name},\nI was made in suseki,\nI was made from selected dough,\nA glass of sour cream in me,\nA spoon of sunflower oil in me,\nI was lying on the windowsill,\nThen I left Grandfather,\nAnd I left Grandmother,` + song + '\nSo I can easily to leave you too!"');
                    return resolve(this.isAlive);
                }, 5000);
            });            
        },
        meetFox: function(name) {
            console.log(`${this.name} meets ${name} on the road`);
        },
        sitOnFoxNose: function(name) {
            console.log(`${this.name} sits on ${name} nose`);
        },
        died: function() {
            this.isAlive = false;
            console.log(`${this.name} go to Valhalla...`);
        }, 
    };   

    let grandFa = {
        name: 'Varfolomei',
        age: 89,
        characteristic: 'hungry',
        say: function(phrase) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`${this.name}: ${phrase}`);
                    return resolve();
                }, 6000);
            });
        },
    };

    let grandMa = {
        name: 'Marfusha',
        age: 85,
        characteristic: 'enterprising',
        say: function(phrase) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`${this.name}: ${phrase}`);
                    return resolve();
                }, 7000);
            });
        },
        goToSuseki: function() {
            console.log('Grandma goes to suseki');
        },
        findFlour: function() {
            console.log('Grandma found two glasses of flour');
        },
        bake: function() {
            console.log('Grandma bakes kolobok');
        },
        putKolobok: function() {
            console.log('Grandma put kolobok on windowsill');
        },         
    };

    let rabbit = {
        name: 'Bunny',
        age: undefined,
        characteristic: 'silly',
        say: function(phrase) {
            console.log(`${this.name} ` + phrase);
        },
        lostOrientation: function() {
            console.log(`${this.name} lost orientation`);
        },        
    };

    let fox = {
        name: 'Red fox',
        age: undefined,
        characteristic: 'sly',
        say: function(phrase) {
            console.log(`${this.name} says: ` + phrase);
        },
        swallowKolobok: function(name) {
            console.log(`${this.name} swallows ${name} at the moment he starts to sing his song for the second time`);
        },        
    };

    await chapter1(kolobok, grandFa, grandMa); //async

    chapter2(kolobok, rabbit); //many

    chapter5(kolobok, fox); //chain
};

 async function chapter1(kolobok, grandFa, grandMa) {
    console.log('C H A P T E R : 1');   
    await grandFa.say(`"Hi my lovely, ${grandMa.name}, can you bake very delicious ${kolobok.name}? I\'m very very ${grandFa.characteristic}."`);
    await grandMa.say(`"Oh, ${grandFa.name}, how can I bake ${kolobok.name} if we have no flour?!"`);
    await grandFa.say(`"Please don\'t worry, ${grandMa.name}, go to suseki and find something there.\nYou are very ${grandMa.characteristic}, I believe in you."`);
    grandMa.goToSuseki();
    grandMa.findFlour();
    grandMa.bake();
    grandMa.putKolobok();
    kolobok.becameAlive();
    let kolobokCondition = await kolobok.say('"Hello predki!"');
    console.log('isAlive', kolobokCondition);
    kolobok.tiredOfRoutine();
    let kolobokCondition2 = await kolobok.say('"Bye bye predki!"');
    console.log('isAlive', kolobokCondition2);
    kolobok.leftHome();
    kolobok.roll();    
};

function chapter2(kolobok, rabbit) {
    console.log('C H A P T E R : 2');  
    kolobok.meetRabbit(rabbit.name);

    rabbit.say(`"Hey, ${kolobok.name}, ${kolobok.name}, I am going to eat you!"`);

    let kolobokPromise = kolobok.say(`"Please don\'t eat me, dear ${rabbit.name}, I wanna sing a song for you!"`);
    kolobokPromise.then((kolobokCondition3) => {
        console.log('isAlive', kolobokCondition3);
        rabbit.say(`"Okay, ${kolobok.name}, sing your song!"`);

        kolobokPromise.then(() => {        
            rabbit.say(`"Hurry please!!!"`);
            rabbit.lostOrientation();
            
            kolobokPromise.then(() => {        
                kolobok.leftRabbit(rabbit.name);       
                kolobok.roll();   
            });
        });
    });    
};

function chapter5(kolobok, fox) {    
    console.log('C H A P T E R : 5');  
    kolobok.meetFox(fox.name);
    fox.say(`"Hi piece of dough!"`);
    kolobok.say(`"Hi piece of meat!"`)   
        .then((kolobokCondition4) => {
    console.log('isAlive', kolobokCondition4);
    fox.say(`"Hey ${kolobok.name}, ${kolobok.name}, why do you answer so slowly?"`);
    return kolobok.say(`"Oh, ${fox.characteristic} ${fox.name}, because my ancestors from Estonia!"`);
    })
        .then((kolobokCondition5) => {
    console.log('isAlive', kolobokCondition5);
    fox.say(`"It\'s okay, it is not your fault. I want to hear your slowly song))"`)
    return kolobok.sing('\nAnd I left silly Rabbit,\nAlso I left angry Wolf before,\nAnd I left big Bear just an hour ago,');
    })    
        .then((kolobokCondition6) => {
    console.log('isAlive', kolobokCondition6);
    fox.say(`"It is so wonderful slowly song, ${kolobok.name}, you should sing it sitting on my nose, ok?"`);
    return kolobok.say(`"No problems, ${fox.name}, I can do it."`);
    })             
        .then((kolobokCondition7) => {
    console.log('isAlive', kolobokCondition7);
    kolobok.sitOnFoxNose(fox.name);
    fox.swallowKolobok(kolobok.name);
    kolobok.isAlive = false;
    console.log('isAlive', kolobok.isAlive);
    kolobok.died(fox.characteristic, fox.name);
    console.log('T H E  E N D');
    })           
        .catch((kolobokCondition4) => {
        console.log('isAlive', kolobokCondition4);
        fox.say(`"Bye bye Kolobochek"`);        
    })
};

story();