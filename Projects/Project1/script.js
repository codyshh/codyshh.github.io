var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }
            var quotes = [
              'Not all of us are painters but we are all artists. Each time we fit things together we are creating - whether it is to make a loaf of bread, a child, a day. ~ Corita Kent',
              'No comedy. No dicks. No bongs. I wrote this thing and it’s terrible. ~ Simon Hanselmann',
              'To be a good artist / letterer / designer / guitar player it takes practice. A lot of it. More than you can even fathom when you\'re starting out. ~ Jessica Hische',
              'Drawing is freedom encompassed for me. It\’s a place where you can\’t really do anything wrong and nothing bad can happen. It\’s comforting ~ Ed Cheverton'
            ]

            function newQuote() {
              var randomNumber = Math.floor(Math.random() * quotes.length);
              document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; }

              var compliments = [
                'its gonna be ok, buddy!', 'go easy on yourself','productivity isnt the only sign of success','artists block can not and will not last forever','you are capable of creating beautiful work','be kind to yourself','stop comparing yourself to others!'  
              ]
  
              function newCompliment() {
                var randomNumber = Math.floor(Math.random() * quotes.length);
                document.getElementById('complimentDisplay').innerHTML = compliments[randomNumber]; }