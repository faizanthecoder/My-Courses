// let course=document.getElementById("courses")
// let dropdown=document.querySelector(".drop-down")

// course.addEventListener("onmo",function(){
//     dropdown.classList.add("toggle")
// })
// course.addEventListener("mouseenter",function(){
//     dropdown.classList.add("toggle")
// })

function showDropdown() {
  document.getElementById("myDropdown").style.display = "block";
}

function hideDropdown() {
  document.getElementById("myDropdown").style.display = "none";
}

function searchCourses() {
    // 1. Get the search text
    let input = document.getElementById('courseSearch');
    let filter = input.value.toLowerCase();
    
    // 2. Get the container and all the cards
    let section = document.getElementById("sec-2");
    let cards = section.getElementsByClassName('card');

    // 3. Loop through every card
    for (let i = 0; i < cards.length; i++) {
        // Get the h4 tag inside the current card
        let title = cards[i].getElementsByTagName("h4")[0];
        let textValue = title.textContent || title.innerText;

        // 4. If the text matches, show the card; otherwise, hide it
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = ""; // Show
        } else {
            cards[i].style.display = "none"; // Hide
        }
    }
}

function toggleHidden() {
      const hiddenCourses = document.querySelectorAll('.hidden-course');
      const btn = document.getElementById('viewMoreTxt');
      const isHidden = !hiddenCourses[0].classList.contains('show');

      hiddenCourses.forEach(card => {
        if (isHidden) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });

      btn.innerHTML = isHidden ? "View Less Courses ▴" : "View More Courses ▾";
    }
