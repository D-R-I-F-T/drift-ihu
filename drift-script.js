document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const target = document.getElementById(item.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

function toggleNav() {
    const sidebar = document.querySelector(".bac-nav");
    sidebar.classList.toggle("open");
}

const posts = {
    latest: {
        title: "PREVENTIVE TECHNICAL INSPECTION OF VEHICLES OF STUDENTS, TEACHING AND ADMINISTRATIVE STAFF OF IHU",
        image: "",
        text: `The International Hellenic University, through the Department of Industrial Engineering and Management (IEM),<br><br>
        offers free preventive technical inspection (without the possibility of issuing a technical inspection certificate) <br><br>
        to all vehicles of students, teaching and administrative staff at the facilities of the Alexandria University Campus <br><br>
        of IHU on the ground floor of the "Daedalus" Building in the Vehicle Technical Inspection Laboratory.<br><br>

        With the safety of students and all members of the university community of the International Hellenic University in mind,<br><br> 
        the following checks are carried out by members of the Department of IEM:<br><br>

-Toe-in check (alignment)<br>
-Suspension check.<br>
-Braking system and parking brake check on the brake caliper<br>
-Light check for intensity and inclination<br>
-Visual check in the inspection pit<br>
-Exhaust gas check<br><br>

The Vehicle Technical Inspection Laboratory will operate every Friday from 09:00 to 12:00.<br><br>
To schedule a vehicle technical inspection, it is necessary to complete the following form:<br><br>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSf76vAlxXfH7rgVIiR9jfZuKXtV-MWEPKziRt50O2knRJaGaA/viewform" target="_blank" class="popup-link">Schedule Vehicle Technical Inspection</a><br><br>
`,

    },
    post1: {
    title: "Now On Instagram",
    image: "images/post1.jpg",
    text: `We’re officially live on Instagram!<br><br>
DRIFT IHU is taking the next step in connecting with our community, sharing our journey, and giving you a closer look behind the scenes.<br><br>

From car development and testing sessions to team moments and competition highlights, our Instagram page will be the place where everything happens in real time. Follow our progress, see exclusive content, and stay up to date with the latest news, announcements, and milestones of the team.<br><br>

This is more than just a social media account — it’s a window into our passion, hard work, and vision for Formula Student.<br><br>


<a href="https://www.instagram.com/_drift.efs_/?igsh=YjA3dHlsZHJ1bWto#" target="_blank" class="popup-link">
Follow us and be part of the DRIFT IHU journey</a>`
    },

    
    post2: {
        title: "Our Unique Logo",
        image: "images/post2.jpg",
        text: `
Our new logo reflects our team's identity and dedication to innovation.<br><br>

It was designed based on:<br>
<ul>
    <li>The speed and dynamics of Formula Student</li>
    <li>The unique philosophy of DRIFT IHU</li>
    <li>Technological advancement and precision</li>
</ul>

Check out the visual below:<br>
<img src="driftlogo.jpg" alt="Our Unique Logo" style="width: 40%; height: 40%; border-radius: 10px; margin-top: 15px;"><br><br>

Follow us for more updates and exclusive content!
`
    }
};

function openPost(id) {
    document.getElementById("popup-title").innerText = posts[id].title;
    document.getElementById("popup-text").innerHTML = posts[id].text;
    document.getElementById("popup-image").src = posts[id].image;
    document.getElementById("popup").style.display = "flex";

    document.body.style.overflow = "hidden"; // σταματά scroll
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto";
}

function updateLiveBox() {
    const latestKey = Object.keys(posts)[0]; 
    const latest = posts[latestKey];

    document.getElementById("live-title").innerText = posts.post1.title;
    document.getElementById("live-text").innerText = "We’re officially live on Instagram! DRIFT IHU is taking the next step in connecting with our community...";
}

// ➤ Καλείται όταν φορτώνει η σελίδα
document.addEventListener("DOMContentLoaded", updateLiveBox);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.bac-nav');

    // Κλείνει ΜΟΝΟ στο mobile
    if (window.innerWidth <= 768) {
      nav.classList.remove('open');
    }
  });
});

document.addEventListener('click', (e) => {
  const nav = document.querySelector('.bac-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (
    nav.classList.contains('open') &&
    !nav.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    nav.classList.remove('open');
  }
});


