var prog = ['Большой','Форрест Гамп','Хитман: Агент 47','Джон Уик',
'Не пойман - не вор','Мир дикого запада','Бумажный дом','Ходячие Мертвецы',
'Игра в кальмара','Мандолорец','Неисправимый Рон','Митчелы против Роботов',
'Лоракс','Angry Birds','Гадкий Я','Бетмен - Ниндзя','Аниматрица',
'Дитя чудовища','Бетмен: Рыцарь Готема','Унесенные призраками']; 
var $ = document.getElementById;

var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");
let infa = [];
let bu = document.getElementById('btn');
let input = document.getElementById('mySearch');
const rez = document.querySelector(".rez"); 
let ul = document.querySelector(".okno");
let text = document.querySelector(".moSearch");
let button_for_spisok = document.querySelector(".button_for_spisok");
let okno = document.querySelector(".okno");
let next = document.querySelector(".next");
let nexut = document.querySelector(".nexut");
var xxx = 0;
var width = 312; // ширина картинки
var mmm = 4.60;
var list = document.querySelector(".images");
var list1 = document.querySelector(".images1");
var list2 = document.querySelector(".images2");
var list3 = document.querySelector(".images3");
var pictures = document.querySelectorAll("a");  
var position = 0;  
var position1 = 312;  
var page = document.querySelector(".body");


const ssilki = [ 
  { 
    name: "1", 
    href: "index1.html", 
     
  },
  { 
    name: "2", 
    href: "index2.html", 
     
  },
  { 
    name: "3", 
    href: "index3.html", 
     
  },
  { 
    name: "4", 
    href: "index4.html", 
     
  },
  { 
    name: "5", 
    href: "index5.html", 
     
  },
  { 
    name: "6", 
    href: "index6.html", 
     
  },
  { 
    name: "7", 
    href: "index7.html", 
     
  },
  { 
    name: "8", 
    href: "index8.html", 
     
  },
  { 
    name: "9", 
    href: "index9.html", 
     
  }, ];

const movies = [ 
    { 
      name: "Большой", 
      img: "./images/blu-ray-bolshoj_0-600x780.jpg", 
      url: "bolshoi.html", 
    }, 
    { 
      name: "Форрест Гамп", 
      img: "./images/forrest_gamp.jpg", 
      url: "ForestGamp.html", 
    }, 
    { 
        name: "Хитман: Агент 47", 
        img: "./images/Hitman.jpg", 
        url: "hitman.html", 
      }, 
      { 
        name: "Джон Уик", 
        img: "./images/John Wick.jpg", 
        url: "DzonYik.html", 
      }, 
      { 
        name: "Не пойман - не вор", 
        img: "./images/r386x544x4.webp", 
        url: "nepoiman-nevor.html", 
      }, 
      { 
        name: "Мир дикого запада", 
        img: "./images/kxs158YJ.jpg", 
        url: "mirdikogozapada.html", 
      }, 
      { 
          name: "Бумажный дом", 
          img: "./images/29acd78463da54677682c7d405dd0e55.png", 
          url: "bumazniydom.html", 
        }, 
        { 
          name: "Ходячие Мертвецы", 
          img: "./images/1630319-1466383.jpg", 
          url: "hodiatiemertvetsi.html", 
        }, 
        { 
          name: "Игра в кальмара", 
          img: "./images/igra-v-kalmara.jpg", 
          url: "igravkalmara.html", 
        }, 
        { 
          name: "Мандолорец", 
          img: "./images/QppqcNpUKuWNBBhNWe4f_g.jpeg", 
          url: "mandolorets.html", 
        }, 
        { 
            name: "Неисправимый Рон", 
            img: "./images/w1500_50191334.jpg", 
            url: "neispravimiyron.html", 
          }, 
          { 
              name: "Митчелы против Роботов", 
              img: "./images/1652980101855.jp", 
              url: "mitseliprosivrobotov.html", 
            }, 
            { 
              name: "Лоракс", 
              img: "./images/1629659-2045437.jpeg", 
              url: "lorax.html", 
            }, 
            { 
              name: "Angry Birds", 
              img: "./images/163829R1.jpg", 
              url: "angrybirds.html", 
            }, 
            { 
              name: "Гадкий Я", 
              img: "./images/1625891851_gadkij-ja-poster.jpg", 
              url: "gadkiyYa.html",   
            }, 
            { 
                name: "Бетмен - Ниндзя", 
                img: "./images/batman-ninja-cast-autographed-2018-wondercon-poster-eric-bauza-adam-croasdell-tony-hale-tom-kenny-roger-craig-smith-14.jpg", 
                url: "betmenninja.html", 
              }, 
              { 
                  name: "Аниматрица", 
                  img: "./images/107263.jpg", 
                  url: "animatritsa.html", 
                }, 
                { 
                  name: "Дитя чудовища", 
                  img: "./images/6YbUJj5pw2yzmzRAkqtL8XHv007Jgb3CGzNJ442g.jpeg", 
                  url: "ditsiatsudovisa.html", 
                }, 
                { 
                  name: "Бетмен: Рыцарь Готема", 
                  img: "./images/3i1o0sHBP0VUpuSVmkdCRKYoDBC.jpg", 
                  url: "betmenritsargotema.html", 
                }, 
                { 
                  name: "Унесенные призраками", 
                  img: "./images/poster_fr (1).jpg", 
                  url: "unesennieprizrakami.html", 
                }, 
  ]; 
   
  text.addEventListener("keyup", function () { 
    let value = text.value.toUpperCase(); 
   
    let result = movies.filter((item) => { 
      console.log(item.img); 
      if (!value) { 
        return; 
      } 
      return item.name.toUpperCase().includes(value); 
    }); 
    const final = result 
      .map((item) => {
        return `<div class="sss">
        <a class='a-in-okno' href=${item.url}>
                <div class=""><p class='a-in-okno'>${item.name}</p></div></a> 
        </div>
        `; 
      }) 
      .join(""); 
    ul.innerHTML = final; 
  });
 
  themeButton.onclick = function() {
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
    };

    
    

    
   
  //   $(document).ready(function () {
  //     $('.nexut').bxSlider();
  // });
      

    document.querySelector(".arrowrev").onclick = function() {
      
      console.log(xxx); 
      xxx = xxx - 1
      position += mmm; 
      position = Math.max(position, -width * (pictures.length - 1));
      next.style.marginLeft = position + "vw";
      
    };
    document.querySelector(".arrowext").onclick = function() {
      
      console.log(xxx); 
        xxx = xxx + 1
        position -= mmm;
        position = Math.max(position, -width * (pictures.length - 1));
        next.style.marginLeft = position + "vw";
       
        };
        
          
    
      
