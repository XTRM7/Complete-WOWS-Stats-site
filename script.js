function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./WOWS (1).png
    ./WOWS (2).png
    ./WOWS (3).png
    ./WOWS (4).png
    ./WOWS (5).png
    ./WOWS (6).png
    ./WOWS (7).png
    ./WOWS (8).png
    ./WOWS (9).png
    ./WOWS (10).png
    ./WOWS (11).png
    ./WOWS (12).png
    ./WOWS (13).png
    ./WOWS (14).png
    ./WOWS (15).png
    ./WOWS (16).png
    ./WOWS (17).png
    ./WOWS (18).png
    ./WOWS (19).png
    ./WOWS (20).png
    ./WOWS (21).png
    ./WOWS (22).png
    ./WOWS (23).png
    ./WOWS (24).png
    ./WOWS (25).png
    ./WOWS (26).png
    ./WOWS (27).png
    ./WOWS (28).png
    ./WOWS (29).png
    ./WOWS (30).png
    ./WOWS (31).png
    ./WOWS (32).png
    ./WOWS (33).png
    ./WOWS (34).png
    ./WOWS (35).png
    ./WOWS (36).png
    ./WOWS (37).png
    ./WOWS (38).png
    ./WOWS (39).png
    ./WOWS (40).png
    ./WOWS (41).png
    ./WOWS (42).png
    ./WOWS (43).png
    ./WOWS (44).png
    ./WOWS (45).png
    ./WOWS (46).png
    ./WOWS (47).png
    ./WOWS (48).png
    ./WOWS (49).png
    ./WOWS (50).png
    ./WOWS (51).png
    ./WOWS (52).png
    ./WOWS (53).png
    ./WOWS (54).png
    ./WOWS (55).png
    ./WOWS (56).png
    ./WOWS (57).png
    ./WOWS (58).png
    ./WOWS (59).png
    ./WOWS (60).png
    ./WOWS (61).png
    ./WOWS (62).png
    ./WOWS (63).png
    ./WOWS (64).png
    ./WOWS (65).png
    ./WOWS (66).png
    ./WOWS (67).png
    ./WOWS (68).png
    ./WOWS (69).png
    ./WOWS (70).png
    ./WOWS (71).png
    ./WOWS (72).png
    ./WOWS (73).png
    ./WOWS (74).png
    ./WOWS (75).png
    ./WOWS (76).png
    ./WOWS (77).png
    ./WOWS (78).png
    ./WOWS (79).png
    ./WOWS (80).png
    ./WOWS (81).png
    ./WOWS (82).png
    ./WOWS (83).png
    ./WOWS (84).png
    ./WOWS (85).png
    ./WOWS (86).png
    ./WOWS (87).png
    ./WOWS (88).png
    ./WOWS (89).png
    ./WOWS (90).png
    ./WOWS (91).png
    ./WOWS (92).png
    ./WOWS (93).png
    ./WOWS (94).png
    ./WOWS (95).png
    ./WOWS (96).png
    ./WOWS (97).png
    ./WOWS (98).png
    ./WOWS (99).png
    ./WOWS (100).png
    ./WOWS (101).png
    ./WOWS (102).png
    ./WOWS (103).png
    ./WOWS (104).png
    ./WOWS (105).png
    ./WOWS (106).png
    ./WOWS (107).png
    ./WOWS (108).png
    ./WOWS (109).png
    ./WOWS (110).png
    ./WOWS (111).png
    ./WOWS (112).png
    ./WOWS (113).png
    ./WOWS (114).png
    ./WOWS (115).png
    ./WOWS (116).png
    ./WOWS (117).png
    ./WOWS (118).png
    ./WOWS (119).png
    ./WOWS (120).png
    ./WOWS (121).png
    ./WOWS (122).png
    ./WOWS (123).png
    ./WOWS (124).png
    ./WOWS (125).png

 `;
  return data.split("\n")[index];
}

const frameCount = 125;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})


function displayTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12

  hours = addZeroPadding(hours);
  minutes = addZeroPadding(minutes);
  seconds = addZeroPadding(seconds);

  var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("time").innerHTML = currentTime;

  setTimeout(displayTime, 1000); // Update time every second
}

function addZeroPadding(number) {
  return (number < 10 ? "0" : "") + number;
}


function handleSearch(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input value
  var USERID = document.querySelector('.search-input').value;


  // Calling of the Api from server //

  const url = "https://api.worldofwarships.asia/wows/account/list/?application_id=1e412189007daae572a277cccf154647&search=" + USERID;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const accountId = data.data[0].account_id;

      const url2 = "https://api.worldofwarships.asia/wows/account/statsbydate/?application_id=1e412189007daae572a277cccf154647&account_id=" + accountId;

      fetch(url2)
        .then(response => response.json())
        .then(data => {


          const player_info = data.data[accountId].pvp;
          const player_info2 = player_info[Object.keys(player_info)[0]];
          for (let prop in player_info2) {

            console.log(prop + ':' + player_info2[prop]);
          }

          // getting the player profile data and putting it in variables //

          const player_battles = player_info2['battles'];
          const player_wins = player_info2['wins'];
          const player_max_xp = player_info2['max_xp'];
          const player_planes_killed = player_info2['planes_killed'];
          const player_frags = player_info2['frags'];
          const player_survived_battles = player_info2['survived_battles'];
          const player_damage_dealt = player_info2['damage_dealt'];

          document.querySelector('#right-text h1').innerHTML = "PLAYER NAME " + USERID;
          document.querySelector('#left-text h1').innerHTML = "NUMBER <br> OF <br> BATTLES <br>" + player_battles;
          document.querySelector('#text1 h1').innerHTML = "NUMBER <br> OF <br> WINS <br>" + player_wins;
          document.querySelector('#text2 h1').innerHTML = "MAX XP EARNED - " + player_max_xp + "<br> PLANE KILLS - " + player_planes_killed + "<br> FRAGS - " + player_frags + "<br> SURVIVED BATTLES - " + player_survived_battles + "<br> DAMAGE DEALT - " + player_damage_dealt;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error('Error:', error);
    });




}