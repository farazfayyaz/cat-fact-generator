fetch('https://cat-fact.herokuapp.com/facts')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                    function random() {
                        let randomNum = Math.floor(Math.random() * data.length + 1);
                        let randomFact = data[randomNum]['text']
                        document.querySelector('#fact').innerHTML = randomFact
                    }
                    document.querySelector('#generate').addEventListener('click', random)
                    
                })
                .catch(err => console.log(`error ${err}`));