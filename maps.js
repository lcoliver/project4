function initialize() {
        var mapOptions = {
          center: { lat: 39, lng: -96},
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        
        
        //var icon1 = 
        //new google.maps.MarkerImage("images/harvard.gif", null, null, null, new google.maps.Size(21,30));
        
        //Harvard
        var icon1 = {
        url: 'images/harvard.gif',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker = new google.maps.Marker({
        position: { lat: 42.377003, lng: -71.11666},
        map: map,
        title:"Harvard University",
        icon: icon1,
        });
        
        var contentString = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Harvard University</h3>'+
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">The Harvard Radcliffe Rugby Football Club was born of humble beginnings in 1982 '+
        'but scrappy determination, dedicated coaches, and an indomitable spirit have transformed '+
        'the club into a team to be reckoned with in the Northeast. In 1998, Radcliffe captured '+
        'its first-ever Collegiate National Championship, becoming the first championship '+
        'team to be led by an all-female coaching staff. Their first season '+
        'in Division I brought new challenges but a successful finish of third in the Ivy '+
        'Conference (3-2 league record) and an appearance in the DI NRU Final Four. The team '+
        'finished the fall 2011 season ranked 23rd nationally in Division I. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://gocrimson.com/sports/wrugby/index">More info</a></p>'+
        '<iframe width="350" height="200" src="http://www.youtube.com/embed/DZXEY2VzE6g" frameborder="0" allowfullscreen></iframe></div>';
        
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
        
        google.maps.event.addListener(marker, 'click', function() {
          map.setCenter(marker.getPosition());
        });
        
        
        

        //Eastern Illinois
        var icon2 = {
        url: 'images/eastill.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker2 = new google.maps.Marker({
        position: { lat: 39.479964, lng: -88.175364},
        map: map,
        title: 'Eastern Illinois University',
        icon: icon2
        });
        
        var contentString2 = '<div class="mapcontent">'+
            '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Eastern Illinois University</h3>'+
            '<iframe width="350" height="200" src="http://www.youtube.com/embed/ulWmLAkSRXQ" frameborder="0" allowfullscreen></iframe>'+
            '</br><a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.eiupanthers.com/index.aspx?path=wrugby">More info</a></p></div>'
            
        var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });
        
        google.maps.event.addListener(marker2, 'click', function() {
          infowindow2.open(map,marker2);
        });
        
        google.maps.event.addListener(marker2, 'click', function() {
          map.setZoom(5)
          map.setCenter(marker2.getPosition());
        });
        
        
        //West Chester
        var icon3 = {
        url: 'images/wcuseal.gif',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker3 = new google.maps.Marker({
        position: { lat: 39.952024, lng: -75.599627},
        map: map,
        title:"West Chester University",
        icon: icon3
        });
        
        var contentString3 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">West Chester University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">Fresh off its first appearance in the USA Rugby Women&#8217;s Collegiate Division I national semifinals last April, '+
        'West Chester University&#8217;s women&#8217;s rugby squad was ranked seventh in the country by the Rugby Report in '+
        'its preseason publication. It marks the first time in school history that the Golden Rams have appeared in the Top '+
        '10 of Division I schools. </br></br>West Chester went 13-5 last season and reached the national semifinals for the first time' +
        'in school history, bowing to eventual national champion Penn State in the semifinals, before falling to American International '+
        'College in the consolation match two days later. Head coach Tony Deremer returns a very strong and very experienced nucleus from '+
        'that team, including leading scorer Nicole Benedetti. She set a school record for points in a single season in 2013-14 with 145. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.wcupagoldenrams.com/index.aspx?path=wrugby">More info</a></p></div>'
        
        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });
        
        google.maps.event.addListener(marker3, 'click', function() {
          infowindow3.open(map,marker3);
        });
        
        google.maps.event.addListener(marker3, 'click', function() {
          map.setCenter(marker3.getPosition());
        });
        

        
        //Bowdoin
        var icon4 = {
        url: 'images/Bowdoin.gif',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker4 = new google.maps.Marker({
        position: { lat: 43.906732, lng: -69.963793},
        map: map,
        title:"Bowdoin College",
        icon: icon4
        });
        
        var contentString4 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Bowdoin College</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
        'The team dates back to the early 1980&#8217;s when two ice hockey players formed the women&#8217;s rugby club after having so much '+
        'fun learning the game during their semester away at Colorado University.  Since 1994 the team has posted 18 winning seasons '+
        '(all but two while playing Division I), consistently competing in the postseason and capturing several New England Championships. '+
        'The 2012-13 undefeated New England Small College Conference Champions and the 2006-07 New England Champions advanced to the Northeast '+
        'Regional Finals, earning bids to National Championship play.  In 2007 Bowdoin defeated U. of Arizona in the Elite Eight round and '+
        'fell to eventual National Champions U.C. Santa Cruz in the Final Four match up. ' +
        'Bowdoin plays its league games in the fall in the New England Small College Rugby Conference, patterned after their traditional NESCAC conference. '+
        'A shorter spring season features a slate of "friendlies", a local All-Maine Tournament and the introduction of 7-a-side rugby, thanks to its inclusion in the Olympics. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://athletics.bowdoin.edu/sports/wrugby/index">More info</a></p></div>'
        
        var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });
        
        google.maps.event.addListener(marker4, 'click', function() {
          infowindow4.open(map,marker4);
        });
        
        google.maps.event.addListener(marker4, 'click', function() {
          map.setCenter(marker4.getPosition());
        });
        
        
        //Norwich
        var icon5 = {
        url: 'images/norwich.gif',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker5 = new google.maps.Marker({
        position: { lat: 44.138478, lng: -72.658766},
        map: map,
        title:"Norwich University",
        icon: icon5
        });
        
        var contentString5 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Norwich University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
        'NUWRFC has been a varsity sport at Norwich University since 2007. '+
        'They are setting the standard for Varsity Women&#8217;s Rugby by getting funded, treated '+
        'and supported just as any other varsity sport would be at the Collegiate level. '+
        'NUWRFC is school funded, therefore more time can go into rugby and schoolwork without '+
        'the need to fundraise for busses, jerseys or trips for National Championships. ' +
        'They have 3 USA Rugby National Championships since 2011. NUWRFC is leading the way with the '+
        'official split of seasons by competing in Fall Fifteens and Spring Sevens. ' +
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://norwichathletics.com/sports/wrugby/index">More info</a></p></div>'
        
        var infowindow5 = new google.maps.InfoWindow({
          content: contentString5
        });
        
        google.maps.event.addListener(marker5, 'click', function() {
          infowindow5.open(map,marker5);
        });
        
        google.maps.event.addListener(marker5, 'click', function() {
          map.setCenter(marker5.getPosition());
        });
        
        
        //Quinnipiac
        var icon6 = {
        url: 'images/quin.gif',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker6 = new google.maps.Marker({
        position: { lat: 41.420305, lng: -72.894697},
        map: map,
        title:"Quinnipiac University",
        icon: icon6
        });
        
        var contentString6 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Quinnipiac University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
        'Quinnipiac Rugby was added as a varsity sport in 2010. QU Rugby is just 1 of 13 '+
        'varsity programs in the nation and only the second NCAA D-I Rugby program. ' +
        'Quinnipiac is the only university in the country to offer full athletic scholarships for NCAA women&#8217;s rugby. '+
        'In just the second year of the program, Quinnipiac was crowned the Tri-State Conference Champion and took third place '+
        'at nationals in the spring of 2013. The Quinnipiac University women&#8217;s rugby team advanced to the ACRA National Semifinals this year with a 46-20 win over the Brown Bears. ' +
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.quinnipiacbobcats.com/sports/wrugby/index">More info</a></p>'+
        '<iframe width="350" height="200" src="http://www.youtube.com/embed/fGwDHEB0VBQ" frameborder="0" allowfullscreen></iframe></div>'
        
        var infowindow6 = new google.maps.InfoWindow({
          content: contentString6
        });
        
        google.maps.event.addListener(marker6, 'click', function() {
          infowindow6.open(map,marker6);
        });
        
        google.maps.event.addListener(marker6, 'click', function() {
          map.setCenter(marker6.getPosition());
        });
        
        
        //Davenport
        var icon7 = {
        url: 'images/davenport.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker7 = new google.maps.Marker({
        position: { lat: 42.849824, lng: -85.530186},
        map: map,
        title:"Davenport University",
        icon: icon7
        });
        
        var contentString7 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Davenport University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
        'Continuing Davenports winning tradition, while carrying on and elite scholastic '+
        'program. 2013-2014 was the inaugural season for the Lady Panthers.</br>' +
        '6th Place- 2013 USA Rugby 7&#8217;s Nationals in North Carolina </br>'+
        'Semi-Finalist- 2014 USA Rugby 15&#8217;s Nationals</br>' +
        '3rd Place- ACRA 7&#8217;s Nationals </br>' +
        'Sparta Celctic 10&#8217;s Defending Champions </br>' +
        '2014 Great Lakes Conference Champions </br>' +
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.dupanthers.com/index.aspx?path=wrugby">More info</a></p></div>'
        
        
        var infowindow7 = new google.maps.InfoWindow({
          content: contentString7
        });
        
       google.maps.event.addListener(marker7, 'click', function() {
          infowindow7.open(map,marker7);
        });
       
       google.maps.event.addListener(marker7, 'click', function() {
          map.setCenter(marker7.getPosition());
        });
        
        
        //Brown
        var icon8 = {
        url: 'images/brown.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker8 = new google.maps.Marker({
        position: { lat: 41.826772, lng: -71.402548},
        map: map,
        title:"Brown University",
        icon: icon8
        });
        
        var contentString8 = '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Brown University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
        'Brown University followed suit in 1977, founding the Brown Women&#8217;s Rugby Football Club (BWRFC). '+
        'Over the next thirty-five years, BWRFC players passed the traditions of the sport from class to class. It grew to '+
        'become one of the top ranking teams in Division I. BWRFC reached the USA Rugby National Championships Round of 16 '+
        'and won the Ivy Championship six years in a row.  In 2008, 2009, 2010, and 2012, the BWRFC competed in the semi-final '+
        'national championship game - the furthest the club has ever gotten in its history.</br></br>' +
        'In recognition of the team&#8217;s success and the dedication of its alumni and supporters, in Spring 2013, Brown University changed ' +
        'the status of BWRFC from club to varsity.  As a varsity program, the team plans to continue its success, building a perennial ' +
        'powerhouse through its developmental and competitive side. The team boasts an active roster of approximately 30 players, many of whom '+
        'have never played a game of rugby until their college years. What the players lack in experience they make up for in athleticism and drive. '+
        'Be sure to keep an eye on the Brown Women&#8217;s Rugby. It seems as though their success will continue for many years to come. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.brownbears.com/sports/w-rugby/index">More info</a></p></div>'
        
        var infowindow8 = new google.maps.InfoWindow({
          content: contentString8
        });
        
        google.maps.event.addListener(marker8, 'click', function() {
          infowindow8.open(map,marker8);
        });
        
        google.maps.event.addListener(marker8, 'click', function() {
          map.setCenter(marker8.getPosition());
        });
        
        
        //Central Washington
        var icon9 = {
        url: 'images/cwu.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker9 = new google.maps.Marker({
        position: { lat: 47.003938, lng: -120.539954},
        map: map,
        title:"Central Washington University",
        icon: icon9
        });
        
        var infowindow9 = new google.maps.InfoWindow({
          content: '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Central Washington University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
          'CWU Rugby operated as a university club sport from 1972 until 2013; '+
          'the university announced in early 2014 that CWU Rugby would be a varsity sport within '+
          'the CWU Department of Athletics. One of the factors in CWU rugby turning varsity was the '+
          'exposure gained from the fact that the Varsity Cup tournament in which CWU plays every spring '+
          'is broadcast live on NBC Sports. ' +
          '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://wildcatsports.com/index.aspx?path=wrubgy">More info</a></p></div>'
        });
        
        google.maps.event.addListener(marker9, 'click', function() {
          infowindow9.open(map,marker9);
        });
        
        google.maps.event.addListener(marker9, 'click', function() {
          map.setCenter(marker9.getPosition());
        });
        
        
        //Life
        var icon10 = {
        url: 'images/life.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(50, 35)
        };
        
        var marker10 = new google.maps.Marker({
        position: { lat: 33.930833, lng: -84.514505},
        map: map,
        title:"Life University",
        icon: icon10,
        });
        
        var infowindow10 = new google.maps.InfoWindow({
          content: '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Life University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
          'It has been a successful fall season for Life U, going 7-1 and notching '+
          'victories against some solid teams in the southeast.  Head Coach Rosalind Chou is pleased '+
          'with the commitment and attitude of the girls, saying, "The Lee match capped off a productive '+
          'fall season as there was improvement across the board from every member of the team. The coaching '+
          'staff was most pleased with the improved defensive effort." The ladies get a much deserved break to rest '+
          'and recover and Chou hopes to use the momentum going into the competitive spring 15s season to build on what the team has started. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.liferunningeagles.com/sport/0/9.php">More info</a></p></div>'
        });
        
        google.maps.event.addListener(marker10, 'click', function() {
          infowindow10.open(map,marker10);
        });
        
        google.maps.event.addListener(marker10, 'click', function() {
          map.setCenter(marker10.getPosition());
        });
        
        
        //Sacred Heart
        var icon11 = {
        url: 'images/sacred.svg',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker11 = new google.maps.Marker({
        position: { lat: 41.221728, lng: -73.242137},
        map: map,
        title:"Sacred Heart University",
        icon: icon11
        });
        
        var infowindow11 = new google.maps.InfoWindow({
          content: '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Sacred Heart University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
          'Sacred Heart plays both fall and spring seasons, practicing Tuesday through Friday and normally playing games on Sundays. '+
          'Their fall season consists of league games and playoffs, while in the spring we participate in tournaments such as Beast of '+
          'the East and play "friendly" games against challenging teams. '+
          'The Queens of Heart are just gettign out of another exceptional Fall Rugby Season. Once again making it to the playoffs. '+
          'Last Spring the Queens won The Plate at Beast of the East Rugby Tournament, one of the largest collegiate rugby tournaments in the nation. '+
          'The Queens had a final rank of 3rd out of 23 teams. The team continues to work toward another successful season and to uphold the high standards that they have achieved. '+
          'The program will begin varsity competition in the Fall of 2015. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.sacredheartpioneers.com/sports/w-rugby/index">More info</a></p></div>'
        });
        
        google.maps.event.addListener(marker11, 'click', function() {
          infowindow11.open(map,marker11);
        });
        
        google.maps.event.addListener(marker11, 'click', function() {
          map.setZoom(8)
          map.setCenter(marker11.getPosition());
        });
        
        //Army
        var icon12 = {
        url: 'images/army.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(40, 40)
        };
        
        var marker12 = new google.maps.Marker({
        position: { lat: 41.391837, lng: -73.962503},
        map: map,
        title:"United States Military Academy",
        icon: icon12
        });
        
        var infowindow12 = new google.maps.InfoWindow({
          content:'<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">United States Military Academy (Army)</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
          'Under the guidance of head coach Bill LeClerc, Army will compete in the Division I American Collegiate Rugby '+
          'Association NWRC Conference. The conference includes Norwich, Connecticut, Massachusetts, Virginia, '+
          'Boston College, Northeastern, Quinnipiac, New Hampshire, Rhode Island, American International and Boston University. '+
        '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.goarmysports.com/sports/w-rugby/army-w-rugby-body.html">More info</a></p></div>'
        });
        
        google.maps.event.addListener(marker12, 'click', function() {
          infowindow12.open(map,marker12);
        });
        
        google.maps.event.addListener(marker12, 'click', function() {
          map.setCenter(marker12.getPosition());
        });
        
        
        //Lindenwood
        var icon13 = {
        url: 'images/lindenwood.png',
        size: null,
        origin: null,
        anchor: null,
        scaledSize: new google.maps.Size(45, 45)
        };
        
        var marker13 = new google.maps.Marker({
        position: { lat: 38.786764, lng: -90.50315},
        map: map,
        title:"Lindenwood University",
        icon: icon13
        });
        
        var infowindow13 = new google.maps.InfoWindow({
          content: '<div class="mapcontent">'+
        '<h3 style="font-family:verdana; font-style:italic; color:#b51515;">Lindenwood University</h3>' +
        '<p style="width: 350px; font-size:10px; font-family: verdana; color: #2b2b2d; text-align:justify">'+
          'Lindenwood is fully funded by the university with all of their travel, hotels, meals, equipment, playing '+
          'attire and off field attire paid for by the university, with our own locker rooms, film room and rugby office '+
          'for our full time coaching staff. Lindenwood currently competes in the Division 1 Midwest Conference and has a full 15&#8217;s '+
          'program in the Fall and full 7&#8217;s program in the Spring. With all student athletes competing in both. '+
          '<a style="color: #b51515; text-decoration:none;" target="_blank" href="http://www.lindenwoodlionssls.com/index.aspx?path=wrugby&tab=rugby-w">More info</a></p></div>'
        });
        
        google.maps.event.addListener(marker13, 'click', function() {
          infowindow13.open(map,marker13);
        });
        
        google.maps.event.addListener(marker13, 'click', function() {
          map.setCenter(marker13.getPosition());
        });
        
      }
      google.maps.event.addDomListener(window, 'load', initialize);
