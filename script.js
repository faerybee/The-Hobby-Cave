let destinations = {
  "paris": {
    label: "Paris, France",
    budget: {
      morning: [["Visit Notre-Dame Cathedral & Île de la Cité walk", "Free"], ["Explore the Marais district & window shop Rue des Francs-Bourgeois", "Free"], ["Sunrise at Pont des Arts (Love Lock Bridge) & stroll along the Seine", "Free"]],
      afternoon: [["Grab a crêpe on Rue de Buci and picnic in Jardin du Luxembourg", "~৳880"], ["Browse Musée d'Orsay (Impressionist art)", "~৳1,760"], ["Walk up Montmartre & visit Sacré-Cœur for panoramic views", "Free"]],
      evening: [["Dinner at a classic French brasserie — steak-frites + wine", "~৳2,750"], ["Take-away falafel from L'As du Fallafel in the Marais", "~৳880"], ["Picnic under the Eiffel Tower — watch the light show at 10 PM", "~৳1,100"]]
    },
    mid: {
      morning: [["Eiffel Tower visit (timed ticket, 2nd floor)", "~৳3,080"], ["Louvre Museum — 3-hour guided audio tour", "~৳2,420"], ["Day trip to Palace of Versailles by RER train", "~৳4,180 total"]],
      afternoon: [["Guided food tour of Montmartre with cheese & wine stops", "~৳6,050"], ["Afternoon cruise on the Seine River with Bateaux Mouches", "~৳1,980"], ["Shopping at Galeries Lafayette & free rooftop terrace", "~৳0–5,500"]],
      evening: [["Dinner at a bistro in Saint-Germain-des-Prés", "~৳4,950"], ["Wine & cheese tasting at a Paris cave", "~৳6,050"], ["Dinner cruise on the Seine at sunset", "~৳8,250"]]
    },
    luxury: {
      morning: [["Private guided Louvre tour — skip the line, expert commentary", "~৳16,500"], ["Eiffel Tower summit at dawn, private guide & champagne", "~৳22,000"], ["Exclusive Versailles guided tour with private gardens access", "~৳27,500"]],
      afternoon: [["Lunch at a Michelin-starred brasserie (Septime)", "~৳19,800"], ["Private fashion styling tour of Le Marais boutiques", "~৳13,200"], ["Champagne afternoon tea at Plaza Athénée", "~৳11,000"]],
      evening: [["Dinner at Jules Verne restaurant, Eiffel Tower (Michelin star)", "~৳27,500"], ["Private cabaret show at Moulin Rouge, VIP front row", "~৳22,000"], ["Dinner cruise with live jazz & champagne on the Seine", "~৳19,800"]]
    },
    dailyCost: { budget: 5500, mid: 13200, luxury: 29700 }
  },
  "tokyo": {
    label: "Tokyo, Japan",
    budget: {
      morning: [["Sunrise at Senso-ji Temple in Asakusa before the crowds", "Free"], ["Walk across Shibuya Crossing & explore the area", "Free"], ["Visit Shinjuku Gyoen National Park for a peaceful morning", "~৳220"]],
      afternoon: [["Lunch at a conveyor-belt sushi restaurant (kaitenzushi)", "~৳1,100"], ["Explore Harajuku's Takeshita Street — street food & quirky shops", "~৳1,100"], ["Visit teamLab Borderless digital art museum", "~৳3,520"]],
      evening: [["Dinner at a ramen noodle shop in Shinjuku", "~৳880"], ["Izakaya (Japanese pub) — yakitori skewers & cold beer", "~৳1,650"], ["Evening walk through Kabukicho neon district", "Free"]]
    },
    mid: {
      morning: [["Tokyo Skytree Observatory — 350m views of the city", "~৳2,420"], ["Morning sushi breakfast at Toyosu Fish Market", "~৳4,400"], ["Guided Asakusa temple walk with tea ceremony", "~৳4,950"]],
      afternoon: [["Afternoon in Akihabara electronics & anime district", "~৳3,300"], ["Meiji Shrine & Yoyogi Park tour with guide", "~৳3,300"], ["teamLab Planets immersive digital art", "~৳3,300"]],
      evening: [["Dinner at a teppanyaki restaurant — chef cooks at your table", "~৳6,600"], ["Shinjuku Golden Gai — tiny bar-hopping alley", "~৳3,300"], ["Shibuya Sky rooftop observation deck at night", "~৳2,200"]]
    },
    luxury: {
      morning: [["Sushi masterclass with Tsukiji market master chef", "~৳16,500"], ["Private kimono dressing & guided Yanaka heritage tour", "~৳13,200"], ["Private helicopter tour over Tokyo & Mount Fuji", "~৳44,000"]],
      afternoon: [["Lunch omakase at Michelin-starred sushi counter", "~৳27,500"], ["Private calligraphy & ikebana flower arranging class", "~৳11,000"], ["Afternoon at Aman Tokyo spa & pool", "~৳16,500"]],
      evening: [["Dinner kaiseki at a traditional ryotei (multi-course Japanese)", "~৳33,000"], ["Private rooftop dinner at Park Hyatt New York Bar", "~৳22,000"], ["Exclusive geisha cultural dinner experience in Asakusa", "~৳38,500"]]
    },
    dailyCost: { budget: 4950, mid: 12100, luxury: 30800 }
  },
  "rome": {
    label: "Rome, Italy",
    budget: {
      morning: [["Colosseum & Roman Forum visit (book online to skip queue)", "~৳2,200"], ["Free walking tour of the historic centre starting at Piazza Venezia", "Free (tip)"], ["Visit Pantheon & surrounding piazzas in the morning calm", "~৳550"]],
      afternoon: [["Pizza al taglio (pizza by the slice) lunch near Campo de' Fiori", "~৳440"], ["Trevi Fountain & Spanish Steps — best mid-afternoon", "Free"], ["Explore Trastevere neighbourhood on foot", "Free"]],
      evening: [["Dinner at a Trastevere trattoria — cacio e pepe + house wine", "~৳2,420"], ["Gelato crawl: compare 3 gelaterias in the centre", "~৳990"], ["Evening passeggiata (stroll) along Via del Corso", "Free"]]
    },
    mid: {
      morning: [["Vatican Museums & Sistine Chapel — booked timed entry", "~৳2,750"], ["Borghese Gallery visit (pre-booking essential)", "~৳1,650"], ["Palatine Hill & Circus Maximus guided walk", "~৳3,300"]],
      afternoon: [["Guided food tour of Testaccio market", "~৳6,050"], ["Aperol spritz at a rooftop bar near the Pantheon", "~৳1,980"], ["Cooking class: fresh pasta & tiramisu", "~৳8,250"]],
      evening: [["Dinner at a mid-range osteria in Pigneto (local neighbourhood)", "~৳4,400"], ["Wine tasting evening at Vinoroma wine bar", "~৳4,950"], ["Illuminated sites night tour — Piazzas & Fountains lit up", "~৳3,300"]]
    },
    luxury: {
      morning: [["Private Vatican early-morning access before public opening", "~৳22,000"], ["Private Colosseum underground & arena floor exclusive tour", "~৳19,800"], ["Exclusive Borghese Gallery private viewing with art historian", "~৳16,500"]],
      afternoon: [["Michelin-starred lunch at Il Pagliaccio or Aroma", "~৳22,000"], ["Private truffle hunting day trip to Umbria with chef dinner", "~৳33,000"], ["Personal shopping at Via Condotti luxury boutiques", "~৳11,000+"]],
      evening: [["Dinner at Aroma restaurant — terrace with Colosseum view (Michelin star)", "~৳27,500"], ["Private rooftop dinner at a Palazzo overlooking the Roman Forum", "~৳33,000"], ["Exclusive opera inside a historic church", "~৳13,200"]]
    },
    dailyCost: { budget: 6050, mid: 13750, luxury: 30800 }
  },
  "bali": {
    label: "Bali, Indonesia",
    budget: {
      morning: [["Sunrise hike at Mount Batur volcano (guided group)", "~৳3,850"], ["Morning yoga class in Ubud rice field setting", "~৳1,320"], ["Visit Tegalalang Rice Terrace early before crowds arrive", "~৳220"]],
      afternoon: [["Lunch at a warung (local café) — nasi goreng + fresh juice", "~৳440"], ["Explore Ubud Sacred Monkey Forest Sanctuary", "~৳550"], ["Rent a scooter & explore Ubud's back roads", "~৳660/day"]],
      evening: [["Dinner at a local warung — mixed rice (nasi campur)", "~৳330"], ["Watch Kecak fire dance at Uluwatu Temple at sunset", "~৳1,100"], ["Evening walk through Ubud night market", "Free"]]
    },
    mid: {
      morning: [["Whitewater rafting on the Ayung River through the jungle", "~৳3,850"], ["Silver jewellery-making class in Celuk village", "~৳3,300"], ["Guided temple tour: Tirta Empul holy spring", "~৳2,200"]],
      afternoon: [["Balinese cooking class — market visit + cook 5 dishes", "~৳3,850"], ["Afternoon at a mid-range villa pool & spa treatment", "~৳4,400"], ["ATV quad biking through Ubud rice fields & jungle trails", "~৳4,400"]],
      evening: [["Dinner at Locavore or Hujan Locale (Ubud's best)", "~৳5,500"], ["Traditional Legong dance performance with dinner", "~৳2,750"], ["Sunset cocktails at a beach club in Seminyak", "~৳3,300"]]
    },
    luxury: {
      morning: [["Private sunrise at Mount Agung with personal guide & breakfast", "~৳13,200"], ["Private cooking class with a Bali celebrity chef", "~৳16,500"], ["Helicopter tour over Bali's volcanoes & rice terraces", "~৳38,500"]],
      afternoon: [["Floating breakfast & private villa pool at COMO Uma Ubud", "~৳8,800"], ["Luxury spa: 3-hour Balinese royal treatment at Four Seasons", "~৳22,000"], ["Private boat charter to Nusa Penida & snorkelling", "~৳19,800"]],
      evening: [["Private cliff-top dinner at Karang restaurant, Bulgari Resort", "~৳27,500"], ["Exclusive sunset dinner cruise with Balinese dance", "~৳16,500"], ["Private beachside barbecue with personal chef", "~৳22,000"]]
    },
    dailyCost: { budget: 3850, mid: 9900, luxury: 26400 }
  },
  "new york": {
    label: "New York City, USA",
    budget: {
      morning: [["Walk across Brooklyn Bridge for skyline views", "Free"], ["Central Park stroll — Bethesda Fountain, Bow Bridge, Great Lawn", "Free"], ["Staten Island Ferry for FREE views of Statue of Liberty", "Free"]],
      afternoon: [["Pizza slice on Mott Street, Little Italy", "~৳440"], ["Explore MoMA (Museum of Modern Art)", "Free on Fridays / ~৳2,750"], ["High Line elevated park walk in Chelsea", "Free"]],
      evening: [["TKTS booth for same-day discounted Broadway tickets", "~৳6,600"], ["Dinner at Xi'an Famous Foods — hand-pulled noodles", "~৳1,320"], ["Night walk across the Manhattan Bridge pedestrian path", "Free"]]
    },
    mid: {
      morning: [["Top of the Rock Observatory at Rockefeller Center", "~৳4,400"], ["Guided 2-hour food tour of Chelsea Market & Meatpacking District", "~৳6,600"], ["Metropolitan Museum of Art — all-day visit", "~৳3,300"]],
      afternoon: [["Whitney Museum of American Art + High Line walk", "~৳2,750"], ["Afternoon in Brooklyn DUMBO — pier views & shops", "~৳2,200"], ["Smorgasburg outdoor food market in Williamsburg (Saturdays)", "~৳2,750 food"]],
      evening: [["Broadway show in Midtown", "~৳11,000"], ["Dinner in the East Village — ramen at Ippudo", "~৳5,500"], ["Rooftop bar at 230 Fifth with Midtown views", "~৳2,750 drinks"]]
    },
    luxury: {
      morning: [["Private helicopter tour over Manhattan skyline", "~৳27,500"], ["VIP Statue of Liberty crown tickets with private guide", "~৳11,000"], ["Private guided Metropolitan Museum access before opening", "~৳22,000"]],
      afternoon: [["Lunch at Le Bernardin or Eleven Madison Park (Michelin 3-star)", "~৳38,500"], ["Private art gallery tour of Chelsea with an art advisor", "~৳16,500"], ["Personal shopping at Bergdorf Goodman Fifth Avenue", "~৳11,000 stylist fee"]],
      evening: [["VIP Broadway front-row tickets with backstage tour", "~৳27,500"], ["Dinner at Per Se or Daniel — NYC's finest tasting menus", "~৳38,500"], ["Private Empire State Building midnight rooftop access", "~৳16,500"]]
    },
    dailyCost: { budget: 8800, mid: 17600, luxury: 41800 }
  },
  "santorini": {
    label: "Santorini, Greece",
    budget: {
      morning: [["Sunrise walk from Fira to Oia along the caldera rim (10km)", "Free"], ["Visit the black-sand beach of Perissa by local bus", "~৳220 bus"], ["Akrotiri archaeological ruins — Bronze Age city", "~৳1,320"]],
      afternoon: [["Gyros & souvlaki lunch in Fira town", "~৳880"], ["Explore Pyrgos village — highest point, great caldera views", "Free"], ["Black Beach sunbathing & swim at Kamari Beach", "Free"]],
      evening: [["Sunset viewing at Oia castle ruins (arrive 1hr early!)", "Free"], ["Dinner at a local taverna in Fira — fresh grilled fish", "~৳2,420"], ["Glass of local Assyrtiko wine at a cave bar in Oia", "~৳880"]]
    },
    mid: {
      morning: [["Caldera boat tour: hot springs, Thirassia island, captain's lunch", "~৳6,050"], ["ATV quad bike hire & self-guided island tour", "~৳4,950"], ["Guided wine tasting at Santo Wines cliff-top winery", "~৳2,750"]],
      afternoon: [["Catamaran sailing cruise — snorkelling & sunset BBQ on deck", "~৳9,350"], ["Visit Skaros Rock hiking trail & swim in the caldera", "Free"], ["Spa afternoon at a Fira boutique hotel", "~৳6,600"]],
      evening: [["Sunset cocktails at Oia Ammoudi Bay seafood taverna", "~৳5,500"], ["Dinner at a restaurant with caldera view terrace in Imerovigli", "~৳6,050"], ["Night photography walk through Oia's blue-domed alleyways", "Free"]]
    },
    luxury: {
      morning: [["Private catamaran charter — caldera & volcano, breakfast onboard", "~৳66,000 (split)"], ["Helicopter tour over all Cyclades islands", "~৳55,000"], ["Private sunrise yoga session on a cave villa terrace, Oia", "~৳11,000"]],
      afternoon: [["Michelin dining at Selene restaurant, Pyrgos village", "~৳22,000"], ["Private donkey ride & wine tour of Santorini's vineyards", "~৳16,500"], ["Afternoon at Grace Santorini hotel infinity pool & spa", "~৳13,200"]],
      evening: [["Dinner at Lycabettus restaurant with 360° caldera view", "~৳22,000"], ["Private sunset sail with personal chef & Champagne", "~৳44,000"], ["Exclusive rooftop dinner at Canaves Oia Epitome hotel", "~৳33,000"]]
    },
    dailyCost: { budget: 7150, mid: 15950, luxury: 38500 }
  }
};

let plannerForm = document.getElementById('planner-form');
if (plannerForm) {
  plannerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let destKey = document.getElementById('dest').value;
    let days = parseInt(document.getElementById('days').value);
    let budget = document.getElementById('budget').value;
    let data = destinations[destKey];

    if (!data) { return; }

    let plan = data[budget];
    let costPer = data.dailyCost[budget];

    document.getElementById('itin-title').innerText = days + '-Day Trip to ' + data.label;

    let html = '';
    let total = 0;

    for (let i = 1; i <= days; i++) {
      let idx = (i - 1) % plan.morning.length;
      let morning = plan.morning[idx];
      let after = plan.afternoon[idx];
      let evening = plan.evening[idx];

      let dayCost = costPer + (Math.floor(Math.random() * 2200) - 1100);
      if (dayCost < 0) { dayCost = 0; }
      total += dayCost;

      html += '<div class="itin-day-box">';
      html += '<h4 class="itin-day-title">Day ' + i + '</h4>';
      html += '<ul class="itin-day-list">';
      html += '<li class="itin-day-item"><strong>Morning:</strong> ' + morning[0] + ' <em class="highlight">(' + morning[1] + ')</em></li>';
      html += '<li class="itin-day-item"><strong>Afternoon:</strong> ' + after[0] + ' <em class="highlight">(' + after[1] + ')</em></li>';
      html += '<li class="itin-day-item"><strong>Evening:</strong> ' + evening[0] + ' <em class="highlight">(' + evening[1] + ')</em></li>';
      html += '</ul></div>';
    }

    html += '<div class="itin-total-box">';
    html += '<p class="itin-total-label"><strong>Estimated Total for ' + days + ' Days in ' + data.label + ':</strong></p>';
    html += '<p class="itin-total-price">~৳' + total.toLocaleString() + '</p>';
    html += '<p class="itin-total-note">Flights & accommodation not included.</p>';
    html += '</div>';

    document.getElementById('itin-days').innerHTML = html;
    document.getElementById('itin-result').style.display = 'block';
    document.getElementById('itin-result').scrollIntoView({ behavior: 'smooth' });
  });
}

let searchBox = document.getElementById('dest-search');
if (searchBox) {
  searchBox.addEventListener('keyup', function () {
    let query = searchBox.value.toLowerCase();
    let cards = document.querySelectorAll('.dest-card-wrap');
    for (let i = 0; i < cards.length; i++) {
      let name = cards[i].getAttribute('data-name').toLowerCase();
      if (name.indexOf(query) !== -1) {
        cards[i].style.display = 'block';
      } else {
        cards[i].style.display = 'none';
      }
    }
  });
}

function surpriseMe() {
  let pages = ['paris.html', 'tokyo.html', 'rome.html', 'bali.html', 'newyork.html', 'santorini.html'];
  let pick = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = pick;
}

let countdownBtn = document.getElementById('countdown-btn');
if (countdownBtn) {
  countdownBtn.addEventListener('click', function () {
    let dateInput = document.getElementById('trip-date').value;
    if (!dateInput) {
      document.getElementById('countdown-result').innerText = 'Please pick a date first!';
      return;
    }
    let today = new Date();
    let tripDate = new Date(dateInput);
    let diffDays = Math.ceil((tripDate - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      document.getElementById('countdown-result').innerText = 'That date has already passed! Pick a future date.';
    } else if (diffDays === 0) {
      document.getElementById('countdown-result').innerText = 'Your trip is TODAY! Have an amazing time!';
    } else {
      document.getElementById('countdown-result').innerText = 'Only ' + diffDays + ' days until your trip!';
    }
  });
}

let topBtn = document.getElementById('back-to-top');
if (topBtn) {
  window.addEventListener('scroll', function () {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

let navLinks = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
    let targetId = this.getAttribute('href').substring(1);
    let target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function toggleDone(cb) {
  if (cb.checked) {
    cb.parentElement.classList.add('done');
  } else {
    cb.parentElement.classList.remove('done');
  }
}

function addItem() {
  let input = document.getElementById('new-item');
  let text = input.value.trim();
  if (text === '') { return; }

  let li = document.createElement('li');
  li.innerHTML = '<input type="checkbox" onclick="toggleDone(this)"> <label class="checklist-text">' + text + '</label>';
  document.getElementById('checklist').appendChild(li);
  input.value = '';
}
