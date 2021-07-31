
// Menu Items.
const menu = [
    {
        id: 1,
        img: "./IMAGES/photo-1.jpg",
        category: "breakfast",
        title: "breakfast title...",
        price: 15.97,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 2,
        img: "./IMAGES/photo-2.jpg",
        category: "lunch",
        title: "lunch title...",
        price: 13.90,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 3,
        img: "./IMAGES/photo-3.jpg",
        category: "breakfast",
        title: "breakfast title...",
        price: 15.90,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 4,
        img: "./IMAGES/photo-4.jpg",
        category: "dinner",
        title: "dinner title...",
        price: 10.00,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 5,
        img: "./IMAGES/photo-5.jpg",
        category: "lunch",
        title: "lunch title...",
        price: 20.04,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 6,
        img: "./IMAGES/photo-6.jpg",
        category: "breakfast",
        title: "breakfast title...",
        price: 25.90,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 7,
        img: "./IMAGES/photo-7.jpg",
        category: "breakfast",
        title: "breakfast title...",
        price: 10.97,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 8,
        img: "./IMAGES/photo-8.jpg",
        category: "dinner",
        title: "dinner title...",
        price: 16.11,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 9,
        img: "./IMAGES/photo-9.jpg",
        category: "lunch",
        title: "lunch title...",
        price: 15.91,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 10,
        img: "./IMAGES/photo-10.jpg",
        category: "breakfast",
        title: "breakfast title...",
        price: 15.00,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 11,
        img: "./IMAGES/photo-11.jpg",
        category: "dinner",
        title: "dinner title...",
        price: 17.97,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    },
    {
        id: 12,
        img: "./IMAGES/photo-12.jpg",
        category: "lunch",
        title: "lunch title...",
        price: 15.07,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo earum sequi molestiae tempore veniam cum quo neque consequatur porro?"
    }
];


// retrive createButtons on DOMContentLoaded.
window.addEventListener( 'DOMContentLoaded', function() {

     createButtons();
     renderMenuItems(menu);
     //retrive menuFilter function.
     menuFilter();

} );

// DOM elements.
let menu__buttons = document.querySelector('.menu__buttons');
const menu__section = document.querySelector('.menu__section');

// create buttons.
function createButtons() {

    // get an array of unique categories.
    const categories = menu.reduce( (values,item) => {
        
        if( !values.includes(item.category) ) {
            values.push(item.category);
        }

        return values;

    }, ["all"] );

    // create buttons
    const buttons = categories.map( category => {

       return `<button data-id=${category} class="menu__button">
                   ${category}
              </button>`;

    } );
    
    menu__buttons.innerHTML = buttons.join('');

    
    
}

function menuFilter() {

    let buttons = menu__buttons.childNodes;
    buttons = Array.from(buttons)

    buttons.forEach( button => {
        
        button.addEventListener( 'click', e => {

            const category = e.target.dataset.id;

            const thumnailsFiltered = menu.filter( menuItem => {

                if( menuItem.category === category ) {
                    return menuItem;
                }

            } );

            if( category === 'all' ) {
                renderMenuItems(menu);
            }
            
            else {
                renderMenuItems(thumnailsFiltered);
            }

        } );

    } );

}


// renderMenuItems function.
function renderMenuItems(array) {

      const menuItems = array.map( menuItem => {
 
           return `<!-- menu item-->
           <div class="menu__item">

               <div class="menu__photo-wrapper">
                   <img src=${menuItem.img} alt="menu item" class="menu__photo">
               </div>

               <div class="menu__description">
                   <header class="menu__heading--flex">
                       <h4 class="menu__heading">${menuItem.title}</h4>
                       <h4 class="menu__heading menu__price">$${menuItem.price}</h4>
                   </header>
                   <div class="menu__heading--underline"></div>
                   <p class="menu__text">${menuItem.description}</p>
               </div>

           </div>
           <!-- menu item END-->`
           
        });
        
       menu__section.innerHTML = menuItems.join('');      
}

