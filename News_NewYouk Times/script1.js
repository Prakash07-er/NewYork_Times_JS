  const container= createbootstrap('div','container');
  const headerRow = createbootstrap('div' , 'row');
  const headerCol = createbootstrap('div','col-md-12 text-center border-bottom py-3')
  const headerTitle = createbootstrap('p','h2 head-title');
  headerTitle.innerHTML= "NewYork Times";
  const headerDate = createbootstrap("p", "h1");
  headerDate.innerHTML = `${toDaysDate()}`;

  headerCol.append(headerTitle, headerDate);
  headerRow.append(headerCol)


// Creating Navbar

  const  nav =createbootstrap('div' , 'navbar navbar-dark bg-light')
  const navRow = createbootstrap('a' , 'navbar navbar-dark bg-light')
  navRow.innerHTML="HOME";
  navRow.target = '_blank';
  navRow.addEventListener('click', () => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow1 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow1.innerHTML='WORLD';

navRow1.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
     getData(data);
    })
    .catch((err) => console.log("Error:", err));
})

  const navRow2 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow2.innerHTML='ARTS';
  navRow2.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow3 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow3.innerHTML='SCIENCE';
  navRow3.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow4 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow4.innerHTML='TECHNOLOGY';
  navRow4.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow5 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow5.innerHTML='HEALTH';
  navRow5.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow6 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow6.innerHTML='MAGAZINE';
  navRow6.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow7 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow7.innerHTML='SPORTS';
  navRow7.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow8 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow8.innerHTML='MOVIES';
  navRow8.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow9 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow9.innerHTML='FASHION';
  navRow9.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })
  const navRow10 = createbootstrap('a' , 'navbar navbar-light bg-light')
  navRow10.innerHTML='FOOD';
  navRow10.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=96dJ8cFAq2hSPsJ3oL8AvNm3lEBAKHto"     )
      .then((res) => res.json())
      .then((data) => {
       console.log(data);
       getData(data);
      })
      .catch((err) => console.log("Error:", err));
  })


// Appending navbar
  nav.append(navRow,navRow1,navRow2,navRow3,navRow4,navRow5,navRow6,navRow7,navRow8,navRow9,navRow10)
  container.append(nav)
 document.body.append(headerRow,container)


   

  function getData(Data) {
    let content = Data;
    for (let i = 0; i < content.results.length; i++) 

    {
            const container1 = createbootstrap('div' , 'container-fluid')
            let Row = createbootstrap("div", "row");
            const column= createbootstrap('div' , 'col-lg-12 col-md-6 col-sm-12 mb-4 ');
            let cardRow = createbootstrap("div", "row no-gutters ");
            const col= createbootstrap('div' , 'col-lg-6 col-md-6 col-sm-12 mb-4 ');
            const card= createbootstrap('div','card');
            const imagediv=createbootstrap('div','col-lg-6 col-md-6 col-sm-12 mb-4')
             const image= createbootstrap('img', 'img-thumbnail');
             image.setAttribute("src", `${content.results[i].multimedia[4].url}`);
            const cardbody= createbootstrap('div', 'card-body');
            const cardheading= createbootstrap('h1','cardheading')
            cardheading.innerHTML = `${content.results[i].section}`;
            const created_date=createbootstrap('p', 'created-date');
            created_date.innerHTML = 'News created on: '  + `${content.results[i].created_date}`;

            const card_text=createbootstrap('h3', 'card-text');
            card_text.innerHTML = `${content.results[i].title}`;
            const card_para=createbootstrap('p', 'card-para');
            card_para.innerHTML=`${content.results[i].abstract}`;
            const card_author=createbootstrap('p', 'card-auth');
            card_author.innerHTML=`${content.results[i].byline}`;
            const button=createbootstrap('a', 'btn btn-primary');
            button.innerHTML='Continue reading...'
             button.setAttribute("href", `${content.results[i].url}`);
            button.setAttribute("target", "_blank")


        // appending cards
            imagediv.append(image);
            cardbody.append(cardheading,created_date,card_text,card_para,button,card_author);
            card.append(cardbody);
            col.append(card);
            cardRow.append(col,imagediv)
            Row.append(cardRow)
            column.append(Row)
            container1.append(column)
            document.body.append(container1)
    }
}

// Creating HTML Elements
    function createbootstrap(ele, className = "") {
    const element = document.createElement(ele);
    element.setAttribute("class", className);
    return element;
  }

// Creating Todays date
function toDaysDate(){
    var today = new Date();
    const months = [ "0","January", "February","March","April","May","June","July","August","September","October","November","December",];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",];
    var date = today.getDate();
    var month = today.getMonth() + 1
    var year= today.getFullYear();
    var day = today.getDay();

    today = days[day] + '- '  + months[month] + '   - ' + date + '  - ' + year;
    document.write(today);
}